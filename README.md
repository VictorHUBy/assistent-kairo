# Kairo

Kairo é um projeto em desenvolvimento de um companheiro digital para desktop: um pequeno dragão digital com personalidade própria, pensado para ser companheiro antes de ser assistente.

A ideia é reunir conversa, memória, objetivos e interações em uma experiência simples para Windows, com interface em português brasileiro. O projeto ainda está em fase inicial; os recursos descritos são objetivos de desenvolvimento, não funcionalidades já concluídas.

## Visão do projeto

- **Personalidade:** curioso, confiável, amigável e levemente brincalhão.
- **Experiência:** um companheiro digital, não apenas uma interface de comandos.
- **Recursos planejados:** chat, voz, memória, objetivos, histórico e pensamentos ocasionais.
- **Plataforma-alvo:** Windows.

## Tecnologias planejadas

- React e TypeScript
- Vite e Electron
- Node.js e Express
- SQLite com better-sqlite3
- Tailwind CSS e shadcn/ui
- Zod, TanStack Query e Zustand
- Vitest para testes

## Arquitetura planejada

- O processo principal do Electron inicia o servidor local.
- A interface React se comunica com o servidor por HTTP e eventos enviados pelo servidor (SSE).
- Os dados ficam em um banco SQLite local.
- O provedor de IA fica isolado atrás de uma interface, para facilitar testes e futuras integrações.
- Segredos e chaves de API não devem ser expostos à interface nem gravados em logs.

## Estrutura do repositório

```text
apps/
  desktop/    # Aplicação Electron
  renderer/   # Interface React
  server/     # API e lógica do servidor
packages/
  shared/     # Tipos e schemas compartilhados
docs/         # Contexto e decisões do projeto
```

## Estado atual

O repositório está na fase de estruturação do monorepo e das ferramentas de desenvolvimento. A documentação de contexto em [docs/CONTEXTO.md](docs/CONTEXTO.md) registra a arquitetura, as convenções e o progresso das tarefas.

## Objetivo

Construir o projeto de forma incremental, mantendo tipos compartilhados, validação, testes e separação clara entre interface, servidor e persistência.
