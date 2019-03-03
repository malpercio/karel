<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height grid-list-md>
        <v-layout>
          <v-flex xs12 sm6> </v-flex>
          <v-flex xs12 sm6 fill-height style="position: relative;">
            <codemirror v-model="code" :options="cmOptions"></codemirror>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/cobalt.css";

export default {
  name: "App",
  components: {
    codemirror
  },
  data() {
    return {
      code: "",
      cmOptions: {
        tabSize: 4,
        mode: "text/javascript",
        theme: "cobalt",
        lineNumbers: true
      }
    };
  }
};
</script>

<style language="scss">
.CodeMirror {
  height: 100%;
  width: 100%;
  position: absolute;
  scroll: visible;
}
.test {
  height: 100%;
  position: relative;
}
</style>
