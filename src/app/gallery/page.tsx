'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import YouTubePlayer from '@/components/YouTubePlayer'

// Define types for gallery items
type GalleryImage = {
  id: number
  type: 'image'
  src: string
  alt: string
  category: string
  description: string
}

type GalleryVideo = {
  id: number
  type: 'video'
  src: string
  youtubeId: string
  thumbnail: string
  category: string
  description: string
}

type GalleryItem = GalleryImage | GalleryVideo

// Gallery items data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/images/gallery-1.jpg',
    alt: 'Band performance 1',
    category: 'live',
    description: 'Live performance at The Charleston Wedding',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/gallery-2.jpg',
    alt: 'Band performance 2',
    category: 'photos',
    description: 'Corporate event at Charleston Harbor',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/gallery-3.jpg',
    alt: 'Band performance 3',
    category: 'live',
    description: 'Wedding reception at Boone Hall Plantation',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/gallery-4.jpg',
    alt: 'Band performance 4',
    category: 'photos',
    description: 'Private party downtown Charleston',
  },
  {
    id: 5,
    type: 'video',
    src: '/videos/performance.mp4',
    youtubeId: 'EVn5cUHIEys',
    thumbnail: '/images/video-thumbnails/performance.jpg',
    category: 'live',
    description: 'Live performance at Charleston Music Hall',
  },
  {
    id: 6,
    type: 'video',
    src: '/videos/performance.mp4',
    youtubeId: 'EVn5cUHIEys',
    thumbnail: '/images/video-thumbnails/performance.jpg',
    category: 'live',
    description: 'Live performance at Charleston Music Hall',
  },
  {
    id: 7,
    type: 'video',
    src: '/videos/behind-scenes.mp4',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/images/gallery-2.jpg',
    category: 'photos',
    description: 'Behind the scenes at summer tour',
  },
]

type Category = 'all' | 'live' | 'photos'

// Update the VideoThumbnail and gallery rendering code

// 1. First, give each player a unique ID
function YouTubePlayerWithId({ videoId, id }: { videoId: string; id: string }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)
  const apiLoadedRef = useRef(false)

  useEffect(() => {
    // Function to initialize player once API is ready
    function initializePlayer() {
      if (!playerRef.current) return

      try {
        // Make sure YT is defined before using it
        if (window.YT && window.YT.Player) {
          new window.YT.Player(playerRef.current, {
            videoId: videoId,
            height: '100%',
            width: '100%',
            playerVars: {
              playsinline: 1,
              autoplay: 0,
              modestbranding: 1,
              rel: 0,
            },
            events: {
              onReady: () => setIsLoaded(true),
              onError: (e) => console.error('YouTube error:', e.data),
            },
          })
        }
      } catch (err) {
        console.error('Failed to initialize player:', err)
      }
    }

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer()
    } else {
      // Prevent multiple script loads
      if (!apiLoadedRef.current) {
        apiLoadedRef.current = true

        // Load YouTube API
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'

        // Set global callback that YouTube requires
        window.onYouTubeIframeAPIReady = () => {
          initializePlayer()
        }

        // Add script to page
        const firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentNode?.insertBefore(tag, firstScript)
      } else {
        // API is loading but not ready - add to global callback chain
        const originalCallback = window.onYouTubeIframeAPIReady
        window.onYouTubeIframeAPIReady = () => {
          if (originalCallback) originalCallback()
          initializePlayer()
        }
      }
    }

    return () => {
      // Cleanup if needed
    }
  }, [videoId, id])

  // YouTube thumbnail to show while loading
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className='relative w-full h-full'>
      {!isLoaded && (
        <div
          className='absolute inset-0 bg-center bg-cover'
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
            <div className='bg-primary/80 rounded-full p-4 shadow-lg'>
              <svg
                className='w-10 h-10 text-primary-content'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </div>
          </div>
        </div>
      )}
      <div ref={playerRef} className='w-full h-full' />
    </div>
  )
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

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
    // Mark as loaded after a short delay to allow for animation
    const timer = setTimeout(() => setIsLoaded(true), 500)

    // Add ESC key listener for modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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

  return (
    <div className='min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8'>
      <motion.div
        className='max-w-7xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='text-center mb-12'>
          <motion.h1
            className='text-base-content text-4xl md:text-5xl font-serif font-bold mb-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className='text-xl md:text-2xl font-medium text-base-content max-w-2xl mx-auto leading-relaxed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience our performances through photos and videos
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className='flex flex-wrap justify-center gap-3 mb-12'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-primary text-primary-content shadow-md'
                  : 'bg-base-200 hover:bg-base-300 text-base-content'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isLoaded ? 1 : 0,
                  scale: isLoaded ? 1 : 0.9,
                  transition: { delay: index * 0.1 },
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                className='group bg-base-200/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
              >
                <div
                  className='relative aspect-[4/3] overflow-hidden cursor-pointer'
                  onClick={() => setSelectedItem(item.id)}
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
                    <div className='w-full h-64 overflow-hidden rounded-lg'>
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
                      onClick={() => setSelectedItem(item.id)}
                      className='text-sm text-primary hover:text-primary-focus transition-colors'
                    >
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Add link to more videos */}
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

        {/* Modal for expanded view */}
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10'
            >
              {(() => {
                const item = galleryItems.find(
                  (item) => item.id === selectedItem
                )

                if (!item) return null

                return (
                  <motion.div
                    ref={modalRef}
                    className='relative max-w-6xl w-full max-h-[90vh] bg-base-100/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl'
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                  >
                    <div className='relative'>
                      {item.type === 'image' ? (
                        <div className='relative aspect-video'>
                          <Image
                            src={item.src}
                            alt={item.alt || 'Gallery image'}
                            fill
                            className='object-contain'
                            sizes='(max-width: 768px) 100vw, 1200px'
                          />
                        </div>
                      ) : (
                        <div className='w-full max-w-4xl mx-auto'>
                          <div className='w-full h-64 overflow-hidden rounded-lg'>
                            <iframe
                              src={`https://www.youtube.com/embed/${item.youtubeId}`}
                              title={item.description}
                              className='w-full h-full'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                              allowFullScreen
                            ></iframe>
                          </div>
                          <p className='mt-4 text-base-content'>
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className='p-4 md:p-6 text-base-content/90'>
                      <p className='text-lg'>{item.description}</p>
                      <p className='text-sm mt-2 text-base-content/70'>
                        Category: {item.category}
                      </p>
                    </div>

                    <button
                      className='absolute top-4 right-4 text-white hover:text-primary transition-colors'
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedItem(null)
                      }}
                    >
                      <svg
                        className='w-8 h-8'
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
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
