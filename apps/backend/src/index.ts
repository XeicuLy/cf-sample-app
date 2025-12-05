import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono } from '@hono/zod-openapi';
import { auth } from './lib/better-auth';
import { corsMiddleware } from './middleware/cors';
import { apiKeyAuthMiddleware } from './middleware/secret-key';
import { createSeedUserRouteHandler } from './routes/add-seed-user/post';

const app = new OpenAPIHono<{
  Bindings: CloudflareBindings;
}>();

app.use('/*', corsMiddleware);

app.on(['GET', 'POST'], '/api/v1/auth/*', (c) => auth(c.env).handler(c.req.raw));

app.use('/api/v1/secret/*', apiKeyAuthMiddleware);
export const routes = app.route('/', createSeedUserRouteHandler);

routes
  .doc('/api', {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
    },
  })
  .get(
    '/docs',
    swaggerUI<{ Bindings: CloudflareBindings }>({
      url: '/api',
    }),
  );

export type ApiType = typeof routes;

export default routes;
