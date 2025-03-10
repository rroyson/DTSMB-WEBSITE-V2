'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

// Define image dimensions for better CLS prevention
const IMG_DIMENSIONS = {
  hero: { width: 1200, height: 600 },
  card: { width: 600, height: 400 },
}

export default function Home() {
  const contentLoaded = useRef(false)

  // Add custom scroll optimization and ensure content is loaded
  useEffect(() => {
    if (contentLoaded.current) return

    // Pre-load all images to ensure everything is ready on initial load
    const imagePaths = [
      '/images/hero-band.jpg',
      '/images/wedding.jpg',
      '/images/corporate.jpg',
      '/images/party.jpg',
    ]

    // Force all images to load immediately
    Promise.all(
      imagePaths.map((path) => {
        return new Promise((resolve) => {
          const img = new window.Image()
          img.onload = () => resolve(true)
          img.onerror = () => resolve(false)
          img.src = path
        })
      })
    ).then(() => {
      console.log('All images preloaded')
      contentLoaded.current = true

      // Force a repaint to ensure everything is visible
      document.body.style.display = 'none'
      void document.body.offsetHeight // Force reflow
      document.body.style.display = ''
    })

    // Disable scroll-linked effects that might cause repaints
    const style = document.createElement('style')
    style.textContent = `* { transform: translateZ(0); }`
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className='bg-gradient-to-br from-primary/80 to-secondary/80 text-base-content min-h-[calc(100vh-4rem)]'>
      {/* Hero Section */}
      <section
        className='container mx-auto px-4 py-16 md:py-24 opacity-100'
        id='hero'
      >
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold mb-6 text-base-100'>
            Dans Tramp Stamp{' '}
            <span className='block md:inline'>&amp; the Money Bags</span>
          </h1>
          <p className='text-xl md:text-2xl mb-10 text-base-100'>
            Professional cover band for weddings, corporate events, private
            parties, and bars.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-10'>
            <a href='/contact' className='btn btn-primary btn-lg'>
              Book Now
            </a>
            <a
              href='/services'
              className='btn btn-outline btn-lg border-base-100 text-base-100 hover:bg-base-100 hover:text-primary'
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Featured Image - Now using local image */}
        <div className='relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl my-12 bg-base-300/30'>
          <Image
            src='/images/hero-band.jpg'
            alt='Band performing on stage'
            width={IMG_DIMENSIONS.hero.width}
            height={IMG_DIMENSIONS.hero.height}
            priority={true}
            className='img-optimized hover:scale-105 transition-transform duration-700'
            sizes='(max-width: 768px) 100vw, 1200px'
            loading='eager'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end'>
            <div className='p-6 text-white'>
              <h2 className='text-2xl md:text-3xl font-bold'>
                Unforgettable Performances
              </h2>
              <p className='text-lg opacity-90'>
                Creating memories that last a lifetime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='container mx-auto px-4 py-16' id='services'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold text-base-100'>
            Our Services
          </h2>
          <p className='text-xl text-base-100 mt-4'>
            Book us for your next event
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-base-100/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-[1.01] transition-all duration-300 text-base-100 border border-base-100/20 group'>
            <div className='relative h-48 bg-base-300/10'>
              <Image
                src='/images/wedding.jpg'
                alt='Wedding performance'
                width={IMG_DIMENSIONS.card.width}
                height={IMG_DIMENSIONS.card.height}
                className='img-optimized group-hover:scale-105 transition-transform duration-500'
                loading='eager'
                sizes='(max-width: 768px) 100vw, 600px'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-3'>Weddings</h2>
              <p>
                Make your special day unforgettable with live music that sets
                the perfect atmosphere.
              </p>
            </div>
          </div>

          <div className='bg-base-100/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-[1.01] transition-all duration-300 text-base-100 border border-base-100/20 group'>
            <div className='relative h-48 bg-base-300/10'>
              <Image
                src='/images/corporate.jpg'
                alt='Corporate event'
                width={IMG_DIMENSIONS.card.width}
                height={IMG_DIMENSIONS.card.height}
                className='img-optimized group-hover:scale-105 transition-transform duration-500'
                loading='eager'
                sizes='(max-width: 768px) 100vw, 600px'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-3'>Corporate Events</h2>
              <p>
                Impress your clients and energize your team with professional
                entertainment.
              </p>
            </div>
          </div>

          <div className='bg-base-100/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-[1.01] transition-all duration-300 text-base-100 border border-base-100/20 group'>
            <div className='relative h-48 bg-base-300/10'>
              <Image
                src='/images/party.jpg'
                alt='Private party'
                width={IMG_DIMENSIONS.card.width}
                height={IMG_DIMENSIONS.card.height}
                className='img-optimized group-hover:scale-105 transition-transform duration-500'
                loading='eager'
                sizes='(max-width: 768px) 100vw, 600px'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-3'>Private Parties</h2>
              <p>
                Transform your celebration into an extraordinary event with our
                dynamic performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className='container mx-auto px-4 py-16' id='awards'>
        <div className='bg-base-100/20 backdrop-blur-md rounded-xl p-8 border border-base-100/30'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
            <div className='md:w-2/3'>
              <h2 className='text-3xl md:text-4xl font-serif font-bold text-base-100 mb-4'>
                Award-Winning Entertainment
              </h2>
              <p className='text-xl text-base-100 mb-4'>
                Proud recipients of the WeddingWire Couples&apos; Choice Award
                two years in a row!
              </p>
              <p className='text-base-100 mb-6'>
                This prestigious award recognizes the top wedding professionals
                for excellence in quality, service, responsiveness, and
                professionalism—as determined by reviews from millions of
                newlyweds.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 mb-6'>
                <a
                  href='https://www.weddingwire.com/reviews/the-charleston-wedding-band-charleston/463b9d1742eb296f.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline border-base-100 text-base-100 hover:bg-base-100 hover:text-primary transition-colors duration-300'
                >
                  <span className='mr-2'>💍</span> Read WeddingWire Reviews
                </a>
                <a
                  href='https://www.theknot.com/marketplace/the-charleston-wedding-band-charleston-sc-956421'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline border-base-100 text-base-100 hover:bg-base-100 hover:text-primary transition-colors duration-300'
                >
                  <span className='mr-2'>💎</span> Read The Knot Reviews
                </a>
              </div>
            </div>
            <div className='md:w-1/3 flex justify-center'>
              <div className='flex flex-col gap-4'>
                <div className='bg-white p-4 rounded-lg shadow-xl transform rotate-2 w-48 h-48 flex items-center justify-center hover:rotate-0 transition-transform duration-300'>
                  <div className='text-center'>
                    <div className='text-4xl mb-2'>🏆</div>
                    <div className='font-bold text-neutral'>Couples Choice</div>
                    <div className='text-sm text-neutral'>Award Winner</div>
                  </div>
                </div>
                <div className='bg-white/90 p-3 rounded-lg shadow-xl transform -rotate-1 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='font-bold text-neutral flex items-center justify-center'>
                      <span className='text-2xl mr-2'>💎</span> Featured On
                    </div>
                    <div className='text-lg font-bold text-neutral'>
                      The Knot
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
