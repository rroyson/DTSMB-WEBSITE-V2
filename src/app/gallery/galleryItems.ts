type GalleryImage = {
  id: string
  type: 'image'
  src: string
  alt: string
  category: string
  description: string
}

type GalleryVideo = {
  id: string
  type: 'video'
  src: string
  youtubeId: string
  thumbnail: string
  category: string
  description: string
}

type GalleryItem = GalleryImage | GalleryVideo

// Base items without IDs - Randomized order and all images set to "photos" category
const baseItems = [
  // Images - Randomized order
  {
    type: 'image' as const,
    src: '/images/dtsmb/zach-singin.jpg',
    alt: 'Lead vocalist Zach from DTSMB performing crowd favorite song at Charleston wedding',
    category: 'photos',
    description: 'Zach taking lead vocals during a crowd favorite',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/danny-couple-black-n-white.jpg',
    alt: 'Black and white professional photography of DTSMB performing at Lowndes Grove wedding venue in Charleston',
    category: 'photos',
    description: 'Live performance at Lowndes Grove',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/bar-cam.jpg',
    alt: 'Cam Cockatil Club',
    category: 'photos',
    description: 'Cocktail Club Charleston',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/band-black-n-white.jpg',
    alt: 'Black and white photo of the band performing',
    category: 'photos',
    description: 'The full band in action - classic black and white shot',
  },
  {
    type: 'video' as const,
    src: '/videos/performance.mp4',
    youtubeId: '6XW3ABv5P3c',
    thumbnail: '/images/video-thumbnails/performance.jpg',
    category: 'live',
    description: 'Live performance at Commonhouse Aleworks',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/bar-wide.jpg',
    alt: 'Wide shot of the band at a bar venue',
    category: 'photos',
    description: 'Full band setup during a lively bar performance',
  },
  {
    type: 'video' as const,
    src: '/videos/behind-scenes.mp4',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/images/gallery-2.jpg',
    category: 'live',
    description: 'Behind the scenes at summer tour',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/rob-black-n-white.jpg',
    alt: 'Black and white portrait of Rob',
    category: 'photos',
    description:
      "Rob's intense focus captured in a striking black and white portrait",
  },

  {
    type: 'image' as const,
    src: '/images/dtsmb/danny-smile.jpg',
    alt: 'Portrait of Danny smiling',
    category: 'photos',
    description: "Danny's infectious energy and enthusiasm",
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/bar-rob-zach.jpg',
    alt: 'Rob and Zach performing at a bar',
    category: 'photos',
    description: 'Rob and Zach bringing down the house during a local gig',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/wedding-couple.jpg',
    alt: "The Charleston Wedding Band performing live during couple's first dance at luxury Charleston wedding",
    category: 'photos',
    description:
      'Creating magical moments for a newlywed couple at their reception',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/zach-crowd-lg.jpg',
    alt: 'Zach performing with a large crowd',
    category: 'photos',
    description: 'Zach connecting with the crowd during a packed performance',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/rob2.jpg',
    alt: 'Rob portrait',
    category: 'photos',
    description: "Rob's charismatic personality shines through",
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/zach-guitar.jpg',
    alt: 'Zach playing guitar',
    category: 'photos',
    description: 'Zach delivering amazing guitar work at a private event',
  },

  {
    type: 'image' as const,
    src: '/images/dtsmb/lownds-grove-band.jpg',
    alt: 'The band performing at Lowndes Grove',
    category: 'photos',
    description: 'Live at the beautiful Lowndes Grove Plantation venue',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/rob-guitar-1.jpg',
    alt: 'Rob playing guitar during a performance',
    category: 'photos',
    description: 'Rob shredding on guitar during a high-energy number',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/danny-smile-black-n-white.jpg',
    alt: 'Black and white portrait of Danny smiling',
    category: 'photos',
    description:
      "Behind the scenes - Danny's charismatic smile in classic black and white",
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/bar-rob.jpg',
    alt: 'Rob performing at a bar',
    category: 'photos',
    description: 'Rob delivering an epic guitar solo at a downtown show',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/rob2-black-n-white.jpg',
    alt: 'Alternative black and white photo of Rob',
    category: 'photos',
    description: 'Another side of Rob - artistic black and white portrait',
  },
  {
    type: 'image' as const,
    src: '/images/dtsmb/danny-singin.jpg',
    alt: 'Danny singing during a performance',
    category: 'photos',
    description: 'Danny captivating the audience with his vocals',
  },
  {
    type: 'video' as const,
    src: '/videos/performance.mp4',
    youtubeId: 'gDrDWqxz4rI',
    thumbnail: '/images/video-thumbnails/performance.jpg',
    category: 'live', // Kept as live since it's a video
    description: 'Live performance at Pilots Cove Amphitheater',
  },
]

// Generate final gallery items with dynamic IDs
export const galleryItems: GalleryItem[] = baseItems.map((item, index) => ({
  ...item,
  id: `gallery-${index}`, // Creates IDs like 'gallery-0', 'gallery-1', etc.
}))
