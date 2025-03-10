/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // These variables will be available on the server AND client
    NEXT_PUBLIC_MAIN_EMAIL: process.env.NEXT_PUBLIC_MAIN_EMAIL,
  },
  // Image configuration for external domains
  images: {
    domains: ['images.unsplash.com'],
  },
}

export default nextConfig
