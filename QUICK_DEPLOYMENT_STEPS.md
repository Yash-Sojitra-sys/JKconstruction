# 🚀 Quick Deployment Steps - JKC Construction

## Step 1: Deploy Backend to Railway (5 minutes)

1. **Go to Railway**: https://railway.app
2. **Sign up** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select your repository** → **Set root directory to `backend`**
5. **Deploy** (Railway will auto-detect Node.js)

## Step 2: Configure Environment Variables

In Railway dashboard → Variables tab, add:

```
NODE_ENV=production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=jaykrishna.surat@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=jaykrishna.surat@gmail.com
JWT_SECRET=jkc-secret-key-change-this
CORS_ORIGIN=*
```

## Step 3: Get Gmail App Password

1. Google Account → Security → 2-Step Verification
2. App passwords → Generate for Mail
3. Copy 16-character password → Use in `EMAIL_PASS`

## Step 4: Get Your Backend URL

Railway dashboard → Settings → Domains
Your URL: `https://backend-production-xxxx.up.railway.app`

## Step 5: Update Frontend

Replace in `src/services/api.ts`:
```typescript
const API_BASE_URL = 'https://your-railway-url.up.railway.app/api';
```

## Step 6: Test Backend

Visit: `https://your-railway-url.up.railway.app/api/health`

## Step 7: Deploy Frontend to Vercel

1. **Vercel.com** → **New Project** → **Import Git Repository**
2. **Set environment variable**: `VITE_API_BASE_URL=https://your-railway-url.up.railway.app/api`
3. **Deploy**

## Step 8: Update CORS

In Railway, update `CORS_ORIGIN` to your Vercel URL:
```
CORS_ORIGIN=https://your-frontend.vercel.app
```

## ✅ Done!

Your website is now live and accessible from anywhere!
