export default {
  setDrawer(state, value) {
    state.drawer = value;
  },
  toggleDrawer(state) {
    state.drawer = !state.drawer;
  },
};
