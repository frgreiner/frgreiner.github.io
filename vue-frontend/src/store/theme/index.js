export default {
  namespaced: true,
  state: {
    darkMode: false,
  },
  mutations: {
    setDarkMode(state, value) {
      state.darkMode = value;
    },
  },
};
