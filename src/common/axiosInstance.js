import axios from "axios";
import { apiData } from "./common-types";
import { openAlertBox } from "./AlertMessage/AlertMessage";
import { store } from "../store";
import { logoutPvUser } from "../App/redux/action";
import { logout_pv_user } from "../containers/Screens/PV/redux/action";

const nonAuthUrl = [
  "/getOtp",
  "/getAreaCode",
  "/loginCustomer",
  "/isMaintainance",
  "/appVersion",
  "/getBanners",
  // "/checkCustomerData",
  // "/registerCustomer"
  // "/logOutUser", requires Token for BE to dlt prev token
  "/getPincode",
];

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      window.location.reload(false);
    }, timeout);
  };
}

const sessionLogout = debounce(() => {
  const state = store.getState();
  const isAuthenticatedPvUser = state.reducerPvUserAuthentication?.isAuthenticatedPvUser;

  if (isAuthenticatedPvUser) {
    // If the user is a PvUser, dispatch the logoutPvUser action
    store.dispatch(logoutPvUser());
  }
});

export const stockAPI = async (
  data,
  method,
  url,
  header,
  onUploadProgress,
  cancelToken,
  completeResponse
) => {
  var timeout = 75000;

  const headers = {
    Authorization: localStorage.getItem("acc_token"),
  };

  return axios
    .request({
      url,
      method,
      baseURL: apiData.baseUrl,
      data,
      timeout,
      responseType: "json",
      headers: nonAuthUrl.includes(url) ? undefined : headers,
      onUploadProgress,
      cancelToken,
    })
    .then(async (response) => {
      if (completeResponse) {
        return response.data;
      } else if (
        response.data &&
        response.data.response &&
        response.data.statusCode === 100
      ) {
        return response.data.response;
      } else {
        openAlertBox(response.data.statusDescription ? response.data.statusDescription : "Please Refresh", "error");
        return false;
      }
    })
    .catch((err) => {
      if (err?.response?.data?.statusCode === 401 && err?.response?.data?.statusDescription?.toLowerCase() === "refresh" && url != '/logOutUser') {
        refreshTokenApiCall({
          _url: url,
          _method: method,
          _baseURL: apiData.baseUrl,
          _data: data,
          _timeout: timeout,
          _responseType: "json",
          _onUploadProgress: onUploadProgress,
          _cancelToken: cancelToken,
        });
        return false;
      }
      if (err?.response?.data?.statusCode === 401 && (err?.response?.data?.statusDescription?.toLowerCase() === "expired" || err?.response?.data?.statusDescription?.toLowerCase() === "invalid") && url != '/logOutUser') {
        sessionLogout();
        return false;
      }

      if (err.message === "Network Error") {
        openAlertBox("Please check your internet connection!", "error");
        return false;
      }
      if (err.message === "timeout of 75000ms exceeded") {
        err.message =
          "Process timed out due to slow internet connection. Please Try Again.";
      }
      if (completeResponse) {
        return err;
      }
      openAlertBox("Oops something went wrong!", "error");
      return false;
    });
};

const refreshTokenApiCall = ({
  _url,
  _method,
  _baseURL,
  _data,
  _timeout,
  _responseType,
  _onUploadProgress,
  _cancelToken,
}) => {
  axios
    .request({
      url: "/refreshAuthToken",
      method: "POST",
      baseURL: apiData.baseUrl,
      responseType: "json",
      headers: {
        Authorization: localStorage.getItem("refresh_token"),
      },
    })
    .then(async (response) => {
      if (
        response.data &&
        response.data.response &&
        response.data.statusCode === 100
      ) {
        await localStorage.setItem(
          "refresh_token",
          response.data.response.refresh_token
        );
        await localStorage.setItem("acc_token", response.data.response.token);
        window.location.reload(false);
        // await stockAPI(
        //   _url,
        //   _method,
        //   apiData.baseUrl,
        //   _data,
        //   _timeout,
        //   _responseType,
        //   _onUploadProgress,
        //   _cancelToken,
        // );
        return false;
      } else {
        openAlertBox(response.data.statusDescription, "error");
        return false;
      }
    })
    .catch((err) => {
      // store.dispatch(logoutUser());
      if (err.message === "Network Error") {
        openAlertBox("Please check your internet connection!", "error");
        return false;
      }
      openAlertBox("Session expired!", "error");
      sessionLogout();
      return false;
    });
};
