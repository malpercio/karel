import createNamespace from "../utils/createNamespace";

export default createNamespace("editor", {
  actions: ["openMenu", "createCodeMirrorInstance", "createContextMenu"],
  getters: ["code", "codemirror"],
  mutations: ["setCode", "setCodeMirror", "setTheme"]
});
