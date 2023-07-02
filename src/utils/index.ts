export const { ipcRenderer } = window.require
  ? window.require('electron')
  : {
      ipcRenderer: {
        on: () => {},
        once: () => {},
        send: () => {},
        removeAllListeners: () => {},
      },
    }
