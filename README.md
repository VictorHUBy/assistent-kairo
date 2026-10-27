# Kairo

Kairo é um projeto em desenvolvimento para um companheiro digital de desktop: um pequeno dragão digital com personalidade própria. A experiência planejada é em português brasileiro e prioriza companhia, conversa e apoio a objetivos pessoais.

## Estado atual

O repositório está na fase inicial de estruturação. A árvore atual contém o pacote compartilhado `packages/shared/` e a documentação em `docs/`. As pastas de aplicação `apps/desktop`, `apps/renderer` e `apps/server` descritas no plano ainda não estão presentes na estrutura atual.

O pacote compartilhado exporta o schema `healthResponseSchema` e o tipo `HealthResponse`. Ainda não há rotas de API documentadas nem uma aplicação desktop completa que possa ser iniciada.

## Tecnologias presentes nos manifests

- TypeScript
- ESLint
- Prettier
- Zod, no pacote `@kairo/shared`

React, Vite, Electron, Express, SQLite e outras tecnologias constam como parte da arquitetura planejada em `docs/CONTEXTO.md`; não devem ser entendidas como uma aplicação completa já implementada.

## Configuração e verificações

Na raiz do repositório, instale as dependências com:

```bash
npm install
```

Os scripts declarados no `package.json` da raiz são:

```bash
npm run typecheck
npm run lint
npm run format:check
```

Esses comandos verificam tipos, lint e formatação. Eles não iniciam uma aplicação desktop.

## Estrutura atual relevante

- `packages/shared/`: pacote compartilhado com schemas Zod e tipos.
- `docs/CONTEXTO.md`: contexto, arquitetura planejada e registro do progresso.
- `package.json`: workspaces e scripts de verificação.

## Próximos passos planejados

A arquitetura descrita nos documentos prevê uma aplicação desktop com Electron, uma interface React, um servidor local e persistência local. Esses componentes ainda precisam ser implementados antes de documentar instruções de execução da aplicação final.

[ADICIONAR PRINT AQUI]
