<template>
  <section id="about-experience">
    <div class="py-6"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">EXPERIENCE</h2>
    </v-container>

    <v-container>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, n) in items" :key="n">
          <span slot="opposite" v-text="item.year"></span>
          <timeline-card
            :title="item.company"
            :subtitle="item.year"
            :text="item.position + ' - ' + item.description"
            :location="item.location"
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
  name: "AboutExperience",
  props: {
    items: Array,
  },
  components: {
    TimelineCard,
  },
};
</script>
