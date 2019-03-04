import { remote } from "electron";
import editorMenuTemplate from "@/menus/editor";
import types from "@/types/editor";
import CodeMirror from "codemirror";
const { Menu } = remote;
const state = {
  code: "",
  codemirror: null
};
const actions = {
  [types.actions.openMenu]: (_, { menu }) => {
    menu.popup(remote.getCurrentWindow());
  },
  [types.actions.createCodeMirrorInstance]: ({ commit }, options) => {
    const editor = CodeMirror.fromTextArea(
      document.getElementById("editor"),
      options
    );
    commit(types.mutations.setCodeMirror, { value: editor });
  },
  [types.actions.createContextMenu]: ({ getters, dispatch }) => {
    const menu = Menu.buildFromTemplate(editorMenuTemplate);

    getters[types.getters.codemirror].on("contextmenu", () => {
      dispatch(types.actions.openMenu, { menu });
    });
  }
};
const getters = {
  [types.getters.code]: ({ code }) => code,
  [types.getters.codemirror]: ({ codemirror }) => codemirror
};
const mutations = {
  [types.mutations.setCode]: (state, { value }) => (state.code = value),
  [types.mutations.setCodeMirror]: (state, { value }) =>
    (state.codemirror = value),
  [types.mutations.setTheme]: ({ codemirror }, { theme }) => {
    require(`codemirror/theme/${theme}.css`);
    codemirror.setOption("theme", theme);
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
