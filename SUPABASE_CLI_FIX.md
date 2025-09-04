# 🔧 Fix Supabase CLI Installation - Windows

## Method 1: Install via Scoop (Recommended)

```powershell
# Install Scoop (if not already installed)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression

# Install Supabase CLI
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

## Method 2: Direct Download

1. **Download**: https://github.com/supabase/cli/releases/latest
2. **Find**: `supabase_windows_amd64.tar.gz`
3. **Extract** to a folder (e.g., `C:\supabase`)
4. **Add to PATH**: Add `C:\supabase` to your Windows PATH environment variable

## Method 3: Use npx (No Installation)

Instead of installing globally, use npx:

```powershell
cd backend

# Login (this will open browser)
npx supabase login

# Link to your project
npx supabase link --project-ref hvkzmojaosvlyttquhpg

# Deploy functions
npx supabase functions deploy contact
npx supabase functions deploy talent-network
```

## Method 4: Alternative - Deploy via Supabase Dashboard

If CLI doesn't work, you can deploy functions manually:

1. **Go to**: https://supabase.com/dashboard/project/hvkzmojaosvlyttquhpg
2. **Edge Functions** → **Create Function**
3. **Copy-paste** the code from:
   - `backend/supabase/functions/contact/index.ts`
   - `backend/supabase/functions/talent-network/index.ts`

## Quick Fix Command

Try this first (using npx):

```powershell
cd backend
npx supabase login
npx supabase link --project-ref hvkzmojaosvlyttquhpg
npx supabase functions deploy contact
npx supabase functions deploy talent-network
```
