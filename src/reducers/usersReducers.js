export default (state = [], action) => {
  switch (action.type) {
    case "FATCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
