'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-base-100 shadow-md sticky top-0 z-50'>
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <h1 className='text-2xl md:text-3xl font-serif font-bold text-primary hover:text-primary-focus transition-colors'>
                DTSMB
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-4 items-center'>
            <Link
              href='/'
              className='text-neutral hover:text-primary transition-colors'
            >
              Home
            </Link>
            <Link
              href='/services'
              className='text-neutral hover:text-primary transition-colors'
            >
              Services
            </Link>
            <Link
              href='/contact'
              className='text-neutral hover:text-primary transition-colors'
            >
              Contact
            </Link>
            <ThemeSwitcher />
            <Link href='/contact' className='btn btn-primary'>
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center gap-2 md:hidden'>
            <ThemeSwitcher />
            <button
              className='text-neutral'
              onClick={toggleMenu}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
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
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
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
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4 space-y-4 flex flex-col'>
            <Link
              href='/'
              className='text-neutral hover:text-primary transition-colors px-2 py-1'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/services'
              className='text-neutral hover:text-primary transition-colors px-2 py-1'
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/contact'
              className='text-neutral hover:text-primary transition-colors px-2 py-1'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href='/contact'
              className='btn btn-primary w-full'
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
