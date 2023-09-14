export default {
  '*.md': ['pnpm remark:fix', 'pnpm format'],
  '*.{mjs,js,ts,tsx,json,yaml}': 'pnpm format',
  '*.{mjs,js,ts,tsx}': 'pnpm lint',
};
