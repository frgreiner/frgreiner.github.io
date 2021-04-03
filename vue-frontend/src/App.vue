<template>
  <v-app>
    <app-bar />
    <nav-drawer />
    <router-view />
  </v-app>
</template>

<script>
import AppBar from "./components/core/AppBar";
import NavDrawer from "@/components/core/NavDrawer";

export default {
  name: "App",

  components: {
    AppBar,
    NavDrawer,
  },
  data: () => ({ items: ["One", "Two", "Three"] }),
};
</script>
<style>
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 16px !important;
}
.v-menu__content {
  border-radius: 0px !important;
}
</style>
