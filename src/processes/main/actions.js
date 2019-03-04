const window = require("electron").BrowserWindow;

export function commit(type, payload) {
  const args = {};
  if (typeof payload === "object") {
    args.type = type;
    args.payload = payload;
  }
  window.getFocusedWindow().webContents.send("commit", args);
}

export function dispatch(type, payload) {
  const args = {};

  if (typeof payload === "object") {
    args.type = type;
    args.payload = payload;
  }
  window.getFocusedWindow().webContents.send("dispatch", args);
}

export function getters(type, cb) {
  const args = {};

  args.type = type;
  window.getFocusedWindow().webContents.send("getter", args);
  cb();
  // TODO: bind another event listener
}
