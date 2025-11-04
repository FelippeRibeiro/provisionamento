# Sistema de Provisionamento de Vendas - TODO

## Arquitetura e Banco de Dados
- [x] Definir estrutura monorepo (apps/web, apps/api, packages/shared)
- [x] Criar schema Prisma com PostgreSQL
- [x] Configurar tipos compartilhados
- [ ] Executar migrações do banco de dados
- [ ] Executar seed data para testes

## Autenticação e Hierarquia de Usuários
- [x] Criar API route de login
- [x] Criar API route de quick-login para testes
- [x] Implementar middleware de autenticação JWT
- [x] Página de login com botões de teste rápido
- [ ] Proteger rotas por role
- [ ] Implementar logout
- [ ] Criar página de perfil do usuário

## Admin Geral - Funcionalidades
- [ ] Página de cadastro de coordenadores
- [ ] Página de atribuição de regiões aos coordenadores
- [ ] Dashboard admin com métricas gerais
- [ ] Filtros por região e período no dashboard
- [ ] Página de listagem de vendedores
- [ ] Página de listagem de empresas
- [ ] Sistema de alertas de novos cadastros

## Coordenador - Funcionalidades
- [ ] Página de visualização de regiões
- [ ] Página de cadastro de vendedores
- [ ] Página de cadastro de empresas
- [ ] Dashboard coordenador com métricas da equipe
- [ ] Visualização de métricas das empresas por região
- [ ] Página de visualização de pedidos
- [ ] Sistema de alertas de novos cadastros

## Vendedor - Funcionalidades
- [ ] Página de cadastro de empresas
- [ ] Dashboard vendedor com empresas cadastradas
- [ ] Página de realização de pedidos
- [ ] Página de visualização de pedidos realizados
- [ ] Acompanhamento de status dos pedidos

## Gestão de Regiões
- [ ] API route para criar/editar/deletar regiões
- [ ] Página de listagem de regiões
- [ ] Página de atribuição de coordenadores a regiões

## Gestão de Empresas
- [ ] API route para cadastro de empresas
- [ ] API route para editar informações de empresas
- [ ] Página de visualização de empresas por região
- [ ] Página de visualização de empresas por vendedor
- [ ] Sistema de alertas de novos cadastros

## Gestão de Produtos
- [ ] Página de produtos
- [ ] API route para listar produtos
- [ ] API route para adicionar produtos (Admin)
- [ ] API route para editar produtos (Admin)
- [ ] API route para deletar produtos (Admin)

## Sistema de Pedidos
- [ ] API route para criar pedidos
- [ ] API route para visualizar pedidos
- [ ] API route para atualizar status de pedidos
- [ ] Página de histórico de pedidos
- [ ] Filtros de pedidos por período

## Métricas e Dashboards
- [ ] Dashboard Admin: métricas gerais
- [ ] Dashboard Admin: métricas por região
- [ ] Dashboard Admin: métricas por coordenador
- [ ] Dashboard Coordenador: métricas da equipe
- [ ] Dashboard Coordenador: empresas da região
- [ ] Dashboard Vendedor: empresas cadastradas
- [ ] Dashboard Vendedor: pedidos realizados
- [ ] Gráficos de vendas (receita, quantidade de pedidos)
- [ ] Filtros por período (mês, trimestre, ano)
- [ ] Dados do mês atual por padrão

## Relatórios e Exportação
- [ ] API route para gerar relatórios em PDF
- [ ] Página de geração de relatórios
- [ ] Relatórios por região
- [ ] Relatórios por coordenador
- [ ] Relatórios por vendedor
- [ ] Visualização de gráficos em diferentes formatos

## Integração com IA
- [ ] Integrar OpenAI para análise de dados
- [ ] IA para análise de dados de vendas
- [ ] IA para gerar insights e recomendações
- [ ] IA para sugerir próximas ações
- [ ] Chat com assistente de IA

## Notificações
- [ ] API route para criar notificações
- [ ] API route para listar notificações do usuário
- [ ] API route para marcar notificação como lida
- [ ] Notificações de novos cadastros
- [ ] Notificações de novos pedidos
- [ ] Notificações para coordenadores quando vendedor cadastra empresa
- [ ] Notificações para admin quando há novos cadastros

## Previsões de Vendas
- [ ] API route para criar previsões
- [ ] API route para listar previsões
- [ ] Página de gerenciamento de previsões
- [ ] Cálculo de previsões por empresa
- [ ] Cálculo de previsões por coordenador
- [ ] Cálculo de previsões por região

## Interface e UX
- [ ] Design responsivo com Tailwind CSS
- [ ] Animações e transições visuais
- [ ] Layout com sidebar para navegação
- [ ] Componentes reutilizáveis
- [ ] Página 404
- [ ] Loading states e skeletons
- [ ] Validação de formulários
- [ ] Toast notifications
- [ ] Modais de confirmação

## Testes e Qualidade
- [ ] Testar autenticação
- [ ] Testar fluxos de cadastro
- [ ] Testar dashboards e métricas
- [ ] Testar geração de relatórios
- [ ] Testar integração com IA

## Documentação
- [ ] Criar userGuide.md
- [ ] Documentar estrutura do projeto
- [ ] Documentar como rodar localmente
- [ ] Documentar APIs
- [ ] Documentar variáveis de ambiente
