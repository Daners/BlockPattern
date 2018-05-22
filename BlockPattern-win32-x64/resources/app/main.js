const { app, BrowserWindow ,Tray} = require('electron')

let win;
let appIcon;

function createWindow () {
  // Create the browser window.
  //
    //appIcon = new Tray( __dirname + '/dist/assets/icons/win/icon.ico')
console.log( __dirname + '/dist/assets/icons/win/icon.ico');

  win = new BrowserWindow({
     title: "",
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon:  __dirname + '/dist/angular-electron/assets/logo.png'
  })




  win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
