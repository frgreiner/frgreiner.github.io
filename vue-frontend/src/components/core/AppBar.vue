<template>
  <v-app-bar app clipped-left flat dark color="primary">
    <v-toolbar-title>Friedrich Greiner</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- small screen -->
    <v-app-bar-nav-icon
      @click="toggleDrawer"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>

    <!-- medium and large screen -->
    <v-btn
      height="100%"
      text
      tile
      class="hidden-sm-and-down"
      v-for="(item, n) in navItems"
      :key="n"
      @click="$vuetify.goTo(item.anchor)"
    >
      <span>{{ item.title }}</span>
    </v-btn>
    <!-- Dark Theme Switch -->
    <v-menu :close-on-content-click="true" offset-y left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          height="100%"
          text
          tile
          class="hidden-sm-and-down"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="darkMode" color="accent" inset></v-switch>
          </v-list-item-action>
          <v-list-item-title>Dark Theme</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="googleAnalytics" color="accent" inset></v-switch>
          </v-list-item-action>
          <v-list-item-title>Google Analytics</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import Vue from "vue";
import VueGtag from "vue-gtag";

export default {
  data() {
    return {
      isScrollTop: true,
      tags: [],
    };
  },
  watch: {
    $route(to) {
      this.getTagsForRoute(to.path);
    },
    googleAnalytics() {
      this.handleTracking();
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("navigation/toggleDrawer");
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.isScrollTop = false;
      } else if (window.scrollY < 100) {
        this.isScrollTop = true;
      }
    },
    getTagsForRoute(path) {
      let navItemsFiltered = this.$store.state.navigation.navItems.filter(
        (x) => x.path === path
      );
      this.tags = navItemsFiltered.length > 0 ? navItemsFiltered[0].tags : [];
    },
    handleTracking() {
      // enable google analytics
      if (this.googleAnalytics) {
        Vue.use(VueGtag, {
          config: { id: "G-DRGHVJ9F7K" },
        });
      }
      // reload the page to disable
      else {
        if (this.$gtag) {
          window.location.reload();
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
    this.handleTracking();
    this.getTagsForRoute(this.$router.currentRoute.path);

    if (this.$gtag) {
      this.$gtag.event("page-loaded");
    }
  },
  computed: {
    navItems() {
      return this.$store.state.navigation.navItems;
    },
    darkMode: {
      get: function() {
        return this.$store.state.theme.darkMode;
      },
      set: function(value) {
        this.$store.commit("theme/setDarkMode", value);
      },
    },
    googleAnalytics: {
      get() {
        return this.$store.state.googleAnalytics;
      },
      set(value) {
        this.$store.commit("setGoogleAnalytics", value);
      },
    },
  },
};
</script>
