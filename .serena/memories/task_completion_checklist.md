# Task Completion Checklist

When completing any coding task, you MUST:

## Required Steps

1. **Run linting and formatting**: `pnpm lint:fix`
2. **Run type checking**: `pnpm typecheck`
3. **Verify no errors** in both commands above

## Quality Gates

- All ESLint rules must pass
- All Biome checks must pass
- All Prettier formatting must be applied
- All TypeScript type checks must pass
- No compilation errors

## Environment Specific

- For backend changes: Ensure Cloudflare type generation works: `cd apps/backend && pnpm cf-typegen`
- For database changes: Test migrations: `cd apps/backend && pnpm migrate:dev`

## Code Review Checklist

- Follow TypeScript best practices (no `any` types)
- Use arrow functions consistently
- Use named exports
- Add appropriate comments for code clarity
- Ensure functional programming principles are followed
