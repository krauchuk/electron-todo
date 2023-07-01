export const { ipcRenderer } = window.require ? window.require('electron') : { ipcRenderer: { on: () => {} } }
