<template>
  <v-main>
    <about-profile :socialLinks="socialLinks" />
    <about-education :items="education" />
    <about-experience :items="experience" />
    <about-skills :items="skills" />
    <app-footer />
  </v-main>
</template>

<script>
import AboutExperience from "@/components/about/AboutExperience.vue";
import AboutEducation from "@/components/about/AboutEducation.vue";
import AboutProfile from "@/components/about/AboutProfile.vue";
import AboutSkills from "@/components/about/AboutSkills.vue";
import AppFooter from "@/components/core/Footer.vue";

export default {
  name: "About",
  components: {
    AppFooter,
    AboutProfile,
    AboutEducation,
    AboutExperience,
    AboutSkills,
  },
  computed: {
    socialLinks() {
      return this.$store.state.profile.socialLinks;
    },
    education() {
      return this.$store.state.profile.education;
    },
    experience() {
      return this.$store.state.profile.experience;
    },
    skills() {
      return this.$store.state.profile.skills;
    },
  },
};
</script>

<style>
.v-card__text,
.v-card__subtitle,
.v-card__title {
  word-break: normal !important;
}
</style>
