import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Security check for deployment
function verifyDeploymentAuth() {
  const deploymentKeyPath = path.join(__dirname, '.deployment-key');
  if (process.env.NODE_ENV === 'production' && !fs.existsSync(deploymentKeyPath)) {
    throw new Error('🚫 Unauthorized build attempt - deployment key not found');
  }
}

// Run security check
if (process.env.NODE_ENV === 'production') {
  try {
    verifyDeploymentAuth();
    console.log('🔐 Deployment authorization verified');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: false, // Disable source maps for security
    minify: 'terser', // Use terser for better obfuscation
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
      },
      mangle: {
        toplevel: true, // Mangle top-level variable names
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable manual chunking for security
      },
    },
  },
  define: {
    // Remove development tools in production
    __DEV__: false,
  },
});
