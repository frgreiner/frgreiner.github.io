<template>
  <v-app>
    <app-bar />
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-app>
</template>

<script>
import AppBar from "./components/core/AppBar";

export default {
  name: "App",

  components: {
    AppBar,
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
