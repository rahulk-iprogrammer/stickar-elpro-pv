import * as actionTypes from "./actionTypes";
import { getStorageItem } from "../../common/localStorage";
import * as actionTypesPv from "../../containers/Screens/PV/redux/actionTypes";

import { logoutPv } from "../../common/commonFunctions";
import { store } from "../../store";

const changeActiveTab = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_TAB, tab: id });
  };
};

const onTryAutoLogin = () => {
  return async (dispatch) => {
    if (
      getStorageItem("user") 
    ) {
      dispatch({ type: actionTypesPv.AUTH_PV_USER, payload: true });
    } else {
      logoutPvUser();
    }
  };
};

const logoutPvUser = () => {
  return async (dispatch) => {
    await logoutPv();
     dispatch({ type: actionTypesPv.lOGOUT_PV_USER, payload: false });
     dispatch({type:actionTypesPv.PV_URL_DETAILS, payload:null})
     dispatch({type:actionTypesPv.PV_USER_DETAILS, payload:null})

  };
};

const showLoader = (loader) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SHOW_LOADER, loader });
  };
};

const authUser = (val) => {
  return (dispatch) => {
    // dispatch({ type: actionTypesOtp.AUTH_USER, payload: val });
  };
};

export { changeActiveTab, onTryAutoLogin, showLoader, authUser, logoutPvUser };
