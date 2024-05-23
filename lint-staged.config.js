const config = {
  '*.{js, jsx,ts,tsx}': ['npm run prettier:fix', 'npm run eslint:fix'],
  '*.{json,js,ts,jsx,tsx,html,md}': 'npm run prettier:fix',
};

export default config;
