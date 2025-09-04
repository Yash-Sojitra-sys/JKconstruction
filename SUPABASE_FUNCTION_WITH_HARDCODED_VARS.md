# Edge Function with Hardcoded Environment Variables

## Contact Function (Updated)

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
    // Hardcoded environment variables
    const SUPABASE_URL = 'https://hvkzmojaosvlyttquhpg.supabase.co'
    const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDgyNjM2NCwiZXhwIjoyMDcwNDAyMzY0fQ.5SWzHpKNMmWbyDSqjKJsblCeIRkl2jNjFqHcFAc2Yvo'
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    const { firstName, lastName, email, phone, inquiryType, message, captchaVerified } = await req.json()

    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Please fill in all required fields.'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      )
    }

    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        inquiry_type: inquiryType,
        message
      })

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Database error: ' + error.message
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        },
      )
    }

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
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error: ' + error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
```

## Talent Network Function (Updated)

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
    // Hardcoded environment variables
    const SUPABASE_URL = 'https://hvkzmojaosvlyttquhpg.supabase.co'
    const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a3ptb2phb3N2bHl0dHF1aHBnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDgyNjM2NCwiZXhwIjoyMDcwNDAyMzY0fQ.5SWzHpKNMmWbyDSqjKJsblCeIRkl2jNjFqHcFAc2Yvo'
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    const { firstName, lastName, email, phone, location, jobCategory, experience, availability } = await req.json()

    if (!firstName || !lastName || !email || !phone || !location || !jobCategory) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Please fill in all required fields.'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      )
    }

    const { error } = await supabase
      .from('talent_network')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        location,
        job_category: jobCategory,
        experience: experience || 'not-specified',
        availability: availability || 'flexible'
      })

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Database error: ' + error.message
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        },
      )
    }

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
    console.error('Talent network error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error: ' + error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
```
