// Environment variables with fallbacks
// For server components
export const MAIN_EMAIL =
  process.env.NEXT_PUBLIC_MAIN_EMAIL || 'bookings@dtsmb.com'

// For client components - only variables prefixed with NEXT_PUBLIC_ are accessible
export const PUBLIC_ENV = {
  // In client components, we need to use NEXT_PUBLIC_ prefixed variables
  MAIN_EMAIL: process.env.NEXT_PUBLIC_MAIN_EMAIL || 'bookings@dtsmb.com',
}
