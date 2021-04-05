<template>
  <v-app>
    <app-bar />
    <nav-drawer />
    <router-view />

    <!-- hidden status elements -->
    <!--<privacy-policy />-->
  </v-app>
</template>

<script>
/**
 * disabled all google analytics related methods until a dsgvo conform information is available
 */
//import Vue from "vue";
//import VueGtag from "vue-gtag";
import AppBar from "./components/core/AppBar";
import NavDrawer from "@/components/core/NavDrawer";
//import PrivacyPolicy from "./components/dialog/PrivacyPolicy";

export default {
  name: "App",

  components: {
    AppBar,
    //PrivacyPolicy,
    NavDrawer,
  },
  mounted() {
    /*this.handleTracking();
    if (this.$gtag) {
      this.$gtag.event("page-loaded");
    }*/
  },
  computed: {
    darkMode() {
      return this.$store.state.theme.darkMode;
    },
    /*googleAnalytics: {
      get() {
        return this.$store.state.dsgvo.googleAnalytics;
      },
    },*/
  },
  watch: {
    // handle dark mode on/off
    darkMode(newMode) {
      this.$vuetify.theme.dark = newMode;
    },
    // handle cookie settings changes
    /*googleAnalytics() {
      this.handleTracking();
    },*/
  },
  methods: {
    /*handleTracking() {
      // enable google analytics
      if (this.googleAnalytics && this.$store.state.dsgvo.accepted) {
        Vue.use(VueGtag, {
          config: { id: "G-DRGHVJ9F7K" },
        });
        if (this.$gtag) {
          this.$gtag.event("cookies-accepted");
        }
      }
      // reload the page to disable
      else {
        if (this.$gtag) {
          window.location.reload();
        }
      }
    },*/
  },
};
</script>
<style>
/* remove y padding to allow full sized buttons */
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 16px !important;
}
/* remove radius from menu border */
.v-menu__content {
  border-radius: 0px !important;
}
</style>
