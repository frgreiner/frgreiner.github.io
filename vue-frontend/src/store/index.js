import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import navigation from "./navigation";

import profile from './profile'
import theme from './theme'

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState({ paths: ["theme.darkMode"] })],
  modules: {
    navigation,
    profile,
    theme
  },
});

export default store;
