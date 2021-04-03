import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";
import navigation from "./navigation";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  //plugins: [createPersistedState({ paths: ["dsgvo"] })],
  modules: {
    navigation,
  },
});

export default store;
