'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventDetails: '',
    newsletter: false,
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Make API call to send email
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send inquiry')
      }

      // Show success state
      setShowSuccess(true)

      // Reset form after delay
      setTimeout(() => {
        setIsSubmitting(false)
        setShowSuccess(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          eventDetails: '',
          newsletter: false,
        })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // Here you could add error state handling to show error messages
    }
  }

  return (
    <div className='bg-base-200 p-8 rounded-xl shadow-xl relative overflow-hidden'>
      {/* Elegant background effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5'></div>
      <div className='absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary/40 to-secondary/40'></div>

      {/* Success overlay */}
      {showSuccess && (
        <div className='absolute inset-0 bg-base-100/95 flex flex-col items-center justify-center z-20 animate-fadeIn'>
          <div className='rounded-full bg-success/20 p-4 mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 text-success'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <h3 className='text-2xl font-bold mb-2'>Inquiry Submitted!</h3>
          <p className='text-center max-w-md mb-6'>
            Thank you for your interest! We&apos;ll review your inquiry and get
            back to you within 24 hours.
          </p>
          <div className='text-success-content animate-pulse'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
        </div>
      )}

      <h2 className='text-3xl font-serif font-bold mb-6 text-primary relative z-10'>
        Book Your Event
      </h2>
      <p className='mb-8 relative z-10'>
        Fill out the form below and we&apos;ll get back to you within 24 hours.
        You can also email us directly at{' '}
        <a
          href='mailto:frontiersons@gmail.com'
          className='text-primary hover:underline'
        >
          frontiersons@gmail.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className='space-y-6 relative z-10'>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text font-medium'>Full Name</span>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='input input-bordered w-full'
            placeholder='Your name'
            required
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-medium'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='input input-bordered w-full'
              placeholder='your.email@example.com'
              required
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-medium'>Phone Number</span>
            </label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='input input-bordered w-full'
              placeholder='(555) 123-4567'
            />
          </div>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text font-medium'>Event Type</span>
          </label>
          <select
            name='eventType'
            value={formData.eventType}
            onChange={handleChange}
            className='select select-bordered w-full'
            required
          >
            <option value='' disabled>
              Select event type
            </option>
            <option value='wedding'>Wedding</option>
            <option value='corporate'>Corporate Event</option>
            <option value='private_party'>Private Party</option>
            <option value='bar_gig'>Bar/Venue Booking</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text font-medium'>Event Date</span>
          </label>
          <input
            type='date'
            name='eventDate'
            value={formData.eventDate}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text font-medium'>Event Details</span>
          </label>
          <textarea
            name='eventDetails'
            value={formData.eventDetails}
            onChange={handleChange}
            className='textarea textarea-bordered min-h-32 w-full p-4 text-base resize-y'
            placeholder='Tell us about your event, venue, expected number of guests, and any special requests.'
            rows={4}
            required
          ></textarea>
          <label className='label'>
            <span className='label-text-alt text-base-content/70'>
              Please include any important details that will help us prepare for
              your event.
            </span>
          </label>
        </div>

        <div className='form-control'>
          <label className='label cursor-pointer justify-start gap-3'>
            <input
              type='checkbox'
              name='newsletter'
              checked={formData.newsletter}
              onChange={handleCheckboxChange}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>
              Sign up for occasional updates on our availability and special
              offers
            </span>
          </label>
        </div>

        <button
          type='submit'
          className={`btn btn-primary btn-lg w-full ${
            isSubmitting ? 'loading' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>

        <p className='text-sm text-center mt-4'>
          We respect your privacy and will never share your information with
          third parties.
        </p>
      </form>
    </div>
  )
}
