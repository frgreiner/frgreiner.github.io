import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import navigation from "./navigation";

import profile from "./profile";
import theme from "./theme";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [
    createPersistedState({ paths: ["theme.darkMode", "googleAnalytics"] }),
  ],
  modules: {
    navigation,
    profile,
    theme,
  },
  state: {
    googleAnalytics: false,
  },
  mutations: {
    setGoogleAnalytics(state, value) {
      state.googleAnalytics = value;
    },
  },
});

export default store;
