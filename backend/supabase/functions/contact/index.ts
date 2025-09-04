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

    const { firstName, lastName, email, phone, inquiryType, message, captchaVerified } = await req.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !inquiryType || !message || !captchaVerified) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Please fill in all required fields and complete CAPTCHA verification.'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      )
    }

    // Insert into database
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
      throw error
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
        message: 'Failed to send message. Please try again later.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
