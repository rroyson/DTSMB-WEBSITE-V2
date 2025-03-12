import Image from 'next/image'

export const metadata = {
  title: 'DTSMB | Services & Pricing',
  description:
    'Professional band services for weddings, corporate events, private parties, and bars. View our packages and pricing.',
}

export default function ServicesPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero section */}
      <div className='relative h-[300px] md:h-[400px] overflow-hidden'>
        <Image
          src='/images/dtsmb/zach-singin.jpg'
          alt='Band performance'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white px-4 max-w-3xl mx-4'>
            <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]'>
              Services & Pricing
            </h1>
            <p className='text-xl max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'>
              Professional live music for all your special occasions
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className='py-16 md:py-24 bg-base-100'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-serif font-bold mb-6 text-primary'>
              One Band, Two Styles—seamlessly tailored to your event.
            </h2>
            <p className='text-info-content text-lg mb-8'>
              <span className='text-secondary'>
                {' '}
                The Charleston Wedding Band{' '}
              </span>
              and <span className='text-secondary'>DTSMB</span> bring
              professional, high-energy performances to make your event
              unforgettable. Whether you need an elegant wedding band or a
              high-energy party band, we bring the same top-tier musicianship,
              diverse setlist, and unforgettable performances to match your
              celebration&apos;s vibe.
            </p>
            {/* <p className='text-info-content mb-4 text-sm bg-base-200 p-3 rounded-lg border-l-4 border-primary'>
              <span className='font-bold text-primary'>
                The Charleston Wedding Band:
              </span>{' '}
              We also perform at weddings under this name, offering the same
              exceptional music and professional services. When you book DTSMB
              for your wedding, you&apos;re getting the elegance and
              sophistication of The Charleston Wedding Band.
            </p> */}
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <a href='#packages' className='btn btn-primary'>
                View Packages
              </a>
              <a href='/contact' className='btn btn-soft'>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service types section */}
      <section className='py-16 bg-base-200'>
        <div className='container mx-auto px-4'>
          <h2 className='text-primary text-3xl md:text-4xl font-serif font-bold mb-12 text-center'>
            Our Specialty Events
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {/* Wedding Card */}
            <div className='card bg-base-100 shadow-xl overflow-hidden h-full'>
              <figure className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
                  alt='Wedding band'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                  <h3 className='text-2xl font-serif font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
                    Weddings
                  </h3>
                </div>
              </figure>
              <div className='card-body flex flex-col h-full'>
                <div className='divider my-0 mt-1'></div>

                <ul className='text-info-content space-y-2 flex-grow'>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Ceremony music</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Cocktail hour acoustic sets</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Reception with dance music</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Special first dance & parent dances</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>DJ services</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Studio quality performance and speech recording</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Professional sound & lighting</span>
                  </li>
                </ul>
                <div className='card-actions mt-4'>
                  <a
                    href='#wedding-packages'
                    className='btn btn-primary w-full'
                  >
                    Wedding Options
                  </a>
                </div>
              </div>
            </div>

            {/* Corporate Card */}
            <div className='card bg-base-100 shadow-xl overflow-hidden h-full'>
              <figure className='relative h-64'>
                <Image
                  src='/images/dtsmb/jack-keys.jpg'
                  alt='Corporate event'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                  <h3 className='text-2xl font-serif font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
                    Corporate Events
                  </h3>
                </div>
              </figure>
              <div className='card-body flex flex-col h-full'>
                <div className='divider my-0 mt-1'></div>
                <ul className='text-info-content space-y-2 flex-grow'>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Holiday parties & celebrations</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Product launches & trade shows</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Gala dinners & award ceremonies</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Company retreats & team building</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Professional sound & lighting</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Audio visual services</span>
                  </li>
                </ul>
                <div className='card-actions mt-4'>
                  <a
                    href='#corporate-packages'
                    className='btn btn-primary w-full'
                  >
                    Corporate Options
                  </a>
                </div>
              </div>
            </div>

            {/* Private Parties Card */}
            <div className='card bg-base-100 shadow-xl overflow-hidden h-full'>
              <figure className='relative h-64'>
                <Image
                  src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop'
                  alt='Private party'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                  <h3 className='text-2xl font-serif font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
                    Private Parties
                  </h3>
                </div>
              </figure>
              <div className='card-body flex flex-col h-full'>
                <div className='divider my-0 mt-1'></div>
                <ul className='text-info-content space-y-2 flex-grow'>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Birthday & anniversary celebrations</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Backyard & house parties</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Retirement parties</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Private club events</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-primary mr-2'>✓</span>
                    <span>Themed parties & special occasions</span>
                  </li>
                </ul>
                <div className='card-actions mt-4'>
                  <a
                    href='#private-packages'
                    className='btn btn-primary w-full'
                  >
                    Private Event Options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages section */}
      <section id='packages' className='py-16 bg-base-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-primary text-3xl md:text-4xl font-serif font-bold mb-12 text-center'>
            Our Packages & Pricing
          </h2>

          {/* Wedding Packages */}
          <div id='wedding-packages' className='mb-20'>
            <div className='text-info-content grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Standard Package */}
              <div className='card bg-base-200 shadow-xl h-full'>
                <div className='card-body flex flex-col justify-between'>
                  <div>
                    <h4 className='card-title text-xl font-bold mb-2'>
                      Standard
                    </h4>
                    <div className='divider my-2'></div>
                    <ul className='space-y-3 mb-6 min-h-[220px]'>
                      <li className='flex items-start'>
                        <span className='text-primary mr-2'>✓</span>
                        <span>Up to 2 hours of live music - 4 Piece Band</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-primary mr-2'>✓</span>
                        <span>Basic Sound System</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-primary mr-2'>✓</span>
                        <span>Basic Lighting Package</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-primary mr-2'>✓</span>
                        <span>MC services for key moments</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-primary mr-2'>✓</span>
                        <span>DJ Music - Ceremony, Cockatail Hour, Dinner</span>
                      </li>
                    </ul>
                  </div>
                  <div className='card-actions mt-auto'>
                    <a href='/contact' className='btn btn-primary w-full'>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Premium Package */}
              <div className='card bg-primary text-primary-content shadow-xl h-full relative'>
                <div className='absolute -top-4 right-0 left-0 text-center'>
                  <span className='badge badge-secondary'>Most Popular</span>
                </div>
                <div className='card-body flex flex-col justify-between'>
                  <div>
                    <h4 className='card-title text-xl font-bold mb-2'>
                      Premium
                    </h4>
                    <div className='divider opacity-30 my-2'></div>
                    <ul className='space-y-3 mb-6 min-h-[220px]'>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Up to 3 hours of live music - 4 Piece Band</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Up to 1 hour of live music - Acoustic Duo</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Premium Sound System + Sound Engineer</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Premium Stage and Dance Floor Lighting</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>MC services for entire reception</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>DJ Music - Ceremony & Dinner</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Custom Song Requests - 1 included</span>
                      </li>
                    </ul>
                  </div>
                  <div className='card-actions mt-auto'>
                    <a href='/contact' className='btn btn-secondary w-full'>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Luxury Package */}
              <div className='card bg-base-200 shadow-xl h-full'>
                <div className='card-body flex flex-col justify-between'>
                  <div>
                    <h4 className='card-title text-xl font-bold mb-2'>
                      Luxury
                    </h4>
                    <div className='divider my-2'></div>
                    <ul className='space-y-3 mb-6 min-h-[220px]'>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Up to 4 hours of live music - 4 Piece Band</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Up to 1 hour of live music - Acoustic Duo</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Premium Sound System + Sound Engineer</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Premium Stage and Dance Floor Lighting</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>MC services for entire reception</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>DJ Music - Ceremony & Dinner</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>Custom Song Requests - 3 included</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='opacity-90 mr-2'>✓</span>
                        <span>
                          Additional member - Keyboard, Saxophone or Acoustic
                          Guitar
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='card-actions mt-auto'>
                    <a href='/contact' className='btn btn-primary w-full'>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center text-error'>
            *Events outside of Charleston, SC may incure a travel fee.
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className='text-info-content py-16 bg-base-200'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-serif font-bold mb-12 text-center'>
            Additional Services
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='card bg-base-100 shadow-lg'>
              <div className='card-body text-center'>
                <div className='text-4xl mb-4'>🎤</div>
                <h3 className='card-title justify-center text-xl mb-2'>
                  Duo Performance
                </h3>
                <p>
                  Acoustic guitarist/vocalist for intimate gatherings or
                  ceremony music.
                </p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-lg'>
              <div className='card-body text-center'>
                <div className='text-4xl mb-4'>🎧</div>
                <h3 className='card-title justify-center text-xl mb-2'>
                  Recording Services
                </h3>
                <p>
                  Professional recording services to capture your event. This
                  can include ceremony, cocktail hour, dinner, and more.
                </p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-lg'>
              <div className='card-body text-center'>
                <div className='text-4xl mb-4'>💡</div>
                <h3 className='card-title justify-center text-xl mb-2'>
                  Venue Lighting
                </h3>
                <p>
                  Premium lighting packages, including uplighting and dance
                  floor effects, to set the perfect atmosphere.
                </p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-lg'>
              <div className='card-body text-center'>
                <div className='text-4xl mb-4'>🎵</div>
                <h3 className='card-title justify-center text-xl mb-2'>
                  Custom Song
                </h3>
                <p>
                  Custom arrangement of special songs not in our regular
                  repertoire.
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
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Contact us today to check availability and get a customized quote
            for your specific event needs.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a href='/contact' className='btn btn-lg btn-secondary'>
              Contact Us
            </a>
            <a
              href='tel:+15551234567'
              className='btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary'
            >
              Call (860) 729-3354
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
