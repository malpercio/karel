import { ipcMain } from "electron";

export default function registerMainProcess() {
  ipcMain.on("compile", () => {});
}
