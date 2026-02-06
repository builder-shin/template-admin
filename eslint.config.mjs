import nextConfig from 'eslint-config-next';

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'no-console': 'warn',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
];

export default eslintConfig;
