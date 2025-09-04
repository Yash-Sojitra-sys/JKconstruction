# 🔧 Debug Vercel Production Issues

## Step 1: Check Vercel Environment Variables

1. **Go to your Vercel dashboard**: https://vercel.com/dashboard
2. **Click on your project**
3. **Settings** → **Environment Variables**
4. **Verify these exist**:
   - `VITE_SUPABASE_URL` = `https://hvkzmojaosvlyttquhpg.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYzNjQsImV4cCI6MjA3MDQwMjM2NH0.J0diG5bFKkzpDNqLaYIjN8vuPgUnQkcgXj8RJ3L2pQo`

## Step 2: Check Browser Console

1. **Open your Vercel site**
2. **Press F12** (Developer Tools)
3. **Console tab** - Look for:
   - API_BASE_URL value
   - VITE_SUPABASE_URL value
   - Any error messages

## Step 3: Test API Directly

Test your Supabase function directly:

```bash
curl -X POST https://hvkzmojaosvlyttquhpg.supabase.co/functions/v1/contact \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYzNjQsImV4cCI6MjA3MDQwMjM2NH0.J0diG5bFKkzpDNqLaYIjN8vuPgUnQkcgXj8RJ3L2pQo" \
  -H "Content-Type: application/json" \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYzNjQsImV4cCI6MjA3MDQwMjM2NH0.J0diG5bFKkzpDNqLaYIjN8vuPgUnQkcgXj8RJ3L2pQo" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "1234567890",
    "inquiryType": "general",
    "message": "Test message from curl",
    "captchaVerified": true
  }'
```

## Step 4: Update CORS in Supabase Functions

If CORS is the issue, update your Supabase Edge Functions:

### Contact Function - Updated CORS:

```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
```

## Step 5: Redeploy After Changes

After making any changes:
1. **Commit changes to Git**
2. **Vercel will auto-redeploy**
3. **Or manually redeploy** in Vercel dashboard

## Step 6: Check Supabase Function Logs

1. **Supabase Dashboard** → **Edge Functions**
2. **Click on your function**
3. **Logs tab** - Check for errors

## Common Issues:

1. **Missing Environment Variables** - Most common issue
2. **CORS Errors** - Check browser console
3. **Wrong API URL** - Verify Supabase project URL
4. **Function Not Deployed** - Check Supabase Edge Functions
5. **Database Permissions** - Verify RLS policies
