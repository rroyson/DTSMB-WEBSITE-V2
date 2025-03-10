import Link from 'next/link'
import { PUBLIC_ENV } from '@/utils/env'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-neutral text-neutral-content'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h2 className='text-2xl font-serif font-bold mb-4'>DTSMB</h2>
            <p className='mb-4'>
              Dans Tramp Stamp and the Money Bags - Professional live music for
              all occasions.
            </p>
            <p className='mb-4'>
              Bringing the party to your weddings, corporate events, and private
              parties.
            </p>
            <p className='text-sm opacity-90 border-l-2 border-primary pl-3'>
              Also booking as{' '}
              <span className='font-bold text-primary-content'>
                The Charleston Wedding Band
              </span>{' '}
              for wedding events.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='hover:text-primary transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='hover:text-primary transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-primary transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
            <p className='mb-2'>
              Email:{' '}
              {PUBLIC_ENV?.MAIN_EMAIL ? (
                <a
                  href={`mailto:${PUBLIC_ENV.MAIN_EMAIL}`}
                  className='hover:text-primary transition-colors'
                >
                  {PUBLIC_ENV.MAIN_EMAIL}
                </a>
              ) : (
                'Unavailable'
              )}
            </p>
            <p className='mb-1'>
              (888) 555-BAND {/* Replace with your actual proxy number */}
            </p>
            <p className='mb-4 text-sm opacity-80'>Call or text us anytime</p>

            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/DTSMB/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary transition-colors'
                aria-label='Facebook'
              >
                {/* Facebook Icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                </svg>
              </a>
              <a
                href='https://www.instagram.com/danstrampstamp'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary transition-colors'
                aria-label='Instagram'
              >
                {/* Instagram Icon */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-neutral-content/20 text-center'>
          <p>
            &copy; {currentYear} Dans Tramp Stamp and the Money Bags. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
