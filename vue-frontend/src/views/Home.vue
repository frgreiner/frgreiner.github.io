<template>
  <v-main>
    <HelloWorld msg="Welcome to Your Vue.js App Fritz" />
  </v-main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
