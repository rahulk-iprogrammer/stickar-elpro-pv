import * as actionType from "./actionTypes";

const initialState = {
  isAuthenticatedPvUser: false,
  pvUserDetails: null,
  urlDetails: null,
};

export default function (state = initialState, action) {
  if (action.type === actionType.AUTH_PV_USER) {
    return {
      ...state,
      isAuthenticatedPvUser: action.payload,
    };
  }
  if (action.type === actionType.lOGOUT_PV_USER) {
    return {
      ...state,
      isAuthenticatedPvUser: action.payload,
    };
  }
  if (action.type === actionType.PV_USER_DETAILS) {
    return {
      ...state,
      pvUserDetails: action.payload,
    };
  }
  if (action.type === actionType.PV_URL_DETAILS) {
    return {
      ...state,
      urlDetails: action.payload,
    };
  }

  return state;
}
