'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='bg-base-100 shadow-md sticky top-0 z-50'>
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              {/* Desktop: Enhanced branding */}
              <h1 className='hidden lg:block'>
                <span className='font-serif text-2xl text-primary'>
                  The Charleston{' '}
                  <span className='relative'>
                    Wedding Band
                    <span className='absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent'></span>
                  </span>
                </span>
              </h1>

              {/* Mobile: Improved branded element with better spacing */}
              <div className='lg:hidden flex items-center'>
                <div className='avatar'>
                  <div className='w-11 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100'>
                    <div className='flex items-center justify-center bg-primary text-primary-content w-full h-full font-serif'>
                      <span className='text-sm tracking-wider font-bold'>
                        CWB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Enhanced */}
          <div className='hidden md:flex items-center'>
            <div className='tabs tabs-boxed bg-base-100'>
              <Link href='/' className='tab hover:tab-primary'>
                Home
              </Link>
              <Link href='/services' className='tab hover:tab-primary'>
                Services
              </Link>
              <Link href='/gallery' className='tab hover:tab-primary'>
                Gallery
              </Link>
              <Link href='/contact' className='tab hover:tab-primary'>
                Contact
              </Link>
            </div>
            <div className='divider divider-horizontal'></div>
            <ThemeSwitcher />
            <Link
              href='/contact'
              className='btn btn-primary btn-sm text-primary-content ml-4'
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button - Enhanced */}
          <div className='flex items-center gap-3 md:hidden'>
            <ThemeSwitcher />
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-52 mt-4'
              >
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/services'>Services</Link>
                </li>
                <li>
                  <Link href='/gallery'>Gallery</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li className='menu-title'>
                  <span className='text-xs opacity-50'>Ready to book?</span>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='btn btn-primary btn-sm justify-center mt-2'
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4 space-y-4 flex flex-col'>
            <Link
              href='/'
              className='text-base-content hover:text-primary transition-colors px-2 py-1'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/services'
              className='text-base-content hover:text-primary transition-colors px-2 py-1'
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/gallery'
              className='text-base-content hover:text-primary transition-colors px-2 py-1'
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href='/contact'
              className='text-base-content hover:text-primary transition-colors px-2 py-1'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href='/contact'
              className='btn btn-primary text-primary-content w-full'
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
