# 🚀 Supabase Quick Setup - JKC Construction

## Step 1: Create Supabase Project (2 minutes)

1. **Go to**: https://supabase.com
2. **Sign up** with GitHub
3. **New Project**:
   - Name: `jkc-construction`
   - Password: `Create strong password`
   - Region: `Southeast Asia (Singapore)`
4. **Create project** (wait 2-3 minutes)

## Step 2: Set Up Database (1 minute)

In Supabase dashboard → **SQL Editor** → **New query**, paste and run:

```sql
-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Talent network table
CREATE TABLE talent_network (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  job_category TEXT NOT NULL,
  experience TEXT NOT NULL,
  availability TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE talent_network ENABLE ROW LEVEL SECURITY;

-- Policies for service role
CREATE POLICY "Service role can insert contact" ON contact_submissions
FOR INSERT TO service_role WITH CHECK (true);

CREATE POLICY "Service role can insert talent" ON talent_network
FOR INSERT TO service_role WITH CHECK (true);
```

## Step 3: Get Your Keys

In Supabase dashboard → **Settings** → **API**:
- **Project URL**: `https://abcdefgh.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Step 4: Deploy Edge Functions

Install Supabase CLI:
```bash
npm install -g supabase
```

Login and deploy:
```bash
cd backend
supabase login
supabase link --project-ref your-project-id
supabase functions deploy contact
supabase functions deploy talent-network
```

## Step 5: Set Environment Variables

In Supabase dashboard → **Settings** → **Edge Functions** → **Environment Variables**:
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Step 6: Update Frontend

Update your frontend `.env`:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Step 7: Test Functions

Test contact function:
```bash
curl -X POST https://your-project-id.supabase.co/functions/v1/contact \
  -H "Authorization: Bearer your-anon-key" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","inquiryType":"general","message":"Test","captchaVerified":true}'
```

## Step 8: Deploy Frontend to Vercel

1. **Vercel.com** → **New Project**
2. **Import repository** → **Set root to `project`**
3. **Environment Variables**:
   - `VITE_SUPABASE_URL=https://your-project-id.supabase.co`
   - `VITE_SUPABASE_ANON_KEY=your-anon-key`
4. **Deploy**

## ✅ Done!

Your URLs:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-project-id.supabase.co/functions/v1`
- **Database**: View submissions in Supabase dashboard → **Table Editor**

## 🔍 View Form Submissions

In Supabase dashboard:
- **Table Editor** → `contact_submissions`
- **Table Editor** → `talent_network`

All form submissions are automatically stored and viewable!
