import {
  UPDATE_USER_DETAILS,
  LOGOUT_USER,
  UPDATE_PROFILE,
  UPDATE_SKILLS,
  UPDATE_EXPERIENCE,
} from "../actionTypes/actionTypes";

const updateUserDetails = (payload) => {
  return {
    type: UPDATE_USER_DETAILS,
    payload: payload,
  };
};

const updateProfile = (payload) => {
  return {
    type: UPDATE_PROFILE,
    payload: payload,
  };
};

const updateSkills = (payload) => {
  return {
    type: UPDATE_SKILLS,
    payload: payload,
  };
};

const updateExperience = (payload) => {
  return {
    type: UPDATE_EXPERIENCE,
    payload: payload,
  };
};

const logoutUser = (payload) => {
  return {
    type: LOGOUT_USER,
  };
};

export {
  updateUserDetails,
  logoutUser,
  updateProfile,
  updateSkills,
  updateExperience,
};
