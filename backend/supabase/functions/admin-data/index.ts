// @deno-types="https://deno.land/std@0.168.0/http/server.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
// @deno-types="https://esm.sh/@supabase/supabase-js@2"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

    const url = new URL(req.url)
    const dataType = url.searchParams.get('type')

    if (dataType === 'contact-submissions') {
      const { data: submissions, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Database error:', error)
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Failed to fetch contact submissions'
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
          data: submissions
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    }

    if (dataType === 'talent-network') {
      const { data: submissions, error } = await supabase
        .from('talent_network')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Database error:', error)
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Failed to fetch talent network submissions'
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
          data: submissions
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    }

    if (dataType === 'stats') {
      // Get statistics
      const [contactResult, talentResult] = await Promise.all([
        supabase.from('contact_submissions').select('id', { count: 'exact' }),
        supabase.from('talent_network').select('id', { count: 'exact' })
      ])

      const stats = {
        totalContacts: contactResult.count || 0,
        totalTalent: talentResult.count || 0,
        totalSubmissions: (contactResult.count || 0) + (talentResult.count || 0)
      }

      return new Response(
        JSON.stringify({
          success: true,
          data: stats
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Invalid data type. Use: contact-submissions, talent-network, or stats'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )

  } catch (error) {
    console.error('Admin data error:', error)
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
