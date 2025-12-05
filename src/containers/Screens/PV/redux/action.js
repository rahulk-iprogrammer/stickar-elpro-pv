import {
  AUTH_PV_USER,
  lOGOUT_PV_USER,
  PV_URL_DETAILS,
  PV_USER_DETAILS,
} from "./actionTypes";

export const authenticate_pv_user = () => (dispatch) => {
  dispatch({ type: AUTH_PV_USER, payload: true });
};
export const logout_pv_user = () => (dispatch) => {
  dispatch({ type: lOGOUT_PV_USER, payload: false });
};
export const pv_user_details = (data) => (dispatch) => {
  dispatch({ type: PV_USER_DETAILS, payload: data });
};

export const url_details = (data) => (dispatch) => {
  dispatch({ type: PV_URL_DETAILS, payload: data });
};
