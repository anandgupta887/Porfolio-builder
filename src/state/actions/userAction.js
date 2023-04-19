import { UPDATE_USER_DETAILS } from "../actionTypes/actionTypes";

const updateUserDetails = (payload) => {
  return {
    type: UPDATE_USER_DETAILS,
    payload: payload,
  };
};

export { updateUserDetails };
