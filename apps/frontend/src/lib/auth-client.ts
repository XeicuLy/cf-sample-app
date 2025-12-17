import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  basePath: '/api/v1/auth',
});

export const { signIn, signUp, signOut, getSession, useSession } = authClient;
