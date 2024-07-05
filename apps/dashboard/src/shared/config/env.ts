import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  shared: {
    HOST_URL: z.string().url(),
    PORT: z.coerce.number().optional().default(3000),
  },
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_DEFAULT_THEME: z.enum(['dark', 'light']).default('dark'),
  },
  runtimeEnv: {
    HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
    PORT: process.env.PORT,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DEFAULT_THEME: process.env.NEXT_PUBLIC_DEFAULT_THEME,
    NODE_ENV: process.env.NODE_ENV,
  },
});
