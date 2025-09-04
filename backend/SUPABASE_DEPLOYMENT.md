# 🚀 Deploy JKC Backend to Supabase - Complete Guide

## Step 1: Create Supabase Project

1. **Go to Supabase**: https://supabase.com
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Fill in details**:
   - Name: `jkc-construction`
   - Database Password: `Create a strong password`
   - Region: `Choose closest to your users`
5. **Click "Create new project"**
6. **Wait 2-3 minutes** for setup to complete

## Step 2: Get Your Supabase URLs

In your Supabase dashboard:
1. **Go to Settings** → **API**
2. **Copy these values**:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Step 3: Set Up Database Tables

In Supabase dashboard → **SQL Editor**, run this SQL:

```sql
-- Create contact_submissions table
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

-- Create talent_network table
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

-- Create policies for service role access
CREATE POLICY "Service role can insert contact submissions" ON contact_submissions
FOR INSERT TO service_role WITH CHECK (true);

CREATE POLICY "Service role can insert talent network" ON talent_network
FOR INSERT TO service_role WITH CHECK (true);
```

## Step 4: Install Supabase CLI

```bash
npm install -g supabase
```

## Step 5: Create Edge Functions

Create the functions directory:
```bash
cd backend
mkdir -p supabase/functions
```

### Contact Function
Create `supabase/functions/contact/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { firstName, lastName, email, phone, inquiryType, message } = await req.json()

    // Insert into database
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        inquiry_type: inquiryType,
        message
      })

    if (error) throw error

    // Send email notification (optional - you can integrate with a service like Resend)
    // For now, we'll just store in database

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to send message. Please try again later.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
```

### Talent Network Function
Create `supabase/functions/talent-network/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { firstName, lastName, email, phone, location, jobCategory, experience, availability } = await req.json()

    const { error } = await supabase
      .from('talent_network')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        location,
        job_category: jobCategory,
        experience,
        availability
      })

    if (error) throw error

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for joining our talent network! We will contact you when suitable opportunities arise.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to register. Please try again later.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
```

## Step 6: Deploy Edge Functions

1. **Login to Supabase**:
```bash
supabase login
```

2. **Link your project**:
```bash
supabase link --project-ref your-project-id
```

3. **Deploy functions**:
```bash
supabase functions deploy contact
supabase functions deploy talent-network
```

## Step 7: Update Frontend API Service

Update `src/services/api.ts`:

```typescript
// API service utility for JKC Construction website
const API_BASE_URL = 'https://your-project-id.supabase.co/functions/v1';

class ApiService {
  // Contact form submission
  async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    return this.makeRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Join talent network
  async joinTalentNetwork(formData: TalentNetworkData): Promise<ApiResponse> {
    return this.makeRequest('/talent-network', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
      };
    }
  }
}
```

## Step 8: Environment Variables

### For Frontend (.env):
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### For Supabase Functions:
In Supabase dashboard → Settings → Edge Functions → Environment Variables:
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Step 9: Test Your Setup

1. **Test contact function**:
```bash
curl -X POST https://your-project-id.supabase.co/functions/v1/contact \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-anon-key" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","inquiryType":"general","message":"Test message","captchaVerified":true}'
```

2. **Check database**: Go to Supabase dashboard → Table Editor → `contact_submissions`

## Step 10: Deploy Frontend to Vercel

1. **Vercel.com** → **New Project**
2. **Import your repository**
3. **Set environment variables**:
   - `VITE_SUPABASE_URL=https://your-project-id.supabase.co`
   - `VITE_SUPABASE_ANON_KEY=your-anon-key`
4. **Deploy**

## 🎯 Benefits of Supabase

- ✅ **Database included** - All form submissions stored
- ✅ **Real-time capabilities** - Can add live features later
- ✅ **Built-in authentication** - Ready for user accounts
- ✅ **Edge Functions** - Fast, serverless API
- ✅ **Dashboard** - View all submissions easily
- ✅ **Free tier** - Great for getting started

## 📊 View Submissions

In Supabase dashboard:
- **Table Editor** → `contact_submissions` - View all contact forms
- **Table Editor** → `talent_network` - View all career applications

Your JKC Construction website is now powered by Supabase! 🚀
