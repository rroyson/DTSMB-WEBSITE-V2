import { NextResponse } from 'next/server'

export async function GET() {
  console.log('Test API route called')

  return NextResponse.json({
    status: 'success',
    message: 'API route is working correctly',
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Test POST received data:', body)

    return NextResponse.json({
      status: 'success',
      message: 'POST endpoint working',
      receivedData: body,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error in test POST:', error)
    return NextResponse.json(
      {
        status: 'error',
        message: 'Error processing request',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
