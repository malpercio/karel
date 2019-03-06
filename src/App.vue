<template>
  <v-app>
    <v-toolbar app>
      <img
        :src="
          require(`@/assets/${
            $vuetify.breakpoint.lgAndUp ? 'full_logo.png' : 'logo.png'
          }`)
        "
        alt="KarelJS"
        height="90%"
        style="padding-right:2%;"
      >

      <v-btn
        color="success"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <span class="hidden-md-and-down">Open</span>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-folder
        </v-icon>
      </v-btn>
      <v-btn
        color="info"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <span class="hidden-md-and-down">Save</span>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-save
        </v-icon>
      </v-btn>
      <v-btn
        color="accent"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <span class="hidden-md-and-down">Toggle view</span>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-grip-horizontal
        </v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <span class="hidden-md-and-down">Compile</span>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-cogs
        </v-icon>
      </v-btn>
      <v-btn
        color="success"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <span class="hidden-md-and-down">Run</span>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-play
        </v-icon>
      </v-btn>
      <v-btn
        color="secondary"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <span class="hidden-md-and-down">Step</span>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-forward
        </v-icon>
      </v-btn>
      <v-btn
        color="secondary"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <div class="hidden-md-and-down">
          <span>Stop</span>
        </div>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-stop
        </v-icon>
      </v-btn>
      <v-btn
        color="error"
        flat
        :icon="$vuetify.breakpoint.smAndDown"
      >
        <span class="hidden-md-and-down">Reset</span>
        <v-icon
          dark
          :right="$vuetify.breakpoint.lgAndUp"
        >
          fas fa-undo
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container
        fluid
        fill-height
        grid-list-md
      >
        <v-layout>
          <v-flex
            xs12
            sm6
          />
          <v-flex
            xs12
            sm6
            fill-height
            style="position: relative;"
          >
            <Editor />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Editor from "@/components/Editor";

export default {
  name: "App",
  components: {
    Editor,
  },
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
