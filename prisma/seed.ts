import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando seed do banco de dados...')

  // Create regions
  const regions = await Promise.all([
    prisma.region.upsert({
      where: { code: 'SP' },
      update: {},
      create: { name: 'São Paulo', code: 'SP' },
    }),
    prisma.region.upsert({
      where: { code: 'RJ' },
      update: {},
      create: { name: 'Rio de Janeiro', code: 'RJ' },
    }),
    prisma.region.upsert({
      where: { code: 'MG' },
      update: {},
      create: { name: 'Minas Gerais', code: 'MG' },
    }),
    prisma.region.upsert({
      where: { code: 'BA' },
      update: {},
      create: { name: 'Bahia', code: 'BA' },
    }),
    prisma.region.upsert({
      where: { code: 'RS' },
      update: {},
      create: { name: 'Rio Grande do Sul', code: 'RS' },
    }),
  ])

  console.log(`${regions.length} regiões criadas/atualizadas`)

  // Create products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { sku: 'PROD001' },
      update: {},
      create: {
        name: 'Produto Premium',
        description: 'Produto de alta qualidade',
        sku: 'PROD001',
        price: 99900, // R$ 999,00 em centavos
        category: 'Premium',
        stock: 100,
        active: true,
      },
    }),
    prisma.product.upsert({
      where: { sku: 'PROD002' },
      update: {},
      create: {
        name: 'Produto Standard',
        description: 'Produto padrão',
        sku: 'PROD002',
        price: 49900, // R$ 499,00 em centavos
        category: 'Standard',
        stock: 200,
        active: true,
      },
    }),
    prisma.product.upsert({
      where: { sku: 'PROD003' },
      update: {},
      create: {
        name: 'Produto Básico',
        description: 'Produto básico',
        sku: 'PROD003',
        price: 19900, // R$ 199,00 em centavos
        category: 'Básico',
        stock: 500,
        active: true,
      },
    }),
  ])

  console.log(`${products.length} produtos criados/atualizados`)

  console.log('Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

