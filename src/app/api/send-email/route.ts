/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { MAIN_EMAIL } from '@/utils/env'

// This is a server component, so it can directly use process.env
const resendApiKey = process.env.RESEND_API_KEY || ''
const resend = new Resend(resendApiKey)

export async function POST(request: Request) {
  console.log('API route called')

  try {
    // Parse the request body
    const body = await request.json()
    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      eventDetails,
      newsletter,
    } = body

    console.log('Form data received:', { name, email, eventType })

    // Validate required fields
    if (!name || !email || !eventType || !eventDetails) {
      console.error('Missing required fields')
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Format the email content
    const subject = `New Event Inquiry: ${eventType} from ${name}`
    const emailContent = `
      <h1>New Event Inquiry</h1>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Event Date:</strong> ${eventDate || 'Not specified'}</p>
      <h2>Event Details:</h2>
      <p>${eventDetails.replace(/\n/g, '<br>')}</p>
      <p><strong>Newsletter Signup:</strong> ${newsletter ? 'Yes' : 'No'}</p>
      <hr>
      <p><em>This email was sent from the DTSMB website contact form.</em></p>
    `

    // For debugging - log instead of sending if no API key
    if (!process.env.RESEND_API_KEY) {
      console.log('No API key found. Would send email to:', MAIN_EMAIL)
      console.log('Email subject:', subject)
      console.log('Email content:', emailContent)

      return NextResponse.json({
        success: true,
        note: 'Email not actually sent - no API key provided',
        debug: true,
      })
    }

    // Send the email
    try {
      const data = await resend.emails.send({
        from: 'Website Contact Form <onboarding@resend.dev>', // Using Resend's default domain for testing
        to: [MAIN_EMAIL], // The band's email
        subject: subject,
        html: emailContent,
        replyTo: email,
      })

      console.log('Email sent successfully:', data)

      // Send confirmation email to the person who submitted the form
      await resend.emails.send({
        from: 'Dans Tramp Stamp and the Money Bags <onboarding@resend.dev>', // Using Resend's default domain for testing
        to: [email],
        subject: 'Thank you for your inquiry - DTSMB',
        html: `
          <h2>Thank you for your inquiry, ${name}!</h2>
          <p>We've received your request about ${eventType} on ${
          eventDate || 'your selected date'
        }.</p>
          <p>Our team will review your details and get back to you within 24 hours.</p>
          <p>For urgent inquiries, please call us at (555) 123-4567.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>Dans Tramp Stamp and the Money Bags</strong></p>
          <p style="color: #888; font-size: 0.9em;">Professional live music for all your special occasions</p>
        `,
      })

      return NextResponse.json({ success: true, data })
    } catch (emailError: any) {
      console.error('Error sending email via Resend:', emailError)
      return NextResponse.json(
        {
          error: 'Email service error',
          message: emailError.message || 'Unknown email service error',
          apiKey: resendApiKey.substring(0, 5) + '...', // Show first few chars for debugging
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('General API error:', error)
    return NextResponse.json(
      {
        error: 'Failed to process request',
        message: error.message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}
