import {ipcRenderer,} from "electron";

export function openMenu(menu = "main") {
  ipcRenderer.send("openMenu", {menu,});
}
