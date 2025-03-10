import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-primary/80 to-secondary/80 text-base-content min-h-[calc(100vh-4rem)]'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-16 md:py-24'>
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

        {/* Featured Image */}
        <div className='relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl my-12'>
          <Image
            src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop'
            alt='Band performing on stage'
            fill
            className='object-cover hover:scale-105 transition-transform duration-700'
            priority
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
      <section className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold text-base-100'>
            Our Services
          </h2>
          <p className='text-xl text-base-100 mt-4'>
            Book us for your next event
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-base-100/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-102 transition-all duration-300 text-base-100 border border-base-100/20 group'>
            <div className='relative h-48'>
              <Image
                src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
                alt='Wedding performance'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6'>
              <div className='text-3xl mb-4'>💍</div>
              <h2 className='text-2xl font-bold mb-3'>Weddings</h2>
              <p>
                Make your special day unforgettable with live music that sets
                the perfect atmosphere.
              </p>
            </div>
          </div>

          <div className='bg-base-100/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-102 transition-all duration-300 text-base-100 border border-base-100/20 group'>
            <div className='relative h-48'>
              <Image
                src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
                alt='Corporate event'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6'>
              <div className='text-3xl mb-4'>🎭</div>
              <h2 className='text-2xl font-bold mb-3'>Corporate Events</h2>
              <p>
                Impress your clients and energize your team with professional
                entertainment.
              </p>
            </div>
          </div>

          <div className='bg-base-100/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-102 transition-all duration-300 text-base-100 border border-base-100/20 group'>
            <div className='relative h-48'>
              <Image
                src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop'
                alt='Private party'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6'>
              <div className='text-3xl mb-4'>🎉</div>
              <h2 className='text-2xl font-bold mb-3'>Private Parties</h2>
              <p>
                Transform your celebration into an extraordinary event with our
                dynamic performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold text-base-100'>
            Gallery
          </h2>
          <p className='text-xl text-base-100 mt-4'>
            Snapshots from our performances
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='relative h-40 md:h-64 rounded-lg overflow-hidden'>
            <Image
              src='https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop'
              alt='Band performance 1'
              fill
              className='object-cover hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='relative h-40 md:h-64 rounded-lg overflow-hidden'>
            <Image
              src='https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop'
              alt='Band performance 2'
              fill
              className='object-cover hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='relative h-40 md:h-64 rounded-lg overflow-hidden'>
            <Image
              src='https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?q=80&w=2071&auto=format&fit=crop'
              alt='Band performance 3'
              fill
              className='object-cover hover:scale-110 transition-transform duration-500'
            />
          </div>
          <div className='relative h-40 md:h-64 rounded-lg overflow-hidden'>
            <Image
              src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop'
              alt='Band performance 4'
              fill
              className='object-cover hover:scale-110 transition-transform duration-500'
            />
          </div>
        </div>
      </section>
    </div>
  )
}
