import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-theme='dtsmb'>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
