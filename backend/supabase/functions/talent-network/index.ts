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

    // Validate required fields
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

    // Insert into database
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
      throw error
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
        message: 'Failed to register. Please try again later.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
