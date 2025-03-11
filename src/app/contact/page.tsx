import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { MAIN_EMAIL } from '@/utils/env'

export const metadata = {
  title: 'DTSMB | Contact Us',
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
          <div className='text-info-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Contact Form - Now appears first on mobile */}
            <div className='order-1 lg:order-1'>
              <ContactForm />
            </div>

            {/* Contact Info - Now appears second on mobile */}
            <div className='order-2 lg:order-2'>
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
                      <p className='mb-1'>
                        (860) 729-3354{' '}
                        {/* Replace with your actual proxy number */}
                      </p>
                      <p className='text-sm text-gray-600'>
                        Call or text us anytime
                      </p>
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
                      <p>{MAIN_EMAIL}</p>
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
                      <p>Based in Charleston, South Carolina</p>
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
                  <a
                    href='https://www.facebook.com/DTSMB/'
                    className='btn btn-circle btn-outline'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Facebook'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5 w-5'
                    >
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                    </svg>
                  </a>
                  <a
                    href='https://www.youtube.com/@dtsmb5919'
                    className='btn btn-circle btn-outline'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='YouTube'
                  >
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
                  <a
                    href='https://www.instagram.com/danstrampstamp'
                    className='btn btn-circle btn-outline'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram'
                  >
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
                </div>

                {/* <div>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className='text-info-content py-16 bg-base-200'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold mb-12 text-center'>
            Frequently Asked Questions
          </h2>

          <div className='max-w-3xl mx-auto space-y-4'>
            <div className='collapse collapse-plus bg-base-100'>
              <input type='radio' name='faq-accordion' defaultChecked />
              <div className='collapse-title text-xl font-medium'>
                How far in advance should I book?
              </div>
              <div className='collapse-content'>
                <p>
                  We recommend booking at least 6-12 months in advance for
                  weddings and large events, especially during peak season
                  (March-May, September-November). For smaller events or
                  off-peak dates, 1-2 months notice is usually sufficient, but
                  availability can&apos;t be guaranteed with short notice.
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
                  For bookings made less than 90 days before the event, full
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
                  Our standard packages include 2-4 hours of performance time,
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

            <div className='collapse collapse-plus bg-base-100'>
              <input type='radio' name='faq-accordion' />
              <div className='collapse-title text-xl font-medium'>
                What is The Charleston Wedding Band + DTSMB?
              </div>
              <div className='collapse-content'>
                <p>
                  The Charleston Wedding Band is our wedding-focused brand.
                  It&apos;s the same talented musicians as DTSMB, but with
                  branding and presentation specifically designed for elegant
                  wedding celebrations. When you book us for your wedding, you
                  can choose which band name you prefer for your event - both
                  feature the same exceptional musicians and repertoire.
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
              Call (860) 729-3354
            </a>
            <a
              href={`mailto:${MAIN_EMAIL}`}
              className='btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary'
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <div className='bg-base-200 rounded-lg p-6 shadow-sm'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-primary flex-shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <p className='text-base-content'>Prefer to reach out directly?</p>
          </div>
          <p className='text-base-content pl-9'>
            Email us at{' '}
            <a
              href={`mailto:${MAIN_EMAIL}`}
              className='text-primary font-medium hover:underline transition-colors'
            >
              {MAIN_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
