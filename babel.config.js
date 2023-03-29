module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.bin'],
        alias: {
          '@constants': './src/constants',
          '@navigators': './src/navigators',
          '@services': './src/services',
          '@views': './src/views',
          '@interfaces': './src/interfaces',
          '@components': './src/components',
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
