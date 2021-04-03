<template>
  <v-card class="elevation-2">
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
};
</script>
