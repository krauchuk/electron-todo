export default {
  appId: 'com.electron.yourtodoapp',
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
    productName: 'Your TODO',
    main: './build/main.js',
  },
}
