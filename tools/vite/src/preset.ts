// tools/vite-config/src/preset.ts
import { UserConfig, ConfigEnv } from 'vite';
import { getBaseViteConfig } from './index';
import { mergeConfig } from 'vite';
import { workspaceRoot } from '@nx/devkit';

export const getVitePreset = () => {
  return (configEnv: ConfigEnv): UserConfig => {
    const baseConfig = getBaseViteConfig();
    const rootConfig = mergeConfig(baseConfig, {
      root: workspaceRoot,
      // Add any NX-specific configurations here
    });

    return mergeConfig(rootConfig, {
      // You can add environment-specific configurations here
    });
  };
};