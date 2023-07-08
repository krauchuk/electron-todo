/* eslint-env node */

const { TouchBar, ipcMain } = require('electron')
const { TouchBarButton, TouchBarSpacer } = TouchBar

const { ADD_NEW_TASK, REMOVE_TASK, SHOW_REMOVE_BTN, HIDE_REMOVE_BTN } = require('../const')

const getTouchBarConfig = win => {
  const addTaskBtn = new TouchBarButton({
    label: 'Add Task',
    accessibilityLabel: 'Add task',
    backgroundColor: '#6ab04c',
    click: () => {
      win.webContents.send(ADD_NEW_TASK)
    },
  })

  const removeTaskBtn = new TouchBarButton({
    label: 'Remove Task',
    accessibilityLabel: 'Remove Task',
    backgroundColor: '#c40000',
    enabled: false,
    click: () => {
      win.webContents.send(REMOVE_TASK)
    },
  })

  const spacer = new TouchBarSpacer({ size: 'large' })

  ipcMain.on(SHOW_REMOVE_BTN, (_, name) => {
    removeTaskBtn.label = `Remove task: ${name}`
    removeTaskBtn.enabled = true
  })

  ipcMain.on(HIDE_REMOVE_BTN, () => {
    removeTaskBtn.label = 'Remove task'
    removeTaskBtn.enabled = false
  })

  return new TouchBar({ items: [addTaskBtn, spacer, removeTaskBtn] })
}

exports.getTouchBarConfig = getTouchBarConfig
