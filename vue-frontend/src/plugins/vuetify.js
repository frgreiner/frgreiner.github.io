import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import store from "../store";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: store.state.theme.darkMode,
    themes: {
      light: {
        primary: "#212121",
        secondary: "#424242",
        accent: "e87109",
      },
      dark: {
        primary: "354e91",
        accent: "e87109",
      },
    },
    options: {
      customProperties: true,
    },
  },
});
