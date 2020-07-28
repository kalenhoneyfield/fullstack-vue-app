export default {
  logUserInOut: (state, userPayload) => {
    state.user = userPayload;
  },
  trueFalse: state => {
    state.toggle = !state.toggle;
  },
};
