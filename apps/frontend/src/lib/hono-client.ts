import type { ApiType } from 'backend';
import type { InferRequestType, InferResponseType } from 'hono/client';
import { hc } from 'hono/client';

const client = (baseUrl: string) =>
  hc<ApiType>(baseUrl, {
    init: {
      credentials: 'include',
    },
  }).api.v1;

export const $getHello = client(import.meta.env.VITE_BACKEND_URL).secure.hello.$post;

export type GetHelloRequest = InferRequestType<typeof $getHello>;
export type GetHelloResponse = InferResponseType<typeof $getHello>;
