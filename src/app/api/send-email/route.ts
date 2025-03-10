import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key
// In production, use environment variable from .env.local
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789')

export async function POST(request: Request) {
  try {
    // Parse the request body
    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      eventDetails,
      newsletter,
    } = await request.json()

    // Validate required fields
    if (!name || !email || !eventType || !eventDetails) {
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

    // Send the email
    const data = await resend.emails.send({
      from: 'Website Contact Form <onboarding@resend.dev>', // Using Resend's default domain for testing
      to: ['frontiersons@gmail.com'], // The band's email
      bcc: process.env.ADMIN_EMAIL, // Optional: send a copy to admin
      subject: subject,
      html: emailContent,
      replyTo: email,
    })

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
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
