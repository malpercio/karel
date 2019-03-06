import {fake,} from "sinon";
import {shallowMount, createLocalVue,} from "@vue/test-utils";
import chai from "chai";
import Editor from "@/components/Editor.vue";
import Vuex from "vuex";

chai.should();

describe("Editor.vue", () => {
  let localVue, store, actions, getters, mutations;

  before(function() {
    localVue = createLocalVue();
    localVue.use(Vuex);
  });

  beforeEach(function() {
    actions = {
      "editor:createCodeMirrorInstance": fake(),
      "editor:createContextMenu": fake(),
    };
    getters = {
      "editor:code": fake.returns("getCode"),
      "editor:codemirror": fake.returns("getCodeMirror"),
    };
    mutations = {
      "editor:setCode": fake(),
    };
    store = new Vuex.Store({
      actions,
      getters,
      mutations,
    });
  });

  it("should render a textarea with id 'editor'", () => {
    const wrapper = shallowMount(Editor, {localVue, store,});

    wrapper.contains("textarea#editor").should.be.true;
  });

  describe("when mounted", () => {
    it("should create a CodeMirror Instance only once", () => {
      shallowMount(Editor, {localVue, store,});

      actions["editor:createCodeMirrorInstance"].callCount.should.equal(1);
    });

    it("should create context menu only once", () => {
      shallowMount(Editor, {localVue, store,});

      actions["editor:createContextMenu"].callCount.should.equal(1);
    });
  });

  describe("state", () => {
    it("should read `code` from state", () => {
      const wrapper = shallowMount(Editor, {localVue, store,});

      wrapper.vm.code.should.equal("getCode");
      getters["editor:code"].callCount.should.equal(1);
    });

    it("should read `codemirror` from state", () => {
      const wrapper = shallowMount(Editor, {localVue, store,});

      wrapper.vm.codemirror.should.equal("getCodeMirror");
      getters["editor:codemirror"].callCount.should.equal(1);
    });

    it("should write `code` into state", () => {
      const wrapper = shallowMount(Editor, {localVue, store,});

      wrapper.vm.code = "test";
      mutations["editor:setCode"].callCount.should.equal(1);
    });
  });

});
