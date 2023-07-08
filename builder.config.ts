export default {
  appId: 'com.electron.yourtodoapp',
  productName: 'Your TODO',
  files: ['./build/**/*'],
  mac: {
    target: 'dmg',
    icon: './build/icons/icon.icns',
  },
  win: {
    target: 'nsis',
    icon: './build/icons/icon.ico',
  },
  linux: {
    target: 'deb',
    icon: './build/icons/icon.png',
  },
  extraMetadata: {
    main: './build/main.js',
  },
}
