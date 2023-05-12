import { app, BrowserWindow } from 'electron';

let win: BrowserWindow | null;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.webContents.openDevTools({ mode: 'bottom' });
  win.loadFile('dist/task-manager-app/index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
