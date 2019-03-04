<template>
  <textarea id="editor"></textarea>
</template>

<script>
import "codemirror/lib/codemirror.css";
import types from "@/types/editor";
export default {
  name: "Editor",
  data() {
    return {
      options: {
        tabSize: 4,
        lineNumbers: true
      }
    };
  },
  mounted() {
    this.$store.dispatch(types.actions.createCodeMirrorInstance, this.options);
    this.$store.dispatch(types.actions.createContextMenu);
  },
  computed: {
    codemirror() {
      return this.$store.getters[types.getters.codemirror];
    },
    code: {
      get() {
        return this.$store.getters[types.getters.code];
      },
      set(code) {
        this.$store.commit(types.mutations.setCode, { value: code });
      }
    }
  }
};
</script>
