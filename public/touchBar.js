const { TouchBar, ipcMain } = require('electron')

const { TouchBarButton, TouchBarSpacer } = TouchBar

let removeTaskBtn = null

const getTouchBarConfig = win => {
  const addTaskBtn = new TouchBarButton({
    label: 'Add Task',
    accessibilityLabel: 'Add task',
    backgroundColor: '#6ab04c',
    click: () => {
      win.webContents.send('add-task')
    },
  })

  removeTaskBtn = new TouchBarButton({
    label: 'Remove Task',
    accessibilityLabel: 'Remove Task',
    backgroundColor: '#c40000',
    enabled: false,
    click: () => {
      win.webContents.send('remove-task')
    },
  })

  const spacer = new TouchBarSpacer({ size: 'large' })

  return new TouchBar({ items: [addTaskBtn, spacer, removeTaskBtn] })
}

ipcMain.on('show-remove-btn', (_, name) => {
  removeTaskBtn.label = `Remove task: ${name}`
  removeTaskBtn.enabled = true
})

ipcMain.on('hide-remove-btn', () => {
  removeTaskBtn.label = 'Remove task'
  removeTaskBtn.enabled = false
})

exports.getTouchBarConfig = getTouchBarConfig
