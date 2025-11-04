import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient, Role } from '@prisma/client' // Importe o enum Role
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

interface QuickLoginData {
  role: string
}

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Mapeamento correto baseado no seu schema
const ROLE_MAPPING = {
  admin: Role.ADMIN, // Use o enum do Prisma
  coordinator: Role.COORDINATOR,
  seller: Role.SELLER
} as const

const DEMO_USERS = {
  admin: {
    email: 'admin@test.com',
    name: 'Admin Geral',
    password: 'admin123',
  },
  coordinator: {
    email: 'coordinator@test.com',
    name: 'Coordenador Teste',
    password: 'coord123',
  },
  seller: {
    email: 'seller@test.com',
    name: 'Vendedor Teste',
    password: 'seller123',
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as QuickLoginData
    const { role } = body

    if (!role || !['admin', 'coordinator', 'seller'].includes(role)) {
      return NextResponse.json(
        { message: 'Role inválido' },
        { status: 400 }
      )
    }

    const demoUser = DEMO_USERS[role as keyof typeof DEMO_USERS]
    const userRole = ROLE_MAPPING[role as keyof typeof ROLE_MAPPING]

    let user = await prisma.user.findUnique({
      where: { email: demoUser.email },
    })

    if (!user) {
      const hashedPassword = await bcrypt.hash(demoUser.password, 10)
      user = await prisma.user.create({
        data: {
          email: demoUser.email,
          name: demoUser.name,
          password: hashedPassword,
          role: userRole, // Agora usando o enum correto
        },
      })
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role.toLowerCase(), // Converta para minúsculo apenas na resposta
      },
    })
  } catch (error) {
    console.error('Quick login error:', error)
    return NextResponse.json(
      { message: 'Erro ao fazer login rápido' },
      { status: 500 }
    )
  }
}