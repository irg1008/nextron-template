import { app } from 'electron';
import log from 'electron-log';
import serve from 'electron-serve';
import { IpcEvent } from 'shared/src';
import { createWindow } from './helpers';
import { onHandle } from './lib/ipc/helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) serve({ directory: 'app' });
else app.setPath('userData', `${app.getPath('userData')} (development)`);

// Set app id on windows
if (process.platform === 'win32') app.setAppUserModelId(app.name);

const initWindow = async () => {
  const mainWindow = createWindow('main', {
    show: false,
    minWidth: 600,
    minHeight: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#00476b',
      symbolColor: '#ffffff',
      height: 30, // default windows: 32
    },
    backgroundColor: '#00476b',
    webPreferences: {
      devTools: !isProd,
    },
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.maximize();
  mainWindow.show();

  const mainPage = 'landing'; // Change for "home" or whatever your landing is
  if (isProd) await mainWindow.loadURL(`app://./${mainPage}.html`);
  else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/${mainPage}`);
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  return mainWindow;
};

const setUp = () => {
  log.info('Starting app');

  // Example of how to use ipcMain.handle
  onHandle(IpcEvent.EXAMPLE_EVENT, async (data) =>
    data === 'hello' ? 'Hello from the main process!' : '',
  );

  // handleDbError();
  initWindow();
};

// This is used to mantain single open window.

if (app.requestSingleInstanceLock()) app.on('ready', setUp);
else app.quit();

app.on('window-all-closed', () => {
  app.quit();
});
