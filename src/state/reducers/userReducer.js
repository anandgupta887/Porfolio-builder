import {
  LOGOUT_USER,
  UPDATE_PROFILE,
  UPDATE_USER_DETAILS,
  UPDATE_SKILLS,
  UPDATE_EXPERIENCE,
  UPDATE_PROJECT,
  UPDATE_EDUCATION,
  UPDATE_TEMPLATE,
  UPDATE_NEW_USER,
} from "../actionTypes/actionTypes";

const initialState = {};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_NEW_USER:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_TEMPLATE:
      return {
        ...state,
        user: {
          ...state.user,
          template: action.payload,
        },
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          profile: action.payload,
        },
      };
    case UPDATE_SKILLS:
      return {
        ...state,
        user: {
          ...state.user,
          skills: action.payload,
        },
      };
    case UPDATE_EXPERIENCE:
      return {
        ...state,
        user: {
          ...state.user,
          experience: action.payload,
        },
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        user: {
          ...state.user,
          projects: action.payload,
        },
      };
    case UPDATE_EDUCATION:
      return {
        ...state,
        user: {
          ...state.user,
          education: action.payload,
        },
      };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
