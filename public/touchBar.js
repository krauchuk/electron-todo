const { TouchBar, ipcMain } = require('electron')

const { TouchBarButton, TouchBarSpacer } = TouchBar

const getTouchBarConfig = win => {
  const addTaskBtn = new TouchBarButton({
    label: 'Add Task',
    accessibilityLabel: 'Add task',
    backgroundColor: '#6ab04c',
    click: () => {
      win.webContents.send('add-task')
    },
  })

  const removeTaskBtn = new TouchBarButton({
    label: 'Remove Task',
    accessibilityLabel: 'Remove Task',
    backgroundColor: '#c40000',
    click: () => {
      win.webContents.send('remove-task')
    },
  })

  const spacer = new TouchBarSpacer({ size: 'large' })

  return new TouchBar({ items: [addTaskBtn, spacer, removeTaskBtn] })
}

exports.getTouchBarConfig = getTouchBarConfig
