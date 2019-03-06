import {ipcMain,} from "electron";
import menus from "../../menus";

export default function registerMainProcess() {
  ipcMain.on("compile", () => {pass;});
  ipcMain.on("openMenu", (_, {menu = "main",}) => {
    const toToggle = menus[menu];

    if(toToggle){
      toToggle.popup();
    }
  });
}
