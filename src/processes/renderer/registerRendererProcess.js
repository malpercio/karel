import { ipcRenderer } from "electron";
import store from "@/store";

export function registerRendererProcess() {
  ipcRenderer.on("commit", (event, args) => {
    store.commit(args.type, args.payload);
  });
  ipcRenderer.on("dispatch", (event, args) => {
    store.dispatch(args.type, args.payload);
  });
  ipcRenderer.on("getters", () => {
    // const query = store.getters(args.type);
    // ipcRenderer.send("getters", )
    // TODO: Return an ansmer
  });
}
