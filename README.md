# Sistema de Provisionamento de Vendas

Um sistema completo de gerenciamento de vendas com dashboards, métricas e previsões de receita para empresas com múltiplas regiões.

## 🏗️ Arquitetura

Projeto monorepo com a seguinte estrutura:

```
sales_provisioning_system/
├── apps/
│   ├── web/          # Frontend (Next.js 14+ App Router)
│   └── api/          # Backend (Next.js 14+ API Routes)
├── packages/
│   └── shared/       # Tipos e constantes compartilhadas
└── pnpm-workspace.yaml
```

## 🚀 Tecnologias

- **Frontend**: Next.js 14+, React 18, Tailwind CSS, Recharts
- **Backend**: Next.js 14+ API Routes, Prisma, PostgreSQL
- **Autenticação**: JWT com localStorage
- **IA**: Integração com OpenAI para análise de dados
- **Relatórios**: jsPDF para geração de PDFs

## 📋 Funcionalidades

### Admin Geral
- Cadastro e gerenciamento de coordenadores
- Atribuição de múltiplas regiões aos coordenadores
- Dashboard com métricas gerais do sistema
- Filtros por região e período
- Visualização de todos os vendedores e empresas
- Alertas de novos cadastros

### Coordenador
- Gerenciamento de vendedores
- Cadastro de empresas
- Dashboard com métricas da equipe
- Visualização de pedidos
- Previsão de vendas por empresa

### Vendedor
- Cadastro de empresas (clientes)
- Realização de pedidos
- Acompanhamento de pedidos
- Dashboard pessoal

## 🛠️ Setup Local

### Pré-requisitos
- Node.js 18+
- pnpm
- PostgreSQL

### Instalação

1. Clone o repositório
```bash
git clone <repo-url>
cd sales_provisioning_system
```

2. Instale as dependências
```bash
pnpm install
```

3. Configure as variáveis de ambiente
```bash
cp apps/api/.env.example apps/api/.env
# Edite o arquivo .env com suas configurações
```

4. Configure o banco de dados
```bash
pnpm db:push
```

5. Inicie os servidores
```bash
pnpm dev
```

O frontend estará disponível em `http://localhost:3000`
O backend estará disponível em `http://localhost:3001`

## 📚 Estrutura de Pastas

### apps/web
```
src/
├── app/                # Next.js App Router
├── components/         # Componentes React
├── hooks/             # Custom hooks
├── services/          # Serviços de API
├── types/             # Tipos TypeScript
└── utils/             # Utilitários
```

### apps/api
```
src/
├── app/api/          # API Routes
├── lib/              # Utilitários
├── middleware/       # Middlewares
└── utils/            # Funções auxiliares
prisma/
├── schema.prisma     # Schema do banco
└── migrations/       # Migrações
```

## 🔐 Autenticação

O sistema usa JWT armazenado em localStorage. O fluxo de autenticação:

1. Usuário faz login com email e senha
2. Backend valida credenciais e retorna JWT
3. Frontend armazena JWT em localStorage
4. JWT é enviado em cada requisição (header Authorization)
5. Backend valida JWT e autoriza a ação

## 📊 Banco de Dados

O sistema usa PostgreSQL com Prisma ORM. As principais tabelas são:

- **users**: Usuários do sistema
- **regions**: Regiões/Estados
- **coordinators**: Coordenadores de vendas
- **sellers**: Vendedores
- **companies**: Empresas/Clientes
- **products**: Produtos
- **orders**: Pedidos
- **forecasts**: Previsões de vendas
- **notifications**: Notificações

## 🤖 Integração com IA

O sistema integra OpenAI para:
- Análise de dados de vendas
- Geração de insights
- Recomendações automáticas

## 📄 Geração de Relatórios

Relatórios em PDF podem ser gerados com:
- Dados por região
- Dados por coordenador
- Dados por vendedor
- Gráficos e visualizações

## 🧪 Testes

```bash
# Testes unitários
pnpm test

# Testes de integração
pnpm test:integration

# Coverage
pnpm test:coverage
```

## 📝 Licença

MIT

## 👥 Suporte

Para suporte, entre em contato através do email ou abra uma issue no repositório.
