import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { ReCaptchaProvider } from 'next-recaptcha-v3'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DTSMB | Dans Tramp Stamp and the Money Bags',
  description:
    'Professional band for weddings, corporate events, and private parties.',
  keywords:
    'band, live music, wedding band, corporate event music, private party music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme='dtsmb'>
      <head>{/* Using local images - no preloading needed */}</head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans min-h-screen flex flex-col`}
      >
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
        >
          <Navbar />
          <main className='flex-grow will-change-transform'>{children}</main>
          <Footer />
          <Analytics />
        </ReCaptchaProvider>
      </body>
    </html>
  )
}
