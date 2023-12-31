module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@src': './src/*',
            '@screens': "./src/screens/*",
            '@navigations': "./src/navigations/*",
            '@components': "./src/components/*",
          },
        },
      ],
    ],
  };
};
