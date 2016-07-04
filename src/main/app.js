import path from 'path';
import { app, BrowserWindow, Menu } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import WindowManager from './WindowManager';
import eventsManager from './events';
import menuTemplate from './config/menu';
import Platform from './lib/platform';

const windowManager = WindowManager.getSharedInstance();
eventsManager();

// Global reference of the window object
global.Buttercup = {
  config: {
    publicDir: `file://${path.resolve(__dirname, '../../dist')}`
  }
};

// Intro Screen
windowManager.setBuildProcedure('intro', () => {
  // Create the browser window.
  const introScreen = new BrowserWindow({
    'width': 700,
    'height': 500,
    'title-bar-style': 'hidden'
  });

  if (process.env.NODE_ENV === 'development') {
    introScreen.loadURL(`file://${path.resolve(__dirname, '../../dist/index.html')}`);
  } else {
    introScreen.loadURL(`file://${path.resolve(__dirname, './index.html')}`);
  }
  // introScreen.webContents.openDevTools();

  // Emitted when the window is closed.
  introScreen.on('closed', () => {
    // Deregister the intro screen
    windowManager.deregister(introScreen);
    if (windowManager.getCountOfType('archive') <= 0) {
      // No archives open, exit app
      app.quit();
    }
  });

  return introScreen;
});

const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer'); // eslint-disable global-require

    const forceDownload = Boolean(process.env.UPGRADE_EXTENSIONS);
    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ];

    for (const name of extensions) {
      try {
        await installer.default(installer[name], forceDownload); // eslint-disable-line babel/no-await-in-loop
      } catch (e) {} // eslint-disable-line xo/catch-error-name
    }
  }
};

// When user closes all windows
app.on('window-all-closed', () => {
  // Reopen the Intro window
  if (windowManager.getCountOfType('archive') <= 0) {
    windowManager.buildWindowOfType('intro');
  }
});

app.on('ready', async () => {
  await installExtensions();

  // Show intro
  windowManager.buildWindowOfType('intro');

  // Show standard menu
  if (Platform.isOSX()) {
    Menu.setApplicationMenu(
      Menu.buildFromTemplate(menuTemplate)
    );
  }
});