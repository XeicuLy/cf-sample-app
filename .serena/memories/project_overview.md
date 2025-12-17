# Project Overview

## Purpose

TanStack Start x Hono for Cloudflare Workers - A starter template for building web applications using TanStack Start (frontend) and Hono (backend) deployed on Cloudflare Workers.

## Tech Stack

- **Frontend**: TanStack Start
- **Backend**: Hono + TypeScript
- **Database**: D1 Database (Cloudflare)
- **Auth**: better-auth
- **ORM**: Drizzle ORM
- **Deployment**: Cloudflare Workers
- **Package Manager**: pnpm
- **Runtime**: Node.js 24.12.0

## Project Structure

- Monorepo structure with `/apps/frontend` and `/apps/backend`
- Backend uses Cloudflare Workers with D1 database
- Type definitions generated automatically by Wrangler
- Environment-specific configurations for preview and production
