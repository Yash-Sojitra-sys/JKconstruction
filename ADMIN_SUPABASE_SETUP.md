# 🔐 Admin Authentication with Supabase

## Step 1: Create Admin Users Table

Go to your Supabase dashboard: https://supabase.com/dashboard/project/hvkzmojaosvlyttquhpg

**SQL Editor** → **New Query** → Copy and paste this:

```sql
-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  picture TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for service role access
CREATE POLICY "Service role can manage admin users" ON admin_users
FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Insert default admin users
INSERT INTO admin_users (email, password, name, picture) VALUES 
('sojitrayash2005@gmail.com', 'admin123', 'Sojitra Yash', 'https://ui-avatars.com/api/?name=Sojitra+Yash&background=4F46E5&color=ffffff&size=40'),
('rutvivadi7@gmail.com', 'admin123', 'Rutvi Vadi', 'https://ui-avatars.com/api/?name=Rutvi+Vadi&background=4F46E5&color=ffffff&size=40')
ON CONFLICT (email) DO NOTHING;
```

**Click "Run"**

## Step 2: Deploy Admin Auth Function

**Edge Functions** → **Create Function**

- **Name**: `admin-auth`
- **Code**: Use the code from `backend/supabase/functions/admin-auth/index.ts`

## Step 3: Create Admin Data Viewing Function

**Edge Functions** → **Create Function**

- **Name**: `admin-data`
- **Code**: (Will be provided next)

## Step 4: Update Frontend

The admin page will be updated to use Supabase authentication instead of localStorage.

## Features:

✅ **Secure Authentication** - Stored in Supabase database  
✅ **Password Management** - Change passwords online  
✅ **Session Management** - Persistent login sessions  
✅ **User Management** - Add/remove admin users  
✅ **Activity Tracking** - Last login timestamps  

## Default Credentials:

- **Email**: sojitrayash2005@gmail.com  
- **Password**: admin123  

- **Email**: rutvivadi7@gmail.com  
- **Password**: admin123  

You can change these passwords after first login.
