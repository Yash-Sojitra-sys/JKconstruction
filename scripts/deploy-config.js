// Deployment Configuration Manager
// This file manages secure deployment configurations
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

class DeploymentConfigManager {
    constructor() {
        this.algorithm = 'aes-256-gcm';
        this.keyDerivationSalt = 'jkc_construction_2024_secure_deployment';
        this.configPath = path.join(__dirname, '..', '.deploy');
        this.secretKeyFile = path.join(__dirname, '..', '.deployment-key');
    }

    // Generate deployment key from environment and system info
    generateDeploymentKey() {
        const systemInfo = {
            user: process.env.USERNAME || process.env.USER || 'unknown',
            hostname: require('os').hostname(),
            platform: process.platform,
            timestamp: Date.now()
        };
        
        const keyMaterial = JSON.stringify(systemInfo) + this.keyDerivationSalt;
        return crypto.createHash('sha256').update(keyMaterial).digest();
    }

    // Encrypt configuration data
    encryptConfig(data) {
        const key = this.generateDeploymentKey();
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipher(this.algorithm, key);
        
        let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        const authTag = cipher.getAuthTag();
        
        return {
            encrypted,
            iv: iv.toString('hex'),
            authTag: authTag.toString('hex')
        };
    }

    // Decrypt configuration data
    decryptConfig(encryptedData) {
        try {
            const key = this.generateDeploymentKey();
            const decipher = crypto.createDecipher(this.algorithm, key);
            
            let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            
            return JSON.parse(decrypted);
        } catch (error) {
            throw new Error('Invalid deployment key or corrupted configuration');
        }
    }

    // Save encrypted configuration
    saveConfig(config) {
        const encrypted = this.encryptConfig(config);
        fs.writeFileSync(this.configPath, JSON.stringify(encrypted, null, 2));
        
        // Create deployment key file
        const keyHash = crypto.createHash('md5').update(this.generateDeploymentKey()).digest('hex');
        fs.writeFileSync(this.secretKeyFile, keyHash);
        
        console.log('✅ Deployment configuration secured');
    }

    // Load and decrypt configuration
    loadConfig() {
        if (!fs.existsSync(this.configPath)) {
            throw new Error('Deployment configuration not found. Run setup first.');
        }

        if (!fs.existsSync(this.secretKeyFile)) {
            throw new Error('Deployment key not found. Unauthorized deployment attempt.');
        }

        const encryptedData = JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
        const storedKeyHash = fs.readFileSync(this.secretKeyFile, 'utf8');
        const currentKeyHash = crypto.createHash('md5').update(this.generateDeploymentKey()).digest('hex');

        if (storedKeyHash !== currentKeyHash) {
            throw new Error('Deployment key mismatch. Unauthorized deployment attempt.');
        }

        return this.decryptConfig(encryptedData);
    }

    // Verify deployment authorization
    verifyDeploymentAuth() {
        try {
            const config = this.loadConfig();
            const currentTime = Date.now();
            
            // Check if deployment is authorized for this environment
            if (config.authorizedUsers && config.authorizedUsers.length > 0) {
                const currentUser = process.env.USERNAME || process.env.USER || 'unknown';
                if (!config.authorizedUsers.includes(currentUser)) {
                    throw new Error(`Deployment not authorized for user: ${currentUser}`);
                }
            }

            // Check deployment time restrictions (if any)
            if (config.deploymentWindow) {
                const hour = new Date().getHours();
                if (hour < config.deploymentWindow.start || hour > config.deploymentWindow.end) {
                    throw new Error('Deployment outside authorized time window');
                }
            }

            return true;
        } catch (error) {
            console.error('🚫 Deployment Authorization Failed:', error.message);
            process.exit(1);
        }
    }
}

module.exports = DeploymentConfigManager;
