# Suggested Commands

## Development Commands

- `pnpm dev`: Start all development servers
- `pnpm dev:frontend`: Start only frontend development server
- `pnpm dev:backend`: Start only backend development server

## Code Quality Commands (Most Important)

- `pnpm lint:fix`: Fix all linting issues (ESLint + Biome + Prettier)
- `pnpm typecheck`: Run TypeScript type checking across all apps
- `pnpm eslint:fix`: Fix ESLint issues only
- `pnpm biome:fix`: Fix Biome issues only
- `pnpm prettier:fix`: Fix Prettier formatting only

## Individual Quality Checks

- `pnpm eslint`: Check ESLint issues without fixing
- `pnpm biome`: Check Biome issues without fixing
- `pnpm prettier`: Check Prettier formatting without fixing
- `pnpm lint`: Run all quality checks without fixing

## Backend Specific Commands

- `cd apps/backend && pnpm cf-typegen`: Generate Cloudflare type definitions
- `cd apps/backend && pnpm migrate:dev`: Apply D1 database migrations locally
- `cd apps/backend && pnpm deploy:preview`: Deploy to preview environment
- `cd apps/backend && pnpm deploy:production`: Deploy to production

## System Commands (macOS)

- `ls`: List files and directories
- `cd`: Change directory
- `grep`: Search text patterns
- `find`: Find files
- `git`: Git version control
