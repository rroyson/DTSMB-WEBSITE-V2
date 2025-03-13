import Image from 'next/image'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  title: 'Home | The Charleston Wedding Band - DTSMB',
  description:
    'DTSMB is a professional cover band for weddings, corporate events, private parties, and bars throughout Charleston and beyond.',
  keywords:
    'Charleston wedding band, DTSMB, live music, professional band, wedding entertainment, corporate event music',
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'The Charleston Wedding Band - DTSMB',
    url: 'https://thecharlestonweddingband.com',
    image:
      'https://thecharlestonweddingband.com/images/dtsmb/wedding-couple.jpg',
    description:
      'Professional cover band for weddings, corporate events, private parties, and bars.',
    genre: ['Cover Band', 'Wedding Music', 'Live Entertainment'],
    email: 'thecharlestonweddingband@gmail.com',
    telephone: '(860) 729-3354',
    areaServed: 'Charleston, SC and surrounding areas',
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://thecharlestonweddingband.com/contact',
        inLanguage: 'en-US',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Book The Charleston Wedding Band',
      },
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <main className='scroll-smooth'>
        {/* Hero Section - balanced modern design with image blending (no play button) */}
        <section className='relative bg-gradient-to-br from-primary to-secondary py-16 md:py-24 overflow-hidden'>
          {/* Background texture overlay */}
          <div className='absolute inset-0 opacity-20 mix-blend-overlay'>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
              <defs>
                <pattern
                  id='diagonalHatch'
                  width='10'
                  height='10'
                  patternTransform='rotate(45 0 0)'
                  patternUnits='userSpaceOnUse'
                >
                  <line
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='10'
                    style={{ stroke: 'currentColor', strokeWidth: 1 }}
                  />
                </pattern>
              </defs>
              <rect width='100%' height='100%' fill='url(#diagonalHatch)' />
            </svg>
          </div>

          {/* Subtle animated elements */}
          <div
            className='absolute w-64 h-64 rounded-full bg-primary/20 blur-3xl top-20 -left-20 animate-pulse'
            style={{ animationDuration: '8s' }}
          ></div>
          <div
            className='absolute w-64 h-64 rounded-full bg-secondary/20 blur-3xl bottom-10 -right-20 animate-pulse'
            style={{ animationDuration: '10s' }}
          ></div>

          <div className='container mx-auto px-4 relative z-10'>
            <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 md:items-start'>
              <div className='md:w-1/2 text-center md:text-left'>
                <div className='relative inline-block mb-2'>
                  <span className='text-primary-content/80 tracking-wide font-mono text-sm uppercase relative z-10'>
                    Get Ready to Party!
                  </span>
                  <div className='absolute bottom-0 left-0 h-3 w-full bg-accent/30 -skew-x-12'></div>
                </div>

                <h1 className='text-4xl md:text-6xl font-serif mb-6 text-primary-content leading-tight'>
                  The Charleston{' '}
                  <span className='block md:inline transform transition-transform hover:translate-x-2'>
                    Wedding Band{' '}
                  </span>
                  <div className='inline-flex items-center'>
                    <span className='inline-block text-primary-content opacity-50 mr-2'>
                      +
                    </span>
                    <span className='inline-flex items-center justify-center bg-accent/80 text-accent-content/90 px-3 py-1 rounded-md transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-sm relative text-2xl md:text-3xl'>
                      <span className='absolute inset-0 border border-accent-content/20 rounded-md transform rotate-1'></span>
                      <span className='font-semibold tracking-wider'>
                        DTSMB
                      </span>
                    </span>
                  </div>
                </h1>

                <p className='text-xl md:text-2xl mb-10 text-primary-content/90 max-w-xl'>
                  Professional cover band for weddings, corporate events,
                  private parties, and venues.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                  <Link
                    href='/contact'
                    className='btn btn-primary btn-lg relative overflow-hidden group'
                  >
                    <span className='absolute inset-0 w-0 bg-primary-content/20 transition-all duration-300 ease-out group-hover:w-full'></span>
                    <span className='relative'>Book Now</span>
                  </Link>
                  <Link
                    href='/services'
                    className='btn btn-outline btn-lg text-primary-content border-primary-content group'
                  >
                    <span className='flex items-center gap-2'>
                      Our Services
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-4 h-4 transform group-hover:translate-x-1 transition-transform'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Featured Image with blend effect (no play button) */}
              <div className='w-full sm:w-full md:w-1/2 mt-10 md:mt-0'>
                <div className='relative'>
                  {/* Subtle border decoration */}
                  <div className='absolute -inset-3 border border-primary-content/20 rounded-xl -rotate-1'></div>

                  {/* Image container with blend modes */}
                  <div className='relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] duration-500'>
                    {/* Primary image with overlay blend */}
                    <div className='absolute inset-0 mix-blend-overlay opacity-80'>
                      <Image
                        src='/images/dtsmb/wedding-couple.jpg'
                        alt='Band performing on stage'
                        fill
                        priority
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 50vw'
                      />
                    </div>

                    {/* Secondary image with soft light blend */}
                    <div className='absolute inset-0 mix-blend-soft-light'>
                      <Image
                        src='/images/dtsmb/wedding-couple.jpg'
                        alt='Band performing on stage'
                        fill
                        priority
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 50vw'
                      />
                    </div>

                    {/* Gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30'></div>

                    {/* Content overlay with glass effect */}
                    <div className='absolute inset-0 bg-gradient-to-t from-neutral/70 to-transparent flex items-end'>
                      <div className='p-6 w-full backdrop-blur-sm bg-neutral/10 rounded-b-xl text-neutral-content'>
                        <h2 className='text-2xl md:text-3xl'>
                          Unforgettable Performances
                        </h2>
                        <p className='text-lg text-neutral-content/90'>
                          Creating memories that last a lifetime
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className='absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/30 blur-xl'></div>
                  <div className='absolute -top-6 -right-6 w-24 h-24 rounded-full bg-secondary/30 blur-xl'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle scroll indicator */}
          <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-6 h-6 text-primary-content'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
        </section>
        {/* Awards Section - with Glass effect */}
        <section className='py-16 bg-base-200'>
          <div className='container mx-auto px-4'>
            <div className='bg-primary rounded-box p-8 shadow-lg'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='md:w-2/3'>
                  <h2 className='text-3xl md:text-4xl font-serif mb-4 text-primary-content'>
                    Award-Winning Entertainment
                  </h2>
                  <p className='text-xl mb-4 text-secondary'>
                    Proud recipients of the WeddingWire Couples&apos; Choice
                    Award two years in a row!
                  </p>
                  <p className='mb-6 text-base-content dark:text-neutral-content'>
                    This prestigious award recognizes the top wedding
                    professionals for excellence in quality, service,
                    responsiveness, and professionalism—as determined by reviews
                    from millions of newlyweds.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 mb-6'>
                    <a
                      href='https://www.weddingwire.com/reviews/the-charleston-wedding-band-charleston/463b9d1742eb296f.html'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-base'
                    >
                      <span className='mr-2'>💍</span> Read WeddingWire Reviews
                    </a>
                    <a
                      href='https://www.theknot.com/marketplace/the-charleston-wedding-band-charleston-sc-956421'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-secondary'
                    >
                      <span className='mr-2'>💎</span> Read The Knot Reviews
                    </a>
                  </div>
                </div>
                <div className='md:w-1/3 flex justify-center'>
                  <div className='flex flex-col gap-4'>
                    <div className='bg-base-100 p-4 rounded-btn shadow-xl transform rotate-2 w-48 h-48 flex items-center justify-center hover:rotate-0 transition-transform duration-[--animation-btn]'>
                      <div className='text-center'>
                        <div className='text-4xl mb-2'>🏆</div>
                        <div className='text-primary'>Couples Choice</div>
                        <div className='text-sm text-base-content'>
                          Award Winner
                        </div>
                      </div>
                    </div>
                    <div className='bg-base-100 p-4 rounded-btn shadow-xl transform -rotate-1 w-48 flex items-center justify-center'>
                      <div className='text-center'>
                        <div className='text-secondary flex items-center justify-center'>
                          <span className='text-2xl mr-2'>💎</span> Featured On
                        </div>
                        <div className='text-lg text-accent'>The Knot</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-16 bg-base-100'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-serif text-primary mb-4'>
                Our Services
              </h2>
              <p className='text-xl text-base-content'>
                Book us for your next event
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Weddings',
                  image: '/images/wedding.jpg',
                  description:
                    'Make your special day unforgettable with live music that sets the perfect atmosphere.',
                },
                {
                  title: 'Corporate Events',
                  image: '/images/dtsmb/jack-keys.jpg',
                  description:
                    'Impress your clients and energize your team with professional entertainment.',
                },
                {
                  title: 'Private Parties',
                  image: '/images/party.jpg',
                  description:
                    'Transform your celebration into an extraordinary event with our dynamic performances.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className='card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300'
                >
                  <figure className='h-48'>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className='w-full h-full object-cover'
                      loading='eager'
                    />
                  </figure>
                  <div className='card-body'>
                    <h3 className='card-title text-2xl text-secondary'>
                      {service.title}
                    </h3>
                    <p className='text-base-content'>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
