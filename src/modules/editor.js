import types from "@/types/editor";
import CodeMirror from "codemirror";
import "../catalogues/themes";
import {openMenu,} from "@/processes/renderer/actions";

const state = {
  code: "",
  codemirror: null,
};
const actions = {
  [types.actions.openMenu]: () => {
    openMenu("editor");
  },
  [types.actions.createCodeMirrorInstance]: ({commit,}, options) => {
    const editor = CodeMirror.fromTextArea(
      document.getElementById("editor"),
      options
    );

    commit(types.mutations.setCodeMirror, {value: editor,});
  },
  [types.actions.createContextMenu]: ({getters, dispatch,}) => {
    getters[types.getters.codemirror].on("contextmenu", () => {
      dispatch(types.actions.openMenu);
    });
  },
};
const getters = {
  [types.getters.code]: ({code,}) => code,
  [types.getters.codemirror]: ({codemirror,}) => codemirror,
};
const mutations = {
  [types.mutations.setCode]: (state, {value,}) => {state.code = value;},
  [types.mutations.setCodeMirror]: (state, {value,}) => {state.codemirror = value;},
  [types.mutations.setTheme]: ({codemirror,}, {theme,}) => {
    require(`codemirror/theme/${theme}.css`); // eslint-disable-line global-require
    codemirror.setOption("theme", theme);
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
