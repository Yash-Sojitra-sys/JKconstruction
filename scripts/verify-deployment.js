// Deployment Verification System
// This script verifies that deployments are authorized and secure
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const DeploymentConfigManager = require('./deploy-config');
const SecurityConfig = require('../.security/auth.config');

class DeploymentVerifier {
    constructor() {
        this.configManager = new DeploymentConfigManager();
        this.securityConfig = new SecurityConfig();
        this.verificationSteps = [
            'verifyUserAuthorization',
            'validateEnvironment',
            'checkSystemIntegrity',
            'verifyBuildConfiguration',
            'validateSecuritySettings'
        ];
    }

    // Verify user authorization
    verifyUserAuthorization() {
        console.log('🔐 Verifying user authorization...');
        
        const currentUser = process.env.USERNAME || process.env.USER || 'unknown';
        const config = this.configManager.loadConfig();
        
        if (!config.authorizedUsers.includes(currentUser)) {
            throw new Error(`Unauthorized user: ${currentUser}`);
        }

        // Generate user verification hash
        const timestamp = Date.now();
        const userHash = this.securityConfig.generateUserHash(currentUser, timestamp);
        
        console.log(`✅ User ${currentUser} authorized (Hash: ${userHash.substring(0, 8)}...)`);
        return true;
    }

    // Validate environment configuration
    validateEnvironment() {
        console.log('🌍 Validating environment configuration...');
        
        const deploymentConfig = require('../.config/deployment.config');
        const requiredVars = deploymentConfig.validation.requiredEnvVars;
        
        const config = this.configManager.loadConfig();
        
        // Check if all required environment variables are available
        const missingVars = [];
        if (!config.supabase.url) missingVars.push('VITE_SUPABASE_URL');
        if (!config.supabase.anonKey) missingVars.push('VITE_SUPABASE_ANON_KEY');
        
        if (missingVars.length > 0) {
            throw new Error(`Missing environment variables: ${missingVars.join(', ')}`);
        }

        console.log('✅ Environment configuration valid');
        return true;
    }

    // Check system integrity
    checkSystemIntegrity() {
        console.log('🔍 Checking system integrity...');
        
        const deploymentConfig = require('../.config/deployment.config');
        const requiredFiles = deploymentConfig.validation.requiredFiles;
        
        for (const file of requiredFiles) {
            if (!fs.existsSync(file)) {
                throw new Error(`Required file missing: ${file}`);
            }
        }

        // Verify system requirements
        this.securityConfig.validateSystemRequirements();
        
        console.log('✅ System integrity verified');
        return true;
    }

    // Verify build configuration
    verifyBuildConfiguration() {
        console.log('⚙️ Verifying build configuration...');
        
        // Check if package.json has secure build script
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        
        if (!packageJson.scripts.build.includes('secure-build.js')) {
            throw new Error('Insecure build configuration detected');
        }

        // Verify vite configuration
        if (!fs.existsSync('vite.config.ts')) {
            throw new Error('Vite configuration missing');
        }

        console.log('✅ Build configuration verified');
        return true;
    }

    // Validate security settings
    validateSecuritySettings() {
        console.log('🛡️ Validating security settings...');
        
        // Check if deployment key exists
        if (!fs.existsSync('.deployment-key')) {
            throw new Error('Deployment key not found - run setup first');
        }

        // Verify deployment time window (if enabled)
        const config = this.configManager.loadConfig();
        if (config.deploymentWindow && !this.securityConfig.isValidDeploymentTime()) {
            console.log('⚠️ Warning: Deployment outside recommended time window');
        }

        console.log('✅ Security settings validated');
        return true;
    }

    // Run complete verification
    async runVerification() {
        console.log('🔐 JKC Construction - Deployment Verification');
        console.log('='.repeat(50));
        
        try {
            for (const step of this.verificationSteps) {
                await this[step]();
            }
            
            console.log('\n✅ All verification checks passed!');
            console.log('🚀 System ready for secure deployment');
            
            return true;
            
        } catch (error) {
            console.error('\n❌ Verification failed:', error.message);
            console.log('🔧 Please resolve the issues before attempting deployment');
            
            return false;
        }
    }
}

// Execute if run directly
if (require.main === module) {
    const verifier = new DeploymentVerifier();
    verifier.runVerification().then(success => {
        process.exit(success ? 0 : 1);
    });
}

module.exports = DeploymentVerifier;
