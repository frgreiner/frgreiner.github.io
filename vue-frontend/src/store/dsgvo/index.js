export default {
  namespaced: true,
  state: {
    accepted: false,
    essential: true,
    googleAnalytics: true,
  },
  getters: {},
  mutations: {
    accept(state, value) {
      state.accepted = value;
    },
    setEssential(state, value) {
      state.essential = value;
      state.accepted = false;
    },
    setGoogleAnalytics(state, value) {
      state.googleAnalytics = value;
      state.accepted = false;
    },
  },
};
