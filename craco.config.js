module.exports = {
  babel: {
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@templates': './src/components/templates',
            '@pages': './src/components/pages',
            '@config': './src/config',
            '@locale': './src/locale',
            '@routes': './src/routes',
            '@store': './src/store',
            '@utils': './src/utils',
            '@hocs': './src/hocs',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@styles': './src/styles',
            '@constants': './src/constants',
            '@root': './src',
          },
        },
      ],
    ],
  },
};
