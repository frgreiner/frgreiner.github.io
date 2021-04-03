import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

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
  getters,
  mutations,
  actions,
};
