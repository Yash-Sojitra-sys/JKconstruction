// Deployment Setup Script
// Run this once to initialize secure deployment
const DeploymentConfigManager = require('./deploy-config');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function setupDeployment() {
    console.log('🔐 JKC Construction - Secure Deployment Setup');
    console.log('='.repeat(50));
    
    const manager = new DeploymentConfigManager();
    
    // Get deployment configuration
    const masterKey = await askQuestion('Enter master deployment key: ');
    if (masterKey !== 'JKC_SECURE_2024_DEPLOY') {
        console.log('❌ Invalid master key. Setup aborted.');
        process.exit(1);
    }

    const authorizedUser = await askQuestion('Enter authorized username (current: ' + (process.env.USERNAME || process.env.USER) + '): ');
    const supabaseUrl = await askQuestion('Enter Supabase URL: ');
    const supabaseKey = await askQuestion('Enter Supabase Anon Key: ');
    
    const config = {
        authorizedUsers: [authorizedUser || process.env.USERNAME || process.env.USER],
        supabase: {
            url: supabaseUrl,
            anonKey: supabaseKey
        },
        deploymentWindow: {
            start: 0,
            end: 23
        },
        setupDate: new Date().toISOString(),
        version: '1.0.0'
    };

    manager.saveConfig(config);
    
    console.log('✅ Deployment setup completed successfully!');
    console.log('🔒 Configuration encrypted and secured.');
    console.log('⚠️  Keep the .deployment-key file secure and do not share it.');
    
    rl.close();
}

setupDeployment().catch(console.error);
