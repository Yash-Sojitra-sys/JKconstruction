// Secure Build Script with Obfuscation
// This script handles the build process with security checks
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const DeploymentConfigManager = require('./deploy-config');

class SecureBuildManager {
    constructor() {
        this.manager = new DeploymentConfigManager();
        this.buildSteps = [
            'pre_build_validation',
            'environment_setup',
            'dependency_installation',
            'type_checking',
            'build_execution',
            'post_build_validation'
        ];
    }

    // Obfuscated build step names
    get obfuscatedSteps() {
        return {
            'pre_build_validation': 'α_validation_protocol',
            'environment_setup': 'β_env_initialization',
            'dependency_installation': 'γ_dependency_resolution',
            'type_checking': 'δ_type_verification',
            'build_execution': 'ε_compilation_process',
            'post_build_validation': 'ζ_integrity_check'
        };
    }

    log(step, message) {
        const obfuscatedStep = this.obfuscatedSteps[step] || step;
        console.log(`[${obfuscatedStep}] ${message}`);
    }

    async executeBuildStep(step) {
        this.log(step, 'Initiating...');
        
        switch(step) {
            case 'pre_build_validation':
                this.manager.verifyDeploymentAuth();
                this.validateProjectStructure();
                break;
                
            case 'environment_setup':
                this.setupEnvironment();
                break;
                
            case 'dependency_installation':
                this.installDependencies();
                break;
                
            case 'type_checking':
                this.runTypeChecking();
                break;
                
            case 'build_execution':
                this.executeBuild();
                break;
                
            case 'post_build_validation':
                this.validateBuildOutput();
                break;
        }
        
        this.log(step, 'Completed ✅');
    }

    validateProjectStructure() {
        const requiredFiles = [
            'package.json',
            'vite.config.ts',
            'tsconfig.json',
            'src/App.tsx',
            'src/pages/Home.tsx'
        ];

        for (const file of requiredFiles) {
            if (!fs.existsSync(path.join(process.cwd(), file))) {
                throw new Error(`Required file missing: ${file}`);
            }
        }
    }

    setupEnvironment() {
        const config = this.manager.loadConfig();
        
        // Create temporary .env file for build
        const envContent = `VITE_SUPABASE_URL=${config.supabase.url}
VITE_SUPABASE_ANON_KEY=${config.supabase.anonKey}
VITE_NODE_ENV=production
`;
        
        fs.writeFileSync('.env.build', envContent);
        
        // Copy to standard .env for build process
        fs.writeFileSync('.env', envContent);
    }

    installDependencies() {
        try {
            execSync('npm ci', { stdio: 'inherit' });
        } catch (error) {
            throw new Error('Dependency installation failed');
        }
    }

    runTypeChecking() {
        try {
            execSync('npx tsc --noEmit', { stdio: 'inherit' });
        } catch (error) {
            throw new Error('TypeScript compilation failed');
        }
    }

    executeBuild() {
        try {
            execSync('npm run build', { stdio: 'inherit' });
        } catch (error) {
            throw new Error('Build execution failed');
        }
    }

    validateBuildOutput() {
        const distPath = path.join(process.cwd(), 'dist');
        if (!fs.existsSync(distPath)) {
            throw new Error('Build output directory not found');
        }

        const indexPath = path.join(distPath, 'index.html');
        if (!fs.existsSync(indexPath)) {
            throw new Error('Build output incomplete - index.html missing');
        }

        // Clean up temporary files
        if (fs.existsSync('.env.build')) {
            fs.unlinkSync('.env.build');
        }
    }

    async executeSecureBuild() {
        console.log('🔐 JKC Construction - Secure Build Process');
        console.log('='.repeat(50));
        
        try {
            for (const step of this.buildSteps) {
                await this.executeBuildStep(step);
            }
            
            console.log('\n✅ Secure build completed successfully!');
            console.log('📦 Build artifacts ready for deployment');
            
        } catch (error) {
            console.error('\n❌ Build failed:', error.message);
            process.exit(1);
        }
    }
}

// Execute if run directly
if (require.main === module) {
    const buildManager = new SecureBuildManager();
    buildManager.executeSecureBuild();
}

module.exports = SecureBuildManager;
