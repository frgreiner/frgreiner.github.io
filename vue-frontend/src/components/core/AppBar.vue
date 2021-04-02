<template>
  <v-app-bar app clipped-left flat dark>
    <!--<div class="d-flex align-center">
        <v-toolbar-title>Friedrich Greiner</v-toolbar-title>
      </div>-->
    <v-btn height="100%" text tile style="text-transform: unset !important;">
      <v-toolbar-title>Friedrich Greiner</v-toolbar-title>
    </v-btn>
    <v-spacer></v-spacer>

    <v-menu left bottom offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn height="100%" text tile v-bind="attrs" v-on="on">
          <span>Pages</span>
        </v-btn>
      </template>

      <v-list dark subheader style="padding: 0px;">
        <v-list-item to="/" @click="() => {}">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about" @click="() => {}">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu left bottom offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn height="100%" text tile v-bind="attrs" v-on="on">
          <span>Account</span>
        </v-btn>
      </template>

      <v-list dark subheader style="padding: 0px;">
        <v-list-item v-for="n in 4" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu left bottom offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn height="100%" text tile v-bind="attrs" v-on="on">
          <span>Settings</span>
        </v-btn>
      </template>

      <v-list dark subheader style="padding: 0px;">
        <v-list-item v-for="n in 2" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {};
</script>
<style></style>
