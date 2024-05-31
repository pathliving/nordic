import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^next$': require.resolve('next'),
    '^next/navigation$': require.resolve('next/navigation'),
  },
};

export default createJestConfig(customJestConfig);
