import nextPlugin from '@eslint/eslintrc';
import nextConfig from 'eslint-config-next';

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
  ...nextPlugin.configs.recommended,
  ...nextConfig,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
];
