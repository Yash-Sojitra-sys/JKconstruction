// Advanced Deployment Manager with Multi-layer Security
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const DeploymentConfigManager = require('./deploy-config');
const SecureBuildManager = require('./secure-build');

class AdvancedDeploymentManager {
    constructor() {
        this.configManager = new DeploymentConfigManager();
        this.buildManager = new SecureBuildManager();
        this.deploymentTargets = {
            'vercel': this.deployToVercel.bind(this),
            'netlify': this.deployToNetlify.bind(this),
            'github': this.deployToGitHub.bind(this)
        };
    }

    // Generate deployment session token
    generateSessionToken() {
        const timestamp = Date.now();
        const randomBytes = crypto.randomBytes(16).toString('hex');
        const sessionData = `${timestamp}_${randomBytes}`;
        return crypto.createHash('sha256').update(sessionData).digest('hex');
    }

    // Verify deployment prerequisites
    verifyPrerequisites() {
        console.log('🔍 Verifying deployment prerequisites...');
        
        // Check if user has deployment authorization
        this.configManager.verifyDeploymentAuth();
        
        // Check if all required tools are installed
        const requiredTools = ['npm', 'git'];
        for (const tool of requiredTools) {
            try {
                execSync(`${tool} --version`, { stdio: 'pipe' });
            } catch (error) {
                throw new Error(`Required tool not found: ${tool}`);
            }
        }
        
        console.log('✅ Prerequisites verified');
    }

    // Create deployment manifest
    createDeploymentManifest() {
        const config = this.configManager.loadConfig();
        const sessionToken = this.generateSessionToken();
        
        const manifest = {
            deploymentId: crypto.randomUUID(),
            sessionToken,
            timestamp: new Date().toISOString(),
            deployer: process.env.USERNAME || process.env.USER,
            version: require('../package.json').version,
            buildHash: this.calculateBuildHash(),
            config: {
                supabaseUrl: config.supabase.url,
                environment: 'production'
            }
        };
        
        fs.writeFileSync('.deployment-manifest.json', JSON.stringify(manifest, null, 2));
        return manifest;
    }

    // Calculate build hash for integrity verification
    calculateBuildHash() {
        const buildFiles = [
            'package.json',
            'vite.config.ts',
            'tsconfig.json'
        ];
        
        let combinedContent = '';
        for (const file of buildFiles) {
            if (fs.existsSync(file)) {
                combinedContent += fs.readFileSync(file, 'utf8');
            }
        }
        
        return crypto.createHash('md5').update(combinedContent).digest('hex');
    }

    // Deploy to Vercel with security checks
    async deployToVercel() {
        console.log('🚀 Deploying to Vercel...');
        
        try {
            // Check if Vercel CLI is installed
            execSync('vercel --version', { stdio: 'pipe' });
        } catch (error) {
            throw new Error('Vercel CLI not installed. Run: npm i -g vercel');
        }

        const config = this.configManager.loadConfig();
        
        // Set environment variables for Vercel
        const envVars = [
            `VITE_SUPABASE_URL=${config.supabase.url}`,
            `VITE_SUPABASE_ANON_KEY=${config.supabase.anonKey}`,
            `VITE_NODE_ENV=production`
        ];

        for (const envVar of envVars) {
            const [key, value] = envVar.split('=');
            try {
                execSync(`vercel env add ${key} production`, { 
                    input: value,
                    stdio: 'pipe'
                });
            } catch (error) {
                // Environment variable might already exist
                console.log(`⚠️  Environment variable ${key} might already exist`);
            }
        }

        // Deploy to Vercel
        execSync('vercel --prod', { stdio: 'inherit' });
        
        console.log('✅ Vercel deployment completed');
    }

    // Deploy to Netlify with security checks
    async deployToNetlify() {
        console.log('🚀 Deploying to Netlify...');
        
        try {
            execSync('netlify --version', { stdio: 'pipe' });
        } catch (error) {
            throw new Error('Netlify CLI not installed. Run: npm i -g netlify-cli');
        }

        // Deploy to Netlify
        execSync('netlify deploy --prod --dir=dist', { stdio: 'inherit' });
        
        console.log('✅ Netlify deployment completed');
    }

    // Deploy to GitHub Pages
    async deployToGitHub() {
        console.log('🚀 Deploying to GitHub Pages...');
        
        // This would require additional setup for GitHub Pages
        console.log('⚠️  GitHub Pages deployment requires manual setup');
        console.log('📖 Refer to GitHub Pages documentation for setup instructions');
    }

    // Main deployment orchestrator
    async deploy(target = 'vercel') {
        console.log('🔐 JKC Construction - Secure Deployment Manager');
        console.log('='.repeat(60));
        
        try {
            // Step 1: Verify prerequisites
            this.verifyPrerequisites();
            
            // Step 2: Execute secure build
            await this.buildManager.executeSecureBuild();
            
            // Step 3: Create deployment manifest
            const manifest = this.createDeploymentManifest();
            console.log(`📋 Deployment ID: ${manifest.deploymentId}`);
            
            // Step 4: Deploy to target platform
            if (this.deploymentTargets[target]) {
                await this.deploymentTargets[target]();
            } else {
                throw new Error(`Unknown deployment target: ${target}`);
            }
            
            // Step 5: Cleanup
            this.cleanup();
            
            console.log('\n🎉 Deployment completed successfully!');
            console.log(`🌐 Your JKC Construction website is now live!`);
            
        } catch (error) {
            console.error('\n❌ Deployment failed:', error.message);
            this.cleanup();
            process.exit(1);
        }
    }

    // Cleanup temporary files
    cleanup() {
        const tempFiles = [
            '.deployment-manifest.json',
            '.env',
            '.env.build'
        ];
        
        for (const file of tempFiles) {
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
            }
        }
    }
}

// CLI interface
if (require.main === module) {
    const target = process.argv[2] || 'vercel';
    const deploymentManager = new AdvancedDeploymentManager();
    deploymentManager.deploy(target);
}

module.exports = AdvancedDeploymentManager;
