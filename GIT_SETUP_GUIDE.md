# 🚀 Git Setup and Deployment Guide

## Option 1: Create GitHub Repository (Recommended)

1. **Go to**: https://github.com/new
2. **Repository name**: `jkc-construction-website`
3. **Description**: `JKC Construction Company Website with Supabase Backend`
4. **Public** or **Private** (your choice)
5. **Click "Create repository"**

## Option 2: Use Vercel Direct Upload (Faster)

Skip Git entirely and upload directly to Vercel:

1. **Go to**: https://vercel.com/new
2. **Browse** → Select the `project` folder
3. **Upload** your project folder directly
4. **Configure**:
   - Framework: Vite
   - Root Directory: Leave as is (since you're uploading the project folder)
   - Build Command: `npm run build`
   - Output Directory: `dist`

## Environment Variables for Vercel:

```
VITE_SUPABASE_URL=https://hvkzmojaosvlyttquhpg.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYzNjQsImV4cCI6MjA3MDQwMjM2NH0.J0diG5bFKkzpDNqLaYIjN8vuPgUnQkcgXj8RJ3L2pQo
```

## If You Created GitHub Repository:

After creating the repo, run these commands:

```bash
# Remove any existing remote
git remote remove origin

# Add your new repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/jkc-construction-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Then Deploy to Vercel:

1. **Vercel Dashboard** → **New Project**
2. **Import Git Repository** → Select your GitHub repo
3. **Configure**:
   - Root Directory: `project`
   - Framework: Vite
   - Add environment variables above
4. **Deploy**

## Quick Deploy (No Git Required):

1. Zip the `project` folder
2. Upload directly to Vercel
3. Add environment variables
4. Deploy

Your website will be live in minutes!
