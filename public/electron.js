const path = require('path')
const { app, BrowserWindow } = require('electron')

const { getTouchBarConfig } = require('./touchBar.js')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
    show: false,
  })

  if (process.platform === 'darwin') {
    const touchBar = getTouchBarConfig(win)
    win.setTouchBar(touchBar)
  }

  win.loadURL(!app.isPackaged ? 'http://localhost:3000' : `file://${path.join(__dirname, 'index.html')}`)

  if (!app.isPackaged) {
    win.webContents.openDevTools()
  }

  win.once('ready-to-show', () => {
    win.show()
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
