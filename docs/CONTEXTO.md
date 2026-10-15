# Kairo — Contexto do projeto

Companheiro digital pessoal em forma de pequeno dragão digital, como app desktop.
Personalidade: 70% companheiro, 20% assistente, 10% mentor. Idioma: pt-BR.
Recursos finais: chat, voz, memória, objetivos, histórico, perfil, pensamentos ocasionais.

## Stack
React, TypeScript, Vite, Electron, Node.js, Express, SQLite (better-sqlite3), Tailwind, shadcn/ui, Zod, TanStack Query, Zustand, Vitest. Plataforma-alvo: Windows.

## Arquitetura
- O Electron (main) sobe o server Express como processo filho em 127.0.0.1, porta livre e token por sessão.
- O renderer (React) fala com o server por HTTP e SSE (chat em streaming).
- Dados em SQLite local, com migrações SQL numeradas.
- O LLM fica atrás de uma interface `AIProvider` (Claude por padrão). Nos testes, sempre um provider fake.
- A chave da API fica no `safeStorage` do Electron e nunca vai ao renderer nem aos logs.

## Estrutura
```
kairo/
├─ apps/
│  ├─ desktop/   (D/ = apps/desktop/src/)   main, preload, tray, atalhos
│  ├─ renderer/  (R/ = apps/renderer/src/)  components, features/*, lib, styles
│  └─ server/    (S/ = apps/server/src/)    modules/*, ai, persona, jobs, db
├─ packages/shared/  (P/ = packages/shared/src/)  schemas Zod + tipos (@kairo/shared)
└─ docs/  CONTEXTO.md, reference/kairo.html (referência visual: não editar)
```
`migrations/` = `S/db/migrations/`

## Convenções
- Server: `modules/<nome>/{routes,service,repo}.ts`. A rota valida com Zod, o service tem a regra, o repo só faz SQL.
- Schemas Zod ficam em `packages/shared`; o mesmo schema valida no server e vira tipo no renderer.
- Estados do dragão: idle, listening, thinking, talking, happy, sleepy.
- Cada tarefa termina com `typecheck`, `lint` e `test` verdes e um commit com o ID da tarefa.

## Estado atual (atualizar ao fim de cada tarefa)

### Tarefas concluídas
T01: monorepo e tooling (package.json com workspaces apps/* e packages/*, tsconfig.base.json, .gitignore, .editorconfig, eslint.config.js, .prettierrc)
T02: pacote shared (`@kairo/shared` com Zod)

### Rotas da API
(nenhuma)

### Schemas e tipos
`healthResponseSchema` / tipo `HealthResponse`

### Arquivos criados
package.json, tsconfig.base.json, .gitignore, .editorconfig, eslint.config.js, .prettierrc
packages/shared/package.json, packages/shared/tsconfig.json, packages/shared/src/index.ts, packages/shared/src/schemas/health.ts
