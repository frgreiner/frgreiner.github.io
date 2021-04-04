<template>
  <section id="about-profile" style="min-height: calc(100vh - 64px);">
    <div class="py-6"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-8">Friedrich Greiner</h2>

      <v-avatar class="elevation-12 mb-6" size="128">
        <v-img src="/img/profile_small.jpg"></v-img>
      </v-avatar>
      <v-row class="mb-6">
        <v-col>
          <v-btn
            icon
            v-for="(item, i) in socialLinks"
            :key="i"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="ma-3"
            depressed
            fab
            color="secondary"
          >
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-responsive class="mx-auto title mb-8" max-width="720">
        I am a <b class="accent--text">software engineer</b> with experience in
        <b class="accent--text">full-stack</b>
        development on agile projects. My main programming language is
        <b class="accent--text">Java</b> and I am familiar with the concepts of
        <b class="accent--text">object oriented</b> programming and the
        fundamentals of <b class="accent--text">Spring Boot</b>. Having
        expertise mainly around applications with
        <b class="accent--text">Spring Boot</b> +
        <b class="accent--text">SQL</b> backend and
        <b class="accent--text">Angular</b> or
        <b class="accent--text">Vue.js</b> frontend, I appreciate the use of
        <b class="accent--text">CI/CD pipelines</b> and
        <b class="accent--text">containerized</b> deployment strategies to speed
        up development.
        <br />
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="900"
      >
      </v-responsive>
      <v-btn
        class="align-self-end indicator"
        fab
        outlined
        @click="$vuetify.goTo('#about-education')"
      >
        <v-icon class="">mdi-chevron-double-down</v-icon>
      </v-btn>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "AboutProfile",
  props: {
    socialLinks: Array,
  },
};
</script>
<style scoped>
.indicator {
  animation: shake 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: none;
  }

  20%,
  80% {
    transform: none;
  }

  30%,
  50% {
    transform: translate3d(0, 4px, 0);
  }

  40%,
  60% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
