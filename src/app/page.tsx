import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Home | DTSMB',
  description:
    'DTSMB is a professional cover band for weddings, corporate events, private parties, and bars.',
}

export default function Home() {
  return (
    <main className='scroll-smooth'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-primary to-secondary py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-serif mb-6 text-primary-content'>
              Dans Tramp Stamp{' '}
              <span className='block md:inline'>&amp; the Money Bags</span>
            </h1>
            <p className='text-xl md:text-2xl mb-10 text-primary-content'>
              Professional cover band for weddings, corporate events, private
              parties, and bars.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-10'>
              <Link href='/contact' className='btn btn-primary btn-lg'>
                Book Now
              </Link>
              <Link
                href='/services'
                className='btn btn-outline btn-lg text-primary-content hover:bg-primary-content hover:text-primary'
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Featured Image */}
          <div className='relative w-full h-[300px] md:h-[500px] rounded-box overflow-hidden shadow-2xl my-12'>
            <Image
              src='/images/dtsmb/wedding-couple.jpg'
              alt='Band performing on stage'
              fill
              priority
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 1200px'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-neutral to-transparent flex items-end'>
              <div className='p-6'>
                <h2 className='text-2xl md:text-3xl text-neutral-content'>
                  Unforgettable Performances
                </h2>
                <p className='text-lg text-neutral-content/90'>
                  Creating memories that last a lifetime
                </p>
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

      {/* Awards Section - with Glass effect */}
      <section className='py-16 bg-gradient-to-br from-primary/10 to-secondary/10'>
        <div className='container mx-auto px-4'>
          <div className='glass rounded-box p-8 shadow-lg'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
              <div className='md:w-2/3'>
                <h2 className='text-3xl md:text-4xl font-serif mb-4 text-primary'>
                  Award-Winning Entertainment
                </h2>
                <p className='text-xl mb-4 text-secondary'>
                  Proud recipients of the WeddingWire Couples&apos; Choice Award
                  two years in a row!
                </p>
                <p className='mb-6 text-base-content'>
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
                    className='btn btn-primary'
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
    </main>
  )
}
