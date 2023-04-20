import { UPDATE_USER_DETAILS } from "../actionTypes/actionTypes";

const initialState = {};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
