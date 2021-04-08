const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#f99d3a',
              'body-background': '#FCFCFC',
              'border-radius-base': '6px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
