import { defineConfig } from 'eslint';

export default defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'  // Detecta automáticamente la versión de React
    }
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',  // React 17+ no necesita React en el alcance
    'react/jsx-uses-react': 'off',      // Para la nueva transformación JSX
    'no-unused-vars': 'warn',           // Advertir sobre variables no utilizadas
    'no-console': 'warn',               // Advertir sobre la utilización de console.log
    '@typescript-eslint/no-unused-vars': ['warn'],  // Advertir sobre variables TS no utilizadas
    '@typescript-eslint/no-explicit-any': 'off'    // Permite el uso de `any`
  }
});
