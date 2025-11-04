// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Permita ambas as portas durante desenvolvimento
  const origin = request.headers.get('origin')
  const allowedOrigins = 'http://localhost:3000'
  
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
  
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-requested-with')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Max-Age', '86400')

  // Resposta para pré-flight
  if (request.method === 'OPTIONS') {
    const responseOptions = new NextResponse(null, { status: 204 })
    
    if (origin && allowedOrigins.includes(origin)) {
      responseOptions.headers.set('Access-Control-Allow-Origin', origin)
    }
    
    responseOptions.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    responseOptions.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-requested-with')
    responseOptions.headers.set('Access-Control-Allow-Credentials', 'true')
    responseOptions.headers.set('Access-Control-Max-Age', '86400')
    
    return responseOptions
  }

  return response
}

export const config = {
  matcher: '/api/:path*',
}