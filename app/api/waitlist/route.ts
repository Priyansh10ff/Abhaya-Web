import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{
        email:        email.toLowerCase().trim(),
        source:       req.headers.get('referer') || 'direct',
        signed_up_at: new Date().toISOString(),
      }])

    // Ignore duplicate email errors (unique constraint)
    if (error && !error.message.includes('duplicate')) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to join waitlist.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
