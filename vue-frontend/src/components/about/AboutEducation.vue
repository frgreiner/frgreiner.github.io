<template>
  <section id="about-education">
    <div class="py-6"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-8">EDUCATION</h2>
    </v-container>

    <v-container>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, n) in items" :key="n">
          <span slot="opposite" v-text="item.subtitle"></span>
          <timeline-card
            :title="item.title"
            :subtitle="item.subtitle"
            :text="item.text"
            :dense="true"
          ></timeline-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <div class="py-6"></div>
  </section>
</template>

<script>
import TimelineCard from "@/components/core/TimelineCard.vue";

export default {
  name: "AboutEducation",
  props: {
    items: Array,
  },
  components: {
    TimelineCard,
  },
};
</script>
