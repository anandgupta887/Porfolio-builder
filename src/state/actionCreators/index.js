export const updateUserProfile = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateUserProfile",
      payload: data,
    });
  };
};
