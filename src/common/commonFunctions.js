import { getStorageItem, setStorageItem } from "./localStorage";
import { stockAPI } from "./axiosInstance";
import { apiData } from "./common-types";
import platform from "platform";


const logoutPv = async () => {
  const formData = new URLSearchParams();
  formData.append("merchant_id", apiData.merchant_id);
  formData.append(
    "user_id",
    getStorageItem("user") && JSON.parse(getStorageItem("user")).id
  );
  formData.append("refresh_token", localStorage.getItem("refresh_token"));
  stockAPI(
    formData,
    "POST",
    "/logOutPvUser",
    null,
    null,
    null,
    true
  ).then((response) => {});
  await localStorage.removeItem("user");;
  await localStorage.removeItem("token");
  await localStorage.removeItem("refresh_token");
  await localStorage.removeItem("acc_token");
  
};

//will capitalize the first letter
const capitalize = (name) =>
  name
    .split(" ")
    .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1))
    .join(" ");

const isPWAInstalled = (mobileNumber) => {
  if (
    (window.matchMedia &&
      window.matchMedia("(display-mode: standalone)").matches) ||
    window.navigator.standalone === true
  ) {
    if (
      getStorageItem("isPWAInstalled") &&
      getStorageItem("isPWAInstalled") === "not installed"
    ) {
      const formData = new URLSearchParams();
      formData.append("platform", apiData.platform);
      formData.append("merchant_id", apiData.merchant_id);
      formData.append("mobile_number", mobileNumber.trim());
      formData.append(
        "customer_id",
        getStorageItem("user") && JSON.parse(getStorageItem("user")).id
      );
      formData.append("browser", platform.name);
      stockAPI(
        formData,
        "POST",
        "/setAppInstallation",
        null,
        null,
        null,
        true
      ).then(async (response) => {
        if (response && response.statusCode && response.statusCode === 100) {
          await setStorageItem("isPWAInstalled", "installed");
        }
      });
    }
  }
};

const customerLoginLogs = () => {
  const formData = new URLSearchParams();
  formData.append("merchant_id", apiData.merchant_id);
  formData.append(
    "customer_id",
    getStorageItem("user") && JSON.parse(getStorageItem("user")).id
  );
  formData.append("is_login", 1);
  formData.append("login_through", apiData.login_through);
  stockAPI(
    formData,
    "POST",
    "/createCustomerLoginLogs",
    null,
    null,
    null,
    true
  ).then((response) => {});
};

const clearBadgeCount = () => {
  if ("setAppBadge" in navigator) {
    navigator.clearAppBadge().catch((error) => {
      // Do something with the error.
      console.log(error);
    });
  }
};

const encrypt = (value) => {
  //encrypt in base-64
  try {
    return window.btoa(value);
  } catch (error) {
    return value;
  }
};

const decrypt = (value) => {
  //decrypt base-64 cipher value
  try {
    // already logged in user may get garbage value for pointShortName
    if (value === "pts") {
      return value;
    }
    return window.atob(value);
  } catch (error) {
    //when decryption fails will return as is value
    return value;
  }
};

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export {
  capitalize,
  isPWAInstalled,
  customerLoginLogs,
  clearBadgeCount,
  encrypt,
  decrypt,
  debounce,
  logoutPv
};
