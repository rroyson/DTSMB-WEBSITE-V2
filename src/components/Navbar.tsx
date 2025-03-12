'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null) // Add ref for the button

  const handleToggleMenu = () => {
    console.log('Clicked', isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Don't close if clicking the button or the menu
      if (
        (buttonRef.current &&
          buttonRef.current.contains(event.target as Node)) ||
        (menuRef.current && menuRef.current.contains(event.target as Node))
      ) {
        return // Don't do anything if clicking the button or menu
      }

      // Otherwise, close the menu
      setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

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
            <div className='relative'>
              <button
                ref={buttonRef}
                className='btn btn-ghost btn-circle'
                onClick={handleToggleMenu}
                aria-label='Toggle menu'
                aria-expanded={isMenuOpen}
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
              </button>

              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className='absolute right-0 mt-2 w-52 p-2 shadow bg-base-100 rounded-box z-50'
                >
                  <ul className='menu menu-compact'>
                    <li>
                      <Link href='/' onClick={handleCloseMenu}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href='/services' onClick={handleCloseMenu}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/gallery' onClick={handleCloseMenu}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact' onClick={handleCloseMenu}>
                        Contact
                      </Link>
                    </li>
                    <li className='menu-title'>
                      <span className='text-xs opacity-50'>Ready to book?</span>
                    </li>
                    <li>
                      <Link
                        href='/contact'
                        className='btn btn-primary btn-sm justify-center mt-2'
                        onClick={handleCloseMenu}
                      >
                        Book Now
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
