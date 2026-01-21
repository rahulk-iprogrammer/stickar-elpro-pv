import { getStorageItem } from "./localStorage";
export const WHATSAPP_LINK = "https://wa.me/91";
export const WHATSAPP_SHARING_LINK = "https://api.whatsapp.com/send";

const { REACT_APP_BASE_URL, NODE_ENV } = process.env;
// console.warn(REACT_APP_BASE_URL);
console.warn(NODE_ENV);
export const apiData = {baseUrl: NODE_ENV === "development" ? "https://stage-api.technovatechnologys.com" : REACT_APP_BASE_URL,
  merchant_id: 10073, //10073 <--production
  platform: 4,
  appVersion: 4.0,
  login_through: 2,
  customer_id: getStorageItem("user") && JSON.parse(getStorageItem("user")).id,
  pv_platform:3
  // mobile_number: getStorageItem('user') && JSON.parse(getStorageItem('user')).mobile_number
};
