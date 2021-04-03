<template>
  <v-card class="elevation-2 appear-hidden">
    <v-card-title class="headline" v-if="title" v-text="title"> </v-card-title>
    <v-card-subtitle
      v-if="subtitle && (!dense || $vuetify.breakpoint.smAndDown)"
      v-text="subtitle"
    >
    </v-card-subtitle>
    <v-card-text v-if="text" v-text="text"> </v-card-text>
    <v-card-text v-if="location" v-text="location"> </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "TimelineCard",
  props: {
    title: { default: "" },
    subtitle: { default: "" },
    text: { default: "" },
    location: { default: "" },
    dense: { default: false },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
  },
  methods: {
    isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    handleScroll() {
      if (this.isElementInViewport(this.$el)) {
        this.$el.classList.add("show-element");
        //window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
};
</script>
<style>
.appear-hidden {
  opacity: 0;
}

.show-element {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transition: all 2s ease-out;
  -moz-transition: all 2s ease-out;
  transition: all 2s ease-out;
}
</style>
