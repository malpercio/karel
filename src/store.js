import Vue from "vue";
import Vuex from "vuex";
import editorModule from "@/modules/editor";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    editorModule,
  },
});
