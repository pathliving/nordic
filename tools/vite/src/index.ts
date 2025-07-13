import { defineConfig, UserConfig } from 'vite';

// Minimal base config for Vite
export function getBaseViteConfig(): UserConfig {
  return defineConfig({});
}

export * from './preset';
