const base = require('tailwind-config/postcss.config');

module.exports = {
  ...base,
  plugins: {
    ...base.plugins,
    tailwindcss: {
      config: './src/renderer/tailwind.config.js',
    },
  },
};
