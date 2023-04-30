import {
  UPDATE_USER_DETAILS,
  LOGOUT_USER,
  UPDATE_PROFILE,
  UPDATE_SKILLS,
  UPDATE_EXPERIENCE,
  UPDATE_PROJECT,
  UPDATE_EDUCATION,
  UPDATE_TEMPLATE,
  UPDATE_NEW_USER,
} from "../actionTypes/actionTypes";

const updateUserDetails = (payload) => {
  return {
    type: UPDATE_USER_DETAILS,
    payload: payload,
  };
};

const updateNewUser = (payload) => {
  return {
    type: UPDATE_NEW_USER,
    payload: payload,
  };
};

const updateTemplateId = (payload) => {
  return {
    type: UPDATE_TEMPLATE,
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

const updateProject = (payload) => {
  return {
    type: UPDATE_PROJECT,
    payload: payload,
  };
};

const updateEducation = (payload) => {
  return {
    type: UPDATE_EDUCATION,
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
  updateProject,
  updateEducation,
  updateTemplateId,
  updateNewUser,
};
