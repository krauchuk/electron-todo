export default {
  appId: 'com.electron.yourtodoapp',
  productName: 'Your-todo',
  files: ['./build/**/*'],
  directories: {
    buildResources: 'public',
  },
  mac: {
    target: 'dmg',
  },
  win: {
    target: 'nsis',
  },
  linux: {
    target: 'deb',
  },
  extraMetadata: {
    main: './build/main.js',
  },
}
