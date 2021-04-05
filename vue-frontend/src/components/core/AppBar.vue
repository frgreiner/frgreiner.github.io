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
      <v-list class="menu-list">
        <v-list-item>
          <v-switch
            style="margin-top: 0px;"
            v-model="darkMode"
            color="accent"
            inset
            hide-details
            label="Dark Theme"
          ></v-switch>
        </v-list-item>
        <!--<v-divider></v-divider>
        <v-list-item @click="$store.commit('dsgvo/accept', false)">
          <v-list-item-title>Privacy Policy</v-list-item-title>
        </v-list-item>-->
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isScrollTop: true,
    };
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
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
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
  },
};
</script>
<style lang="css" scoped>
.menu-list {
  padding: 0 !important;
}
</style>
