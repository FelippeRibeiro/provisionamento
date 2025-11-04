import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export interface AuthPayload {
  userId: number
  email: string
  role: string
}

export function verifyToken(token: string): AuthPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload
    return decoded
  } catch (error) {
    return null
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }
  return authHeader.substring(7)
}

export function withAuth(handler: Function) {
  return async (request: NextRequest) => {
    const token = getTokenFromRequest(request)

    if (!token) {
      return NextResponse.json(
        { message: 'Token não fornecido' },
        { status: 401 }
      )
    }

    const payload = verifyToken(token)

    if (!payload) {
      return NextResponse.json(
        { message: 'Token inválido' },
        { status: 401 }
      )
    }

    return handler(request, payload)
  }
}

export function withRole(...roles: string[]) {
  return (handler: Function) => {
    return async (request: NextRequest, payload: AuthPayload) => {
      if (!roles.includes(payload.role.toUpperCase())) {
        return NextResponse.json(
          { message: 'Acesso negado' },
          { status: 403 }
        )
      }
      return handler(request, payload)
    }
  }
}
