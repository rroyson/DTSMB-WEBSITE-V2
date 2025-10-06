/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { MAIN_EMAIL } from '@/utils/env'

// This is a server component, so it can directly use process.env
const resendApiKey = process.env.RESEND_API_KEY || ''
const resend = new Resend(resendApiKey)

// Define the type for event types
export async function POST(request: Request) {
  console.log('API route called')

  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      eventDetails,
      newsletter,
      recaptchaToken,
    } = body

    // Validate required fields
    if (!name || !email || !eventType || !eventDetails) {
      console.error('Missing required fields')
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    )

    const recaptchaResult = await recaptchaResponse.json()
    console.log('reCAPTCHA score:', recaptchaResult.score)

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.error('reCAPTCHA verification failed:', recaptchaResult)
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    const formattedEventType = {
      wedding: 'wedding',
      corporate_event: 'corporate event',
      private_party: 'private party booking',
      bar_gig: 'bar/venue booking',
      other: 'event',
    }

    // Split name into first and last name
    const nameParts = name.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

    const date = new Date(eventDate)

    // Format the date nicely if available
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    // Format the email content with improved styling
    const subject = `New Event Inquiry: ${
      (formattedEventType as Record<string, string>)[eventType]
    } from ${firstName} ${lastName}`.trim()
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
          .header { background-color: #4a6ea9; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; }
          .details { background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4a6ea9; margin: 15px 0; }
          .footer { font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Event Inquiry</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Client Name:</span> ${firstName} ${lastName}
          </div>
          <div class="field">
            <span class="label">Email:</span> ${email}
          </div>
          <div class="field">
            <span class="label">Phone:</span> ${phone || 'Not provided'}
          </div>
          <div class="field">
                <span class="label">Event Type:</span> ${
                  (formattedEventType as Record<string, string>)[eventType]
                }
          </div>
          <div class="field">
            <span class="label">Event Date:</span> ${formattedDate || eventDate}
          </div>
          
          <h2>Event Details:</h2>
          <div class="details">
            ${eventDetails.replace(/\n/g, '<br>')}
          </div>
          
          <div class="field">
            <span class="label">Newsletter Signup:</span> ${
              newsletter ? 'Yes' : 'No'
            }
          </div>
          
          <div class="footer">
            <p>This email was sent from the DTSMB website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // For debugging - log instead of sending if no API key
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({
        success: true,
        note: 'Email not actually sent - no API key provided',
        debug: true,
      })
    }

    // Send the email
    try {
      console.log('Sending email...')
      const data = await resend.emails.send({
        from: 'The Charleston Wedding Band - DTSMB <Cameron@contact.thecharlestonweddingband.com>', // Using Resend's default domain for testing
        to: [MAIN_EMAIL],
        subject: subject,
        html: emailContent,
        replyTo: email,
      })

      console.log('Email sent successfully:', data)

      // Send confirmation email to the person who submitted the form with improved formatting
      await resend.emails.send({
        from: 'The Charleston Wedding Band - DTSMB <Cameron@contact.thecharlestonweddingband.com>', // Using Resend's default domain for testing
        to: [email],
        subject: 'Thank you for your inquiry!',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
              .header { background-color: #4a6ea9; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; }
              .message { margin-bottom: 20px; }
              .signature { margin-top: 30px; }
              .company-name { font-weight: bold; color: #4a6ea9; }
              .footer { font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Thank You for Your Inquiry</h1>
            </div>
            <div class="content">
              <div class="message">
                <p>Dear ${firstName},</p>
                <p>Thank you for reaching out to us about your ${
                  (formattedEventType as Record<string, string>)[eventType] ||
                  eventType
                }${eventDate ? ` on ${formattedDate}` : 'event'}.</p>
                <p>We've received your inquiry and our team will review the details. You can expect to hear back from us within 24 hours.</p>
                <p>For urgent inquiries, please call us at (860)729-3354.</p>
              </div>
              
              <div class="signature">
                <p>Best regards,</p>
                <p class="company-name">
                  <a href="https://www.thecharlestonweddingband.com" style="color: #4a6ea9; text-decoration: none;">
                    The Charleston Wedding Band - DTSMB
                  </a>
                </p>
                <p>Professional live music for all your special occasions</p>
              </div>
              
              <div class="footer">
                <p>This is an automated confirmation. Please do not reply to this email.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      })

      return NextResponse.json({ success: true, data })
    } catch (emailError: any) {
      console.error('Error sending email via Resend:', emailError)
      return NextResponse.json(
        {
          error: 'Email service error',
          message: emailError.message || 'Unknown email service error',
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
