# 🚂 Deploy JKC Backend to Railway - Complete Guide

## Step 1: Prepare Backend for Railway

### 1.1 Create Railway Configuration
Your backend is already configured with the necessary files:
- ✅ `package.json` with proper scripts
- ✅ `server.js` as main entry point
- ✅ `.env.example` for environment variables

### 1.2 Add Railway-specific files (if needed)
Railway works with your existing setup, but let's ensure compatibility:

```json
// package.json already has:
{
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  }
}
```

## Step 2: Deploy to Railway

### Option A: Deploy via Railway Dashboard (Recommended)

1. **Go to Railway**: https://railway.app
2. **Sign up/Login** with GitHub account
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Connect your GitHub account** (if not already connected)
6. **Select your repository** containing the backend code
7. **Set root directory** to `backend` folder
8. **Click "Deploy"**

### Option B: Deploy via Railway CLI

1. **Install Railway CLI**:
```bash
npm install -g @railway/cli
```

2. **Login to Railway**:
```bash
railway login
```

3. **Initialize project**:
```bash
cd backend
railway init
```

4. **Deploy**:
```bash
railway up
```

## Step 3: Configure Environment Variables

After deployment, add these environment variables in Railway dashboard:

### 3.1 Go to Railway Dashboard
1. Click on your deployed project
2. Go to "Variables" tab
3. Add each variable:

### 3.2 Required Environment Variables
```env
NODE_ENV=production
PORT=3000

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=jaykrishna.surat@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=noreply@jaykrishna.com
EMAIL_TO=jaykrishna.surat@gmail.com

# Security
JWT_SECRET=jkc-super-secret-key-change-this-in-production
CORS_ORIGIN=https://your-vercel-frontend.vercel.app

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

### 3.3 Gmail App Password Setup
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to **App passwords**
4. Generate password for "Mail"
5. Copy the 16-character password
6. Use this in `EMAIL_PASS` variable

## Step 4: Get Your Railway Backend URL

After deployment:
1. Go to Railway dashboard
2. Click on your project
3. Go to "Settings" tab
4. Find "Domains" section
5. Your URL will be: `https://your-app-name.up.railway.app`

## Step 5: Test Your Deployed Backend

Test the health endpoint:
```bash
curl https://your-app-name.up.railway.app/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "JKC Backend API is running",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production"
}
```

## Step 6: Update Frontend Configuration

Update your frontend to use the Railway backend:

1. **Update API service** (already done):
```typescript
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-app-name.up.railway.app/api';
```

2. **Set environment variable** in Vercel:
```env
VITE_API_BASE_URL=https://your-app-name.up.railway.app/api
```

## Step 7: Deploy Frontend to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Import your frontend project**
3. **Set environment variables**:
   - `VITE_API_BASE_URL=https://your-railway-backend.up.railway.app/api`
4. **Deploy**

## Step 8: Update CORS Configuration

After frontend deployment:
1. Go back to Railway dashboard
2. Update `CORS_ORIGIN` variable to your Vercel URL:
   ```env
   CORS_ORIGIN=https://your-frontend.vercel.app
   ```

## 🔧 Troubleshooting

### Backend Not Starting
- Check Railway logs in dashboard
- Ensure `PORT` is set to `3000` or use `process.env.PORT`
- Verify all required dependencies are in `package.json`

### Email Not Working
- Verify Gmail app password is correct
- Check EMAIL_* variables are set
- Test with `/api/contact/test` endpoint

### CORS Errors
- Ensure `CORS_ORIGIN` matches your frontend URL exactly
- Include `https://` in the URL
- Redeploy after changing CORS settings

## 🎯 Final Checklist

- ✅ Backend deployed to Railway
- ✅ Environment variables configured
- ✅ Gmail app password set up
- ✅ Backend health check working
- ✅ Frontend updated with Railway URL
- ✅ Frontend deployed to Vercel
- ✅ CORS configured for frontend domain
- ✅ Contact form working end-to-end

## 📞 Support

- Railway Documentation: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Your backend health check: `https://your-app.up.railway.app/api/health`

---

**Your JKC Construction website will now work online from anywhere! 🌐**
