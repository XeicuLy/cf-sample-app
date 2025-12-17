// NOTE: Hono RPCを使用する都合、`apps/backend/worker-configuration.d.ts`の`Cloudflare.Env`と同じ内容を記載する
declare namespace Cloudflare {
	interface Env {
		BACKEND_URL: "http://localhost:8787" | "https://cf-sample-app-backend-preview.xeiculy-account.workers.dev" | "https://cf-sample-app-backend-production.xeiculy-account.workers.dev";
		FRONTEND_URL: "http://localhost:3000" | "https://cf-sample-app-frontend-preview.xeiculy-account.workers.dev" | "https://cf-sample-app-frontend-production.xeiculy-account.workers.dev";
		crossSubDomainCookies: "localhost" | ".xeiculy-account.workers.dev";
		BETTER_AUTH_SECRET: string;
		SECRET_KEY: string;
		DB: D1Database;
	}
}

interface CloudflareEnv extends Cloudflare.Env {}
