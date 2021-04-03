export default {
  namespaced: true,
  state: {
    drawer: false,
    navItems: [
      {
        title: "Profile",
        anchor: "#about-profile",
      },
      {
        title: "Education",
        anchor: "#about-education",
      },
      {
        title: "Experience",
        anchor: "#about-experience",
      },
      {
        title: "Skills",
        anchor: "#about-skills",
      },
    ],
  },
  mutations: {
    setDrawer(state, value) {
      state.drawer = value;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
};
