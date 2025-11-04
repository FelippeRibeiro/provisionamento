// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Como tudo está no mesmo projeto, não precisamos mais de CORS
  // Mas mantemos para compatibilidade caso seja necessário
  const response = NextResponse.next()
  
  return response
}

export const config = {
  matcher: '/api/:path*',
}

