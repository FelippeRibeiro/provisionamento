# 🚀 Guia de Configuração - Sistema de Provisionamento de Vendas

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18+ (https://nodejs.org/)
- **pnpm** (instale com: `npm install -g pnpm`)
- **PostgreSQL** 12+ (https://www.postgresql.org/)
- **VS Code** (https://code.visualstudio.com/)

## 📋 Passo 1: Extrair o Arquivo ZIP

1. Extraia o arquivo `sales_provisioning_system.zip`
2. Abra a pasta extraída no VS Code

## 🔧 Passo 2: Configurar Variáveis de Ambiente

### Backend (apps/api)

1. Abra o arquivo `apps/api/.env` (ou crie se não existir)
2. Preencha com as seguintes variáveis:

```env
# Database - Configure com seus dados do PostgreSQL
DATABASE_URL="postgresql://usuario:senha@localhost:5432/sales_provisioning"

# JWT - Gere uma string aleatória segura
JWT_SECRET="sua-chave-secreta-super-segura-aqui-mude-em-producao"

# API
API_PORT=3001
API_URL="http://localhost:3001"

# Frontend
FRONTEND_URL="http://localhost:3000"

# OpenAI (opcional - para recursos de IA)
OPENAI_API_KEY="sk-..."
```

### Frontend (apps/web)

1. Abra o arquivo `apps/web/.env.local` (ou crie se não existir)
2. Preencha com:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🗄️ Passo 3: Criar Banco de Dados PostgreSQL

### No PostgreSQL:

```sql
-- Criar banco de dados
CREATE DATABASE sales_provisioning;

-- Conectar ao banco
\c sales_provisioning
```

## 📦 Passo 4: Instalar Dependências

No terminal (na raiz do projeto):

```bash
pnpm install
```

## 🔄 Passo 5: Configurar Banco de Dados

Execute as migrações do Prisma:

```bash
pnpm db:push
```

## 🌱 Passo 6: Popular Banco de Dados (Opcional)

Para popular com dados de teste:

```bash
cd apps/api
pnpm db:seed
```

## ▶️ Passo 7: Iniciar os Servidores

Em dois terminais diferentes:

### Terminal 1 - Backend:
```bash
cd apps/api
pnpm dev
```

O backend estará em: `http://localhost:3001`

### Terminal 2 - Frontend:
```bash
cd apps/web
pnpm dev
```

O frontend estará em: `http://localhost:3000`

## 🔐 Passo 8: Fazer Login

Acesse `http://localhost:3000` e use os botões de **Login Rápido** para testar:

- **Admin Geral**: Clique no botão "Admin Geral"
- **Coordenador**: Clique no botão "Coordenador"
- **Vendedor**: Clique no botão "Vendedor"

## 📁 Estrutura do Projeto

```
sales_provisioning_system/
├── apps/
│   ├── web/              # Frontend (Next.js 14+)
│   │   ├── src/
│   │   │   ├── app/      # Páginas e layouts
│   │   │   ├── components/
│   │   │   ├── services/ # Serviços de API
│   │   │   └── ...
│   │   └── package.json
│   │
│   └── api/              # Backend (Next.js 14+ API Routes)
│       ├── src/
│       │   ├── app/api/  # Rotas de API
│       │   ├── middleware/
│       │   └── ...
│       ├── prisma/       # Schema e migrações
│       └── package.json
│
├── packages/
│   └── shared/           # Tipos compartilhados
│
├── pnpm-workspace.yaml   # Configuração monorepo
├── package.json          # Root package
└── README.md
```

## 🛠️ Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Iniciar desenvolvimento (todos os apps)
pnpm dev

# Build para produção
pnpm build

# Iniciar em produção
pnpm start

# Gerenciar banco de dados
pnpm db:push          # Aplicar migrações
pnpm db:generate      # Gerar cliente Prisma
pnpm db:migrate       # Criar nova migração
pnpm db:seed          # Popular com dados de teste
```

## 🔑 Credenciais de Teste

Após fazer login rápido, você terá acesso como:

| Papel | Email | Senha |
|-------|-------|-------|
| Admin | admin@test.com | admin123 |
| Coordenador | coordinator@test.com | coord123 |
| Vendedor | seller@test.com | seller123 |

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
# Limpe e reinstale
rm -rf node_modules
pnpm install
```

### Erro: "Database connection failed"
- Verifique se PostgreSQL está rodando
- Confirme a string DATABASE_URL está correta
- Verifique usuário e senha do PostgreSQL

### Erro: "Port 3000 or 3001 already in use"
```bash
# Mude as portas em:
# apps/web/package.json (dev script)
# apps/api/package.json (dev script)
```

### Erro: "Prisma Client not found"
```bash
cd apps/api
pnpm prisma generate
```

## 📚 Documentação Adicional

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [JWT Docs](https://jwt.io/)

## 🚀 Próximos Passos

1. Explore o dashboard em `http://localhost:3000/dashboard`
2. Teste os diferentes papéis (Admin, Coordenador, Vendedor)
3. Comece a implementar as funcionalidades conforme o `todo.md`

## 💡 Dicas

- Use o VS Code com as extensões: Prisma, ES7+ React/Redux/React-Native snippets
- Consulte o arquivo `todo.md` para ver o progresso das funcionalidades
- Todos os arquivos de API estão em `apps/api/src/app/api/`
- Todos os componentes do frontend estão em `apps/web/src/`

## ❓ Suporte

Se encontrar problemas, verifique:
1. Se todas as dependências foram instaladas (`pnpm install`)
2. Se o PostgreSQL está rodando
3. Se as variáveis de ambiente estão configuradas corretamente
4. Os logs do terminal para mensagens de erro específicas

---

**Boa sorte! 🎉**
