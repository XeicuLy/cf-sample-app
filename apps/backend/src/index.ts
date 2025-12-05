import { OpenAPIHono } from '@hono/zod-openapi';
import { auth } from './lib/better-auth';
import { corsMiddleware } from './middleware/cors';

const app = new OpenAPIHono<{
  Bindings: CloudflareBindings;
}>();

app.use('/*', corsMiddleware);

app.on(['GET', 'POST'], '/api/v1/auth/*', (c) => auth(c.env).handler(c.req.raw));

export default app;
