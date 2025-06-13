module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/constants': './src/constants',
          '@/hooks': './src/hooks',
          '@/navigation': './src/navigation',
          '@/resources': './src/resources',
          '@/screens': './src/screens',
          '@/state': './src/state',
          '@/types': './src/types',
          '@/utils': './src/utils',
          '@/mocks': './src/mocks',
          '@/providers': './src/providers',
        },
      },
    ],
  ],
};
