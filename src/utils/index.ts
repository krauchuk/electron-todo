export const { ipcRenderer } = window.require
  ? window.require('electron')
  : {
      ipcRenderer: {
        on: () => undefined,
        once: () => undefined,
        send: () => undefined,
        removeAllListeners: () => undefined,
      },
    }
