// Deployment Wrapper with Security Integration
// This is the main entry point for all deployment operations
const SecurityMonitor = require('./security-monitor');
const DeploymentVerifier = require('./verify-deployment');
const AdvancedDeploymentManager = require('./deploy-manager');

class SecureDeploymentWrapper {
    constructor() {
        this.securityMonitor = new SecurityMonitor();
        this.verifier = new DeploymentVerifier();
        this.deploymentManager = new AdvancedDeploymentManager();
    }

    async executeSecureDeployment(target = 'vercel') {
        const startTime = Date.now();
        const user = process.env.USERNAME || process.env.USER || 'unknown';
        
        console.log('🔐 JKC Construction - Secure Deployment System');
        console.log('='.repeat(60));
        console.log(`👤 User: ${user}`);
        console.log(`🎯 Target: ${target}`);
        console.log(`🕐 Time: ${new Date().toLocaleString()}`);
        console.log('='.repeat(60));

        try {
            // Step 1: Check for suspicious activity
            if (this.securityMonitor.checkSuspiciousActivity()) {
                throw new Error('Suspicious activity detected in command line arguments');
            }

            // Step 2: Run comprehensive verification
            console.log('\n🔍 Running security verification...');
            const verificationPassed = await this.verifier.runVerification();
            
            if (!verificationPassed) {
                this.securityMonitor.logDeploymentAttempt('failed', user, {
                    reason: 'Security verification failed',
                    target,
                    duration: Date.now() - startTime
                });
                throw new Error('Security verification failed');
            }

            // Step 3: Execute deployment
            console.log('\n🚀 Executing secure deployment...');
            await this.deploymentManager.deploy(target);

            // Step 4: Log successful deployment
            const duration = Date.now() - startTime;
            this.securityMonitor.logDeploymentAttempt('success', user, {
                target,
                duration,
                timestamp: new Date().toISOString()
            });

            console.log('\n✅ Secure deployment completed successfully!');
            console.log(`⏱️  Total time: ${Math.round(duration / 1000)}s`);
            console.log('🔒 All security protocols maintained');

        } catch (error) {
            // Log failed deployment attempt
            this.securityMonitor.logDeploymentAttempt('failed', user, {
                error: error.message,
                target,
                duration: Date.now() - startTime
            });

            console.error('\n❌ Secure deployment failed:', error.message);
            console.log('🔧 Please resolve security issues before retrying');
            
            // Show security report on failure
            this.showSecuritySummary();
            
            process.exit(1);
        }
    }

    // Show security summary
    showSecuritySummary() {
        console.log('\n📊 Security Summary:');
        console.log('-'.repeat(30));
        
        const report = this.securityMonitor.generateSecurityReport();
        
        if (report.message) {
            console.log(report.message);
            return;
        }

        console.log(`Total deployment attempts: ${report.totalAttempts}`);
        console.log(`Successful deployments: ${report.successfulDeployments}`);
        console.log(`Failed attempts: ${report.failedAttempts}`);
        console.log(`Unauthorized attempts: ${report.unauthorizedAttempts}`);
        
        if (report.unauthorizedAttempts > 0) {
            console.log('⚠️  Warning: Unauthorized deployment attempts detected');
        }
        
        if (report.lastActivity) {
            console.log(`Last activity: ${new Date(report.lastActivity).toLocaleString()}`);
        }
    }
}

// CLI interface
if (require.main === module) {
    const target = process.argv[2] || 'vercel';
    const wrapper = new SecureDeploymentWrapper();
    wrapper.executeSecureDeployment(target);
}

module.exports = SecureDeploymentWrapper;
