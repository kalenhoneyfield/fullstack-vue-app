export default {
  logUserIn: (state, userPayload) => {
    state.password = userPayload.password;
    state.user = userPayload;
  },
  trueFalse: state => {
    state.toggle = !state.toggle;
  },
};
