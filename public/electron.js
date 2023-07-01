const path = require('path')
const { app, BrowserWindow, TouchBar } = require('electron')

const { TouchBarButton } = TouchBar

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  })

  if (process.platform === 'darwin') {
    const touchBar = new TouchBar({
      items: [
        new TouchBarButton({
          label: 'Add Task',
          accessibilityLabel: 'Add task',
          backgroundColor: '#6ab04c',
          click: () => {
            win.webContents.send('add-task')
          },
        }),
      ],
    })

    win.setTouchBar(touchBar)
  }

  win.loadURL(!app.isPackaged ? 'http://localhost:3000' : `file://${path.join(__dirname, 'index.html')}`)

  if (!app.isPackaged) {
    win.webContents.openDevTools()
  }
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
