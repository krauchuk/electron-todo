/* eslint-env node */

const { Menu, app } = require('electron')

const { ADD_NEW_TASK } = require('../const')

const getMainMenu = win => {
  const items = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Task',
          click() {
            win.webContents.send(ADD_NEW_TASK)
          },
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Developer Tools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click(item, focusedWindow) {
            if (focusedWindow) focusedWindow.webContents.toggleDevTools()
          },
          visible: !app.isPackaged,
        },
        {
          type: 'separator',
          visible: !app.isPackaged,
        },
        {
          role: 'togglefullscreen',
        },
      ],
    },
    {
      role: 'window',
      submenu: [
        {
          role: 'minimize',
        },
        {
          role: 'close',
        },
      ],
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click() {
            require('electron').shell.openExternal('https://github.com/krauchuk/electron-todo')
          },
        },
      ],
    },
  ]

  if (process.platform === 'darwin') {
    const name = app.getName()

    items.unshift({
      label: name,
      submenu: [
        {
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          role: 'quit',
        },
      ],
    })
  }

  return Menu.buildFromTemplate(items)
}

exports.getMainMenu = getMainMenu
