const { app, BrowserWindow, globalShortcut} = require('electron')
const config = require('./config')

let win

function createWindow () {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      titleBarStyle: 'hidden',
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    win.loadURL(config.url)
  }

  function toggleDevTools() {
    win.webContents.toggleDevTools()
  }

  function changeURL(id) {
    for(let i = 0; i <= 8; i++){
      if(id == 9){
        win.loadURL('https://google.com')
        return
      }
      else if(i == id){
        win.loadURL('http://localhost:300' + id)
        return
      }
    }
  }

  function createShortcuts() {
    globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
    globalShortcut.register('CmdOrCtrl+0', () => changeURL(0))
    globalShortcut.register('CmdOrCtrl+1', () => changeURL(1))
    globalShortcut.register('CmdOrCtrl+2', () => changeURL(2))
    globalShortcut.register('CmdOrCtrl+3', () => changeURL(3))
    globalShortcut.register('CmdOrCtrl+4', () => changeURL(4))
    globalShortcut.register('CmdOrCtrl+5', () => changeURL(5))
    globalShortcut.register('CmdOrCtrl+6', () => changeURL(6))
    globalShortcut.register('CmdOrCtrl+7', () => changeURL(7))
    globalShortcut.register('CmdOrCtrl+8', () => changeURL(8))
    globalShortcut.register('CmdOrCtrl+9', () => changeURL(9))
  }
  
  app.whenReady().then(createWindow).then(createShortcuts)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })