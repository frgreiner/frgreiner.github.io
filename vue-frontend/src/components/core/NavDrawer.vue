<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    v-bind:width="180"
    dark
    disable-resize-watcher
  >
    <v-layout column fill-height>
      <v-list nav dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          link
          @click="
            drawer = false;
            $vuetify.goTo(item.anchor);
          "
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  computed: {
    drawer: {
      get: function() {
        return this.$store.state.navigation.drawer;
      },
      set: function(value) {
        this.$store.commit("navigation/setDrawer", value);
      },
    },
    navItems() {
      return this.$store.state.navigation.navItems;
    },
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler(event) {
      if (event.target.outerWidth >= 960) {
        this.$store.commit("navigation/setDrawer", false);
      }
    },
  },
};
</script>
