<template>
  <v-app-bar app clipped-left flat dark color="primary">
    <v-toolbar-title>Friedrich Greiner</v-toolbar-title>
    <!--<v-btn height="100%" text tile style="text-transform: unset !important;">
    <v-toolbar-title>Friedrich Greiner</v-toolbar-title>
    </v-btn>-->
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
      class="hidden-sm-and-down active-section"
      v-for="(item, n) in navItems"
      :key="n"
      @click="$vuetify.goTo(item.anchor)"
    >
      <span>{{ item.title }}</span>
    </v-btn>
    <!--
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      left
    >
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
            <v-switch v-model="$vuetify.theme.dark" color="accent" inset></v-switch>
          </v-list-item-action>
          <v-list-item-title>Dark Theme</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    -->
  </v-app-bar>
</template>
<script>
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
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
    this.getTagsForRoute(this.$router.currentRoute.path);
  },
  computed: {
    navItems() {
      return this.$store.state.navigation.navItems;
    },
  },
};
</script>
<style scoped>
.active-section {
  border-bottom: solid white;
}
</style>
