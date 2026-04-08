/**
 * Electron main — starts Nest API (SQLite) then opens Admin + Client static builds.
 * Desktop bundle only; does not modify the main repo.
 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let backendProcess = null;

function getNodeExecutable() {
  if (process.env.npm_node_execpath) return process.env.npm_node_execpath;
  return process.platform === 'win32' ? 'node.exe' : 'node';
}

function startBackend() {
  const serverRoot = path.join(__dirname, 'server');
  const dbFile = path.join(serverRoot, 'prisma', 'dev.db');
  const dbUrl = 'file:' + dbFile.replace(/\\/g, '/');
  const mainJs = path.join(serverRoot, 'dist', 'src', 'main.js');

  backendProcess = spawn(getNodeExecutable(), [mainJs], {
    cwd: serverRoot,
    env: {
      ...process.env,
      DATABASE_URL: dbUrl,
      PORT: process.env.PORT || '3000',
    },
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  backendProcess.on('error', (err) => {
    console.error('Failed to start Nest backend:', err.message);
  });
}

function createWindows() {
  const adminWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { contextIsolation: true },
  });
  adminWindow.loadFile(path.join(__dirname, 'admin', 'dist', 'index.html'));

  const clientWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { contextIsolation: true },
  });
  clientWindow.loadFile(path.join(__dirname, 'client', 'dist', 'index.html'));
}

app.whenReady().then(() => {
  startBackend();
  // brief delay so Nest can bind :3000
  setTimeout(createWindows, 1500);
});

app.on('window-all-closed', () => {
  if (backendProcess && !backendProcess.killed) {
    backendProcess.kill();
    backendProcess = null;
  }
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  if (backendProcess && !backendProcess.killed) {
    backendProcess.kill();
    backendProcess = null;
  }
});
