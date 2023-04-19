const reducer = (state = {}, action) => {
  if (action.type == "updateUserProfile") {
    console.log("displatched",action.payload);
    return { ...state, user: action.payload };
  } else {
    return state;
  }
};

export default reducer;
