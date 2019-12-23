export default (state = [], action) => {
  switch (action.type) {
    case "FATCH_POST":
      return action.payload;
    default:
      return state;
  }
};
