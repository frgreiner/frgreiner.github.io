<template>
  <section id="about-skills">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">SKILLS</h2>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Rating from:
        <v-rating
          :value="1"
          half-increments
          color="yellow darken-4"
          background-color="yellow darken-4"
          :readonly="true"
        >
        </v-rating>
        (I have heard of it and used it once or twice for a private or
        university project)
        <br />
        <br />
        to:
        <v-rating
          :value="5"
          half-increments
          color="yellow darken-4"
          background-color="yellow darken-4"
          :readonly="true"
        >
        </v-rating>
        (I am using it frequently for my projects or at work)
      </v-responsive>
    </v-container>

    <v-container class="mb-12">
      <v-expansion-panels
        multiple
        style="max-width: 720px"
        class="mx-auto"
        v-model="panel"
      >
        <v-expansion-panel v-for="(group, i) in items" :key="i" expand>
          <v-expansion-panel-header class="headline">
            {{ group.groupname }}
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-row>
              <v-col>
                <v-list-item
                  v-for="(skill, n) in group.items"
                  :key="n"
                  class="px-0"
                >
                  <v-list-item-avatar class="hidden-xs-only">
                    <v-icon color="primary" large v-text="skill.icon"></v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>{{ skill.name }}</v-list-item-content>
                  <v-list-item-action>
                    <v-rating
                      :title="skill.level"
                      v-model="skill.level"
                      half-increments
                      color="yellow darken-4"
                      background-color="yellow darken-4"
                      :readonly="true"
                      classes="text-lg-right"
                    >
                    </v-rating>
                  </v-list-item-action>
                </v-list-item>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AboutSkills",
  props: {
    items: Array,
  },
  data: () => ({
    panel: [0, 1, 2, 3],
  }),
};
</script>
