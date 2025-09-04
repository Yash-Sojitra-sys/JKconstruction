# 🚀 Deploy to Vercel with Supabase Integration

## Step 1: Setup Supabase Database & Functions

1. **Create Database Tables** (if not done):
   - Go to: https://supabase.com/dashboard/project/hvkzmojaosvlyttquhpg
   - SQL Editor → Run the admin_users table creation script from ADMIN_SUPABASE_SETUP.md

2. **Deploy Edge Functions**:
   - Edge Functions → Create Function: `admin-auth` (copy from backend/supabase/functions/admin-auth/index.ts)
   - Edge Functions → Create Function: `admin-data` (copy from backend/supabase/functions/admin-data/index.ts)

## Step 2: Deploy to Vercel

1. **Go to**: https://vercel.com/dashboard
2. **New Project** → **Import Git Repository**
3. **Configure Project**:
   - Root Directory: `project`
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Environment Variables**:
   ```
   VITE_SUPABASE_URL=https://hvkzmojaosvlyttquhpg.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYzNjQsImV4cCI6MjA3MDQwMjM2NH0.J0diG5bFKkzpDNqLaYIjN8vuPgUnQkcgXj8RJ3L2pQo
   ```

5. **Deploy**

## Step 3: Test Your Live Site

### Test Contact Form:
- Visit your Vercel URL
- Go to Contact Us page
- Submit a form
- Check Supabase → Table Editor → contact_submissions

### Test Admin Panel:
- Visit: your-vercel-url.com/admin
- Login with: sojitrayash2005@gmail.com / admin123
- View real form submissions

## What's Working Now:

✅ **Contact Forms** → Supabase Database  
✅ **Talent Network** → Supabase Database  
✅ **Admin Authentication** → Supabase (not localStorage)  
✅ **Real-time Data** → View actual submissions  
✅ **Production Ready** → Scalable cloud infrastructure  

## Default Admin Credentials:
- Email: sojitrayash2005@gmail.com
- Password: admin123

Change password after first login in admin panel settings.
