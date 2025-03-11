/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState, useRef } from 'react'

// Define the YouTube Player interface
interface YouTubePlayerInterface {
  playVideo: () => void
  pauseVideo: () => void
  mute: () => void
  unMute: () => void
  getPlayerState: () => number
}

// Define window with YouTube API
declare global {
  interface Window {
    YT: {
      Player: any
      PlayerState: {
        PLAYING: number
        PAUSED: number
        ENDED: number
      }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

export default function YouTubePlayer({
  videoId,
  thumbnail,
  height = '315px',
  autoplay = false,
}: {
  videoId: string
  thumbnail?: string
  height?: string
  autoplay?: boolean
}) {
  const [player, setPlayer] = useState<YouTubePlayerInterface | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)
  const apiLoadedRef = useRef(false)

  useEffect(() => {
    // Define initializePlayer inside useEffect
    const initializePlayer = () => {
      if (!playerRef.current) return

      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: {
          playsinline: 1,
          autoplay: autoplay ? 1 : 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: () => {
            setIsLoaded(true)
            setPlayer(newPlayer)
          },
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING)
          },
          onError: (event: any) => {
            console.error('YouTube Player Error:', event.data)
          },
        },
      })
    }

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer()
      return
    }

    // Prevent multiple script loads
    if (apiLoadedRef.current) return
    apiLoadedRef.current = true

    // Load YouTube IFrame API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'

    // Add script to document
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Global function required by YouTube API
    window.onYouTubeIframeAPIReady = initializePlayer

    return () => {
      // Clean up
      window.onYouTubeIframeAPIReady = () => {}
    }
  }, [videoId, autoplay])

  const handlePlayClick = () => {
    if (player && isLoaded) {
      if (isPlaying) {
        player.pauseVideo()
      } else {
        player.playVideo()
      }
    }
  }

  return (
    <div className='relative w-full' style={{ height }}>
      {!isLoaded && thumbnail && (
        <div
          className='absolute inset-0 bg-base-200 flex items-center justify-center cursor-pointer'
          onClick={handlePlayClick}
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
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
      )}

      <div ref={playerRef} className='w-full h-full' />
    </div>
  )
}
