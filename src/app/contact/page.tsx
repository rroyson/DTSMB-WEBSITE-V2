import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us | DTSMB',
  description:
    'Contact Dans Tramp Stamp and the Money Bags to book your event or inquire about our services.',
}

export default function ContactPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero section */}
      <div className='relative h-[250px] md:h-[350px] overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2023&auto=format&fit=crop'
          alt='Band performance'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white px-4 max-w-3xl mx-4'>
            <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]'>
              Contact Us
            </h1>
            <p className='text-xl max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'>
              Let&apos;s make your next event extraordinary
            </p>
          </div>
        </div>
      </div>

      <div className='py-16 bg-base-100'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Contact Form */}
            <div className='order-2 lg:order-1'>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className='order-1 lg:order-2'>
              <div className='bg-base-200 p-8 rounded-xl shadow-lg mb-8'>
                <h3 className='text-2xl font-serif font-bold mb-4'>
                  Contact Information
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <div className='text-primary mt-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-bold'>Phone</h4>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='text-primary mt-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-bold'>Email</h4>
                      <p>frontiersons@gmail.com</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='text-primary mt-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-bold'>Location</h4>
                      <p>Based in San Francisco, California</p>
                      <p>Available for travel nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-base-200 p-8 rounded-xl shadow-lg'>
                <h3 className='text-2xl font-serif font-bold mb-4'>
                  Follow Us
                </h3>
                <div className='flex gap-4 mb-6'>
                  <a href='#' className='btn btn-circle btn-outline'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'
                    >
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                    </svg>
                  </a>
                  <a href='#' className='btn btn-circle btn-outline'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'
                    >
                      <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                    </svg>
                  </a>
                  <a href='#' className='btn btn-circle btn-outline'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'
                    >
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                    </svg>
                  </a>
                  <a href='#' className='btn btn-circle btn-outline'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'
                    >
                      <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
                    </svg>
                  </a>
                </div>

                <div>
                  <h3 className='text-2xl font-serif font-bold mb-4'>
                    Upcoming Shows
                  </h3>
                  <div className='space-y-4'>
                    <div className='bg-base-100 p-4 rounded-lg'>
                      <div className='flex justify-between items-start'>
                        <div>
                          <h4 className='font-bold'>The Red Room</h4>
                          <p className='text-sm'>Friday, Jun 15 • 9:00 PM</p>
                        </div>
                        <a href='#' className='btn btn-xs btn-outline'>
                          Details
                        </a>
                      </div>
                    </div>
                    <div className='bg-base-100 p-4 rounded-lg'>
                      <div className='flex justify-between items-start'>
                        <div>
                          <h4 className='font-bold'>Lakeside Wedding Venue</h4>
                          <p className='text-sm'>Saturday, Jun 23 • 7:00 PM</p>
                        </div>
                        <span className='badge badge-primary'>Private</span>
                      </div>
                    </div>
                    <a href='#' className='btn btn-outline btn-sm w-full'>
                      View All Shows
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className='py-16 bg-base-200'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold mb-12 text-center'>
            Frequently Asked Questions
          </h2>

          <div className='max-w-3xl mx-auto space-y-4'>
            <div className='collapse collapse-plus bg-base-100'>
              <input type='radio' name='faq-accordion' checked />
              <div className='collapse-title text-xl font-medium'>
                How far in advance should I book?
              </div>
              <div className='collapse-content'>
                <p>
                  We recommend booking at least 3-6 months in advance for
                  weddings and large events, especially during peak season
                  (May-October). For smaller events or off-peak dates, 1-2
                  months notice is usually sufficient, but availability
                  can&apos;t be guaranteed with short notice.
                </p>
              </div>
            </div>

            <div className='collapse collapse-plus bg-base-100'>
              <input type='radio' name='faq-accordion' />
              <div className='collapse-title text-xl font-medium'>
                Do you require a deposit?
              </div>
              <div className='collapse-content'>
                <p>
                  Yes, we require a 50% non-refundable deposit to secure your
                  date, with the remaining balance due 14 days before the event.
                  For bookings made less than 30 days before the event, full
                  payment is required.
                </p>
              </div>
            </div>

            <div className='collapse collapse-plus bg-base-100'>
              <input type='radio' name='faq-accordion' />
              <div className='collapse-title text-xl font-medium'>
                How long do you typically play?
              </div>
              <div className='collapse-content'>
                <p>
                  Our standard packages include 3-4 hours of performance time,
                  typically divided into 45-minute sets with short breaks in
                  between. We&apos;re happy to discuss extended hours for an
                  additional fee.
                </p>
              </div>
            </div>

            <div className='collapse collapse-plus bg-base-100'>
              <input type='radio' name='faq-accordion' />
              <div className='collapse-title text-xl font-medium'>
                Can you learn a special song for our event?
              </div>
              <div className='collapse-content'>
                <p>
                  Absolutely! We offer custom song arrangements for special
                  moments like first dances or corporate theme songs. We
                  typically need at least 3-4 weeks to prepare a new song, and
                  there is an additional fee per song depending on complexity.
                </p>
              </div>
            </div>

            <div className='collapse collapse-plus bg-base-100'>
              <input type='radio' name='faq-accordion' />
              <div className='collapse-title text-xl font-medium'>
                Do you provide your own equipment?
              </div>
              <div className='collapse-content'>
                <p>
                  Yes, we provide our own professional sound system,
                  instruments, and lighting for all events. For larger venues or
                  events with more than 200 guests, we may recommend additional
                  sound reinforcement, which we can arrange for an additional
                  fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className='py-16 bg-gradient-to-r from-primary to-secondary text-primary-content'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold mb-6'>
            Ready to Book the Perfect Music for Your Event?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Complete our form above or reach out directly. We can&apos;t wait to
            be part of your special day!
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a href='tel:+15551234567' className='btn btn-lg btn-secondary'>
              Call (555) 123-4567
            </a>
            <a
              href='mailto:frontiersons@gmail.com'
              className='btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary'
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
