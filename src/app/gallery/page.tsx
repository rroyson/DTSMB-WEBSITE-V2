'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { galleryItems } from './galleryItems'
import { motion } from 'framer-motion'
import Head from 'next/head'

type Category = 'all' | 'live' | 'photos'

// Since this is a client component, we'll use Head for SEO metadata
// The actual metadata for this page should be defined in a separate server component
// that wraps this client component

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const clickPositionRef = useRef({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'live', label: 'Live Performances' },
    { value: 'photos', label: 'Photos' },
  ]

  useEffect(() => {
    // Add ESC key listener for modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Effect to handle modal opening and centering
  useEffect(() => {
    // When a new item is selected
    if (selectedItem) {
      // Short timeout to allow the modal to render
      const timer = setTimeout(() => {
        // Make sure imageRef.current is still valid when the timeout runs
        if (imageRef.current) {
          // Use scroll into view to center the image - simpler and more reliable
          imageRef.current.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center',
          })
        }
      }, 50) // Reduced timeout for faster response

      return () => {
        clearTimeout(timer)
      }
    }
  }, [selectedItem])

  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedItem(null)
      }
    }

    if (selectedItem !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectedItem])

  const handleItemClick = (id: string, e: React.MouseEvent) => {
    // Save the click position relative to the viewport
    clickPositionRef.current = {
      x: e.clientX,
      y: e.clientY,
    }
    setSelectedItem(id)
  }

  return (
    <>
      <Head>
        <title>Photo & Video Gallery | The Charleston Wedding Band</title>
        <meta
          name='description'
          content='Browse photos and videos of The Charleston Wedding Band performing at weddings, corporate events, and private parties throughout Charleston.'
        />
        <meta
          name='keywords'
          content='wedding band photos, live performance videos, Charleston wedding entertainment, event music gallery'
        />
      </Head>
      <div className='min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-7xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Simplified header animation */}
          <div className='text-center mb-12'>
            <h1 className='text-base-content text-4xl md:text-5xl font-serif font-bold mb-4'>
              Gallery
            </h1>
            <p className='text-xl md:text-2xl font-medium text-base-content max-w-2xl mx-auto leading-relaxed'>
              Experience our performances through photos and videos
            </p>
          </div>

          {/* Simplified category filter */}
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-content shadow-md'
                    : 'bg-base-200 hover:bg-base-300 text-base-content'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Simplified gallery grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='group bg-base-200/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
              >
                <div
                  className='relative aspect-[4/3] overflow-hidden cursor-pointer'
                  onClick={(e) => handleItemClick(item.id, e)}
                >
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  ) : (
                    <div className='w-full overflow-hidden rounded-lg h-full'>
                      <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                        title={item.description}
                        className='w-full h-full'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
                <div className='p-4'>
                  <p className='text-base-content/80 text-sm'>
                    {item.description}
                  </p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='inline-block px-2 py-1 text-xs rounded-md bg-base-300/80 text-base-content/70'>
                      {item.category}
                    </span>
                    <button
                      onClick={(e) => handleItemClick(item.id, e)}
                      className='text-sm text-primary hover:text-primary-focus transition-colors'
                    >
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* YouTube link */}
          <div className='text-info-content text-center mt-12'>
            <a
              href='https://www.youtube.com/@dtsmb5919'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 btn btn-outline'
            >
              <svg
                className='w-5 h-5 text-red-600'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
              </svg>
              Watch More on YouTube
            </a>
          </div>

          {selectedItem !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed inset-0 bg-black/95 z-50 overflow-auto'
              onClick={() => setSelectedItem(null)}
            >
              {(() => {
                const item = galleryItems.find(
                  (item) => item.id === selectedItem
                )
                if (!item) return null

                return (
                  <motion.div
                    ref={modalRef}
                    initial={{
                      scale: 0.9,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0.9,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => e.stopPropagation()}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-lg overflow-hidden shadow-2xl'
                    style={{
                      maxHeight: '95vh',
                      maxWidth: '95vw',
                    }}
                  >
                    {/* Image or video content */}
                    {item.type === 'image' ? (
                      <div
                        className='flex items-center justify-center'
                        style={{ minHeight: '50vh' }}
                      >
                        <div ref={imageRef} className='relative'>
                          <Image
                            src={item.src}
                            alt={item.alt || 'Gallery image'}
                            width={1200}
                            height={800}
                            className='object-contain'
                            sizes='95vw'
                            priority
                            style={{
                              maxHeight: '85vh',
                              maxWidth: '90vw',
                            }}
                          />

                          {/* Minimal caption at bottom */}
                          <div className='absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm text-white text-sm transform translate-y-full hover:translate-y-0 transition-transform duration-300'>
                            <p>{item.description}</p>
                            <p className='text-xs opacity-75'>
                              Category: {item.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className='flex items-center justify-center'
                        style={{ minHeight: '50vh' }}
                      >
                        <div
                          ref={imageRef}
                          className='aspect-video overflow-hidden rounded-lg'
                          style={{
                            maxWidth: '90vw',
                            maxHeight: '85vh',
                          }}
                        >
                          <iframe
                            src={`https://www.youtube.com/embed/${item.youtubeId}`}
                            title={item.description}
                            className='w-full h-full'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm text-white text-sm transform translate-y-full hover:translate-y-0 transition-transform duration-300'>
                          <p className='text-base-content text-sm'>
                            {item.description}
                          </p>
                          <p className='text-xs opacity-75'>
                            Category: {item.category}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Close button */}
                    <button
                      className='absolute top-2 right-2 text-white hover:text-primary bg-black/50 rounded-full p-1 transition-colors'
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedItem(null)
                      }}
                      aria-label='Close modal'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </motion.div>
                )
              })()}
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  )
}
