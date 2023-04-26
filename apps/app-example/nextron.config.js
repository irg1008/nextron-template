const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  // specify an alternate renderer src directory, defaults to 'renderer'
  rendererSrcDir: 'src/renderer',

  webpack: (config) =>
    Object.assign(config, {
      entry: {
        background: './src/main/background.ts',
        preload: './src/main/preload.ts',
      },
    }),
};
