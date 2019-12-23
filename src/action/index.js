import jsonplaceholder from "../apis/jsonplaceholder";

export const fatchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fatchPost());
  const allUser = new Set(getState().post.map(post => post.userId));
  allUser.forEach(userId => dispatch(fatchUser(userId)));
};

export const fatchPost = () => async dispatch => {
  const response = await jsonplaceholder.get("./posts");
  dispatch({
    type: "FATCH_POST",
    payload: response.data
  });
};

export const fatchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: "FATCH_USER",
    payload: response.data
  });
};
