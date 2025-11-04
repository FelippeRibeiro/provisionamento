'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/services/api'

interface User {
  id: number
  email: string
  name: string
  role: 'admin' | 'coordinator' | 'seller'
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token) {
      router.push('/login')
      return
    }

    if (userData) {
      setUser(JSON.parse(userData))
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container-custom py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Provisionamento de Vendas
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {user?.name} ({user?.role})
            </span>
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="card">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              Total de Empresas
            </h3>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="card">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              Pedidos Pendentes
            </h3>
            <p className="text-3xl font-bold text-yellow-600">0</p>
          </div>
          <div className="card">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              Receita Total
            </h3>
            <p className="text-3xl font-bold text-green-600">R$ 0,00</p>
          </div>
          <div className="card">
            <h3 className="text-gray-600 text-sm font-medium mb-2">
              Previsão Mês
            </h3>
            <p className="text-3xl font-bold text-blue-600">R$ 0,00</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/companies" className="card hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Empresas</h3>
            <p className="text-gray-600">Gerenciar empresas e clientes</p>
          </a>
          <a href="/orders" className="card hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Pedidos</h3>
            <p className="text-gray-600">Visualizar e criar pedidos</p>
          </a>
          <a href="/products" className="card hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Produtos</h3>
            <p className="text-gray-600">Catálogo de produtos</p>
          </a>
          {user?.role === 'admin' && (
            <>
              <a href="/coordinators" className="card hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Coordenadores</h3>
                <p className="text-gray-600">Gerenciar coordenadores</p>
              </a>
              <a href="/regions" className="card hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Regiões</h3>
                <p className="text-gray-600">Gerenciar regiões</p>
              </a>
              <a href="/reports" className="card hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Relatórios</h3>
                <p className="text-gray-600">Gerar relatórios e análises</p>
              </a>
            </>
          )}
          {user?.role === 'coordinator' && (
            <>
              <a href="/sellers" className="card hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Vendedores</h3>
                <p className="text-gray-600">Gerenciar vendedores</p>
              </a>
              <a href="/forecasts" className="card hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Previsões</h3>
                <p className="text-gray-600">Previsões de vendas</p>
              </a>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
