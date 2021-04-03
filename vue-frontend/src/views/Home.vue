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
  data: () => ({
    reverse: true,
    socialLinks: [
      {
        href: "https://github.com/frgreiner",
        icon: "mdi-github",
      },
      {
        href: "https://www.linkedin.com/in/friedrich-greiner-a54b42173",
        icon: "mdi-linkedin",
      },
      {
        href: "https://www.facebook.com/friedrich.greiner",
        icon: "mdi-facebook",
      },
    ],
    education: [
      {
        title: "Heilbronn University & Heidelberg University",
        subtitle: "2018 - today",
        text: "Master of Science, Medical Computer Science",
      },
      {
        title: "Dundalk Institute of Technology",
        subtitle: "2016 - 2017",
        text: "Semester abroad, B.Sc. in Computer Science",
      },
      {
        title: "Heilbronn University",
        subtitle: "2014 - 2018",
        text: "Bachelor of Science, Software Engineering",
      },
      {
        title: "Friedrich von Alberti Gymnasium",
        subtitle: "2005 - 2013",
        text: "General university entrance qualification ",
      },
    ],
    experience: [
      {
        company: "Robert Bosch GmbH",
        position: "Working Student",
        description:
          "Fullstack development with MySQL, Java (Spring Boot), Angular and Python.",
        location: "Abstatt, Germany",
        year: "Apr. 2019 - today",
      },
      {
        company: "Bosch Engineering GmbH",
        position: "Working Student",
        description:
          "Software Development in C#: API Architecture/Design for HIL Measurement protocols (CCP, XCP on CAN/Ethernet)",
        location: "Abstatt, Germany",
        year: "Feb. 2018 - Aug. 2018",
      },
      {
        company: "Bosch Engineering GmbH",
        position: "Internship",
        description:
          "Software Development in C#: API Architecture/Design for HIL Measurement protocols (CCP, XCP on CAN/Ethernet)",
        location: "Abstatt, Germany",
        year: "Aug. 2017 - Feb. 2018",
      },
      {
        company: "Malteser",
        position: "Working Student",
        description:
          "Meals on wheels and driving service for people with disabilities",
        location: "Heilbronn, Germany",
        year: "Apr. 2014 - Jul. 2017",
      },
      {
        company: "Work & Travel",
        position: "Farmhand",
        description:
          "mainly fruit picking (Lemongrass, Oranges, Bananas & Mangos)",
        location: "Australia",
        year: "Aug. 2013 - Mar. 2014",
      },
    ],
    skills: [
      {
        groupname: "(Programming) Languages",
        items: [
          {
            name: "Java",
            icon: "mdi-language-java",
            level: 5,
          },
          {
            name: "JavaScript",
            icon: "mdi-language-javascript",
            level: 4.5,
          },
          {
            name: "TypeScript",
            icon: "mdi-language-typescript",
            level: 4.5,
          },
          {
            name: "CSS",
            icon: "mdi-language-css3",
            level: 4.5,
          },
          {
            name: "HTML",
            icon: "mdi-language-html5",
            level: 4.5,
          },
          {
            name: "SQL",
            icon: "mdi-database-search",
            level: 4,
          },
          {
            name: "C#",
            icon: "mdi-language-csharp",
            level: 3.5,
          },
          {
            name: "Python",
            icon: "mdi-language-python",
            level: 3,
          },
          {
            name: "C++",
            icon: "mdi-language-cpp",
            level: 1.5,
          },
          {
            name: "C",
            icon: "mdi-language-c",
            level: 1,
          },
        ],
      },
      {
        groupname: "(Spoken) Languages",
        items: [
          {
            name: "German (native Speaker)",
            icon: "mdi-message",
            level: 5,
          },
          {
            name: "English (C1)",
            icon: "mdi-message",
            level: 4,
          },
        ],
      },
      {
        groupname: "Industry Knowledge",
        items: [
          {
            name: "Git",
            icon: "mdi-git",
            level: 5,
          },
          {
            name: "Angular",
            icon: "mdi-angular",
            level: 5,
          },
          {
            name: "Vue.js",
            icon: "mdi-vuejs",
            level: 5,
          },
          {
            name: "Docker",
            icon: "mdi-docker",
            level: 4.5,
          },
          {
            name: "Agile Project Management",
            icon: "mdi-chart-timeline",
            level: 4,
          },
          {
            name: "Jenkins",
            icon: "mdi-cogs",
            level: 3,
          },
          {
            name: "JFrog Artifactory",
            icon: "mdi-cloud-lock",
            level: 3,
          },
          {
            name: "Nginx",
            icon: "mdi-server",
            level: 3,
          },
          {
            name: "Google Cloud Console",
            icon: "mdi-google-cloud",
            level: 2,
          },
          {
            name: "Amazon EC2",
            icon: "mdi-aws",
            level: 2,
          },
          {
            name: "Kubernetes",
            icon: "mdi-kubernetes",
            level: 1,
          },
        ],
      },
      {
        groupname: "Operating Systems",
        items: [
          {
            name: "(Ubuntu) Linux",
            icon: "mdi-ubuntu",
            level: 5,
            description:
              "daily usage on Ubuntu, Management of Ubuntu Server & RetHat Enterprise Server 8",
          },
          {
            name: "Windows",
            icon: "mdi-microsoft-windows",
            level: 4.5,
            description: "daily usage",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
.v-card__text,
.v-card__subtitle,
.v-card__title {
  word-break: normal !important;
}
</style>
