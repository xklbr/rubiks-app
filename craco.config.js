const CracoAlias = require('craco-alias');

module.exports = {
  babel: {
    plugins: ['@babel/plugin-proposal-optional-chaining'],
  },
  eslint: {
    mode: 'file',
  },
  style: {
    postcss: {
      postcssOptions: {
        env: {
          autoprefixer: {
            cascade: true,
          },
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
