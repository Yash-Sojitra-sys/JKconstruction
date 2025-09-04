import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
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

    if (req.method === 'POST') {
      const { action, email, password, name } = await req.json()

      if (action === 'login') {
        // Check if admin exists and password matches
        const { data: admin, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('email', email)
          .single()

        if (error || !admin) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Invalid email or password'
            }),
            {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              status: 401,
            },
          )
        }

        // Simple password check (in production, use proper hashing)
        if (admin.password !== password) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Invalid email or password'
            }),
            {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              status: 401,
            },
          )
        }

        // Update last login
        await supabase
          .from('admin_users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', admin.id)

        return new Response(
          JSON.stringify({
            success: true,
            user: {
              id: admin.id,
              email: admin.email,
              name: admin.name,
              picture: admin.picture
            }
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
          },
        )
      }

      if (action === 'register') {
        // Check if admin already exists
        const { data: existingAdmin } = await supabase
          .from('admin_users')
          .select('id')
          .eq('email', email)
          .single()

        if (existingAdmin) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Admin user already exists'
            }),
            {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              status: 400,
            },
          )
        }

        // Create new admin user
        const { error } = await supabase
          .from('admin_users')
          .insert({
            email,
            password, // In production, hash this password
            name: name || email.split('@')[0],
            picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Admin')}&background=4F46E5&color=ffffff&size=40`
          })

        if (error) {
          console.error('Database error:', error)
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Failed to create admin user'
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
            message: 'Admin user created successfully'
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
          },
        )
      }

      if (action === 'update-password') {
        const { currentPassword, newPassword } = await req.json()

        // Verify current password
        const { data: admin, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('email', email)
          .single()

        if (error || !admin || admin.password !== currentPassword) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Current password is incorrect'
            }),
            {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              status: 401,
            },
          )
        }

        // Update password
        const { error: updateError } = await supabase
          .from('admin_users')
          .update({ password: newPassword })
          .eq('id', admin.id)

        if (updateError) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Failed to update password'
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
            message: 'Password updated successfully'
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200,
          },
        )
      }
    }

    if (req.method === 'GET') {
      // Get all admin users (for management)
      const { data: admins, error } = await supabase
        .from('admin_users')
        .select('id, email, name, picture, created_at, last_login')
        .order('created_at', { ascending: false })

      if (error) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Failed to fetch admin users'
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
          admins
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
        message: 'Method not allowed'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405,
      },
    )

  } catch (error) {
    console.error('Admin auth error:', error)
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
