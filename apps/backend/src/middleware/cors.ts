import { cors } from 'hono/cors';

export const corsMiddleware = cors({
  origin: (origin) => {
    if (!origin) {
      return null;
    }
    const ALLOWED_ORIGINS = [
      'http://localhost:3000',
      'https://cf-sample-app-frontend-preview.xeiculy-account.workers.dev',
      'https://cf-sample-app-frontend-production.xeiculy-account.workers.dev',
    ];

    if (ALLOWED_ORIGINS.includes(origin)) {
      return origin;
    }
    return null;
  },
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowHeaders: ['Content-Type', 'Authorization', 'credentials', 'User-Agent'],
  credentials: true,
});
