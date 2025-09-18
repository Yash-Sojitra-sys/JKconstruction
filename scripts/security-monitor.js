// Security Monitoring System
// This script monitors and logs deployment attempts
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class SecurityMonitor {
    constructor() {
        this.logFile = path.join(__dirname, '..', '.security', 'deployment.log');
        this.maxLogEntries = 100;
        this.suspiciousPatterns = [
            'unauthorized',
            'bypass',
            'crack',
            'hack',
            'force'
        ];
    }

    // Log deployment attempt
    logDeploymentAttempt(status, user, details = {}) {
        const timestamp = new Date().toISOString();
        const sessionId = crypto.randomBytes(8).toString('hex');
        
        const logEntry = {
            timestamp,
            sessionId,
            status, // 'success', 'failed', 'unauthorized'
            user: user || 'unknown',
            system: {
                platform: process.platform,
                hostname: require('os').hostname(),
                nodeVersion: process.version
            },
            details
        };

        this.writeLog(logEntry);
        
        // Alert on suspicious activity
        if (status === 'unauthorized' || status === 'failed') {
            this.alertSuspiciousActivity(logEntry);
        }
    }

    // Write log entry
    writeLog(entry) {
        try {
            // Ensure security directory exists
            const securityDir = path.dirname(this.logFile);
            if (!fs.existsSync(securityDir)) {
                fs.mkdirSync(securityDir, { recursive: true });
            }

            let logs = [];
            if (fs.existsSync(this.logFile)) {
                const logContent = fs.readFileSync(this.logFile, 'utf8');
                logs = logContent ? JSON.parse(logContent) : [];
            }

            logs.push(entry);

            // Keep only recent entries
            if (logs.length > this.maxLogEntries) {
                logs = logs.slice(-this.maxLogEntries);
            }

            fs.writeFileSync(this.logFile, JSON.stringify(logs, null, 2));
        } catch (error) {
            console.error('Failed to write security log:', error.message);
        }
    }

    // Alert on suspicious activity
    alertSuspiciousActivity(entry) {
        console.log('\n🚨 SECURITY ALERT 🚨');
        console.log('='.repeat(40));
        console.log(`Timestamp: ${entry.timestamp}`);
        console.log(`Status: ${entry.status.toUpperCase()}`);
        console.log(`User: ${entry.user}`);
        console.log(`System: ${entry.system.hostname} (${entry.system.platform})`);
        console.log('='.repeat(40));
        
        // In a real implementation, you might send alerts via email, Slack, etc.
    }

    // Check for suspicious command line arguments
    checkSuspiciousActivity() {
        const commandLine = process.argv.join(' ').toLowerCase();
        
        for (const pattern of this.suspiciousPatterns) {
            if (commandLine.includes(pattern)) {
                this.logDeploymentAttempt('suspicious', process.env.USERNAME || 'unknown', {
                    reason: `Suspicious pattern detected: ${pattern}`,
                    commandLine: process.argv.join(' ')
                });
                return true;
            }
        }
        
        return false;
    }

    // Generate security report
    generateSecurityReport() {
        if (!fs.existsSync(this.logFile)) {
            return { message: 'No security logs found' };
        }

        const logs = JSON.parse(fs.readFileSync(this.logFile, 'utf8'));
        const report = {
            totalAttempts: logs.length,
            successfulDeployments: logs.filter(l => l.status === 'success').length,
            failedAttempts: logs.filter(l => l.status === 'failed').length,
            unauthorizedAttempts: logs.filter(l => l.status === 'unauthorized').length,
            suspiciousActivity: logs.filter(l => l.status === 'suspicious').length,
            lastActivity: logs.length > 0 ? logs[logs.length - 1].timestamp : null,
            uniqueUsers: [...new Set(logs.map(l => l.user))],
            recentActivity: logs.slice(-10)
        };

        return report;
    }
}

module.exports = SecurityMonitor;
