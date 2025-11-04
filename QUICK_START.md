# ⚡ Início Rápido - Sistema de Provisionamento de Vendas

## 🎯 5 Minutos para Começar

### 1️⃣ Extrair e Abrir

```bash
# Extraia o arquivo sales_provisioning_system.zip
# Abra a pasta no VS Code
```

### 2️⃣ Instalar Dependências

```bash
# Na raiz do projeto
pnpm install
```

### 3️⃣ Configurar Banco de Dados

**Opção A: Usar PostgreSQL Local**

```bash
# 1. Crie um banco de dados PostgreSQL
# 2. Edite apps/api/.env com sua string de conexão
DATABASE_URL="postgresql://usuario:senha@localhost:5432/sales_provisioning"

# 3. Aplique as migrações
pnpm db:push
```

**Opção B: Usar SQLite (Mais Fácil para Testes)**

Se preferir não instalar PostgreSQL, pode usar SQLite:

```bash
# Edite apps/api/prisma/schema.prisma
# Mude a primeira linha de:
#   datasource db {
#     provider = "postgresql"
#   }
# Para:
#   datasource db {
#     provider = "sqlite"
#   }

# E mude DATABASE_URL para:
DATABASE_URL="file:./dev.db"

# Depois aplique as migrações:
pnpm db:push
```

### 4️⃣ Iniciar os Servidores

**Terminal 1 - Backend:**
```bash
cd apps/api
pnpm dev
```

**Terminal 2 - Frontend:**
```bash
cd apps/web
pnpm dev
```

### 5️⃣ Acessar o Sistema

Abra no navegador: **http://localhost:3000**

Use os botões de **Login Rápido** para testar:
- 🟢 **Admin Geral**
- 🟣 **Coordenador**
- 🟠 **Vendedor**

## 📊 O Que Você Tem

✅ **Autenticação JWT** - Login seguro com localStorage
✅ **3 Papéis** - Admin, Coordenador, Vendedor
✅ **Banco de Dados** - Prisma + PostgreSQL (ou SQLite)
✅ **API Routes** - Next.js 14+ API Routes
✅ **Frontend Moderno** - Next.js 14+ App Router + Tailwind CSS
✅ **Tipos Compartilhados** - TypeScript em todo o projeto
✅ **Estrutura Escalável** - Monorepo pronto para crescer

## 🗂️ Estrutura do Projeto

```
apps/
├── web/              ← Frontend (Next.js)
│   └── src/app/      ← Páginas e layouts
│
└── api/              ← Backend (Next.js API Routes)
    ├── src/app/api/  ← Rotas de API
    └── prisma/       ← Schema do banco

packages/
└── shared/           ← Tipos compartilhados
```

## 🚀 Próximas Funcionalidades a Implementar

Confira o arquivo `todo.md` para ver todas as funcionalidades planejadas:

1. **Cadastro de Coordenadores** - Admin pode cadastrar coordenadores
2. **Cadastro de Vendedores** - Coordenador pode cadastrar vendedores
3. **Cadastro de Empresas** - Vendedor pode cadastrar empresas
4. **Sistema de Pedidos** - Criar e gerenciar pedidos
5. **Dashboards com Métricas** - Visualizar dados por região/período
6. **Relatórios em PDF** - Gerar relatórios
7. **Integração com IA** - Análise de dados com OpenAI
8. **Notificações** - Alertas de novos cadastros

## 🔧 Variáveis de Ambiente

### Backend (apps/api/.env)

```env
# Banco de dados
DATABASE_URL="postgresql://user:password@localhost:5432/sales_provisioning"

# JWT
JWT_SECRET="sua-chave-secreta-aqui"

# Portas
API_PORT=3001
API_URL="http://localhost:3001"
FRONTEND_URL="http://localhost:3000"

# OpenAI (opcional)
OPENAI_API_KEY="sk-..."
```

### Frontend (apps/web/.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 💡 Dicas Importantes

1. **Não commite .env** - Adicione ao .gitignore (já está)
2. **Use pnpm** - Não use npm ou yarn com monorepo
3. **Instale Prisma Extension** - No VS Code para melhor experiência
4. **Verifique Portas** - 3000 (frontend) e 3001 (backend)
5. **Limpe Cache** - Se tiver problemas, delete `node_modules` e reinstale

## 🐛 Problemas Comuns

| Problema | Solução |
|----------|---------|
| "Cannot find module" | `pnpm install` na raiz |
| "Database connection failed" | Verifique DATABASE_URL |
| "Port already in use" | Mude as portas em package.json |
| "Prisma Client not found" | `cd apps/api && pnpm prisma generate` |

## 📚 Recursos Úteis

- [Documentação Completa](./README.md)
- [Guia de Setup Detalhado](./SETUP.md)
- [Lista de Funcionalidades](./todo.md)

## ✨ Você Está Pronto!

Agora você tem um sistema de provisionamento de vendas completo e pronto para desenvolvimento. 

**Próximo passo:** Comece a implementar as funcionalidades conforme o `todo.md`!

---

**Dúvidas?** Consulte `SETUP.md` para instruções mais detalhadas.
