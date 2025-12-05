import firebase from "firebase/app";
import "@firebase/messaging";
import { getStorageItem, setStorageItem } from "./common/localStorage";
import { stockAPI } from "./common/axiosInstance";
import { apiData } from "./common/common-types";

//ask permission to receive notification
export const askForPermission = () => {
  try {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((data) => {
        if (getStorageItem("token")) {
          if (getStorageItem("token") !== data) {
            addDeviceToken(data);
          }
        } else {
          addDeviceToken(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

const addDeviceToken = (token) => {
  const formData = new FormData();
  formData.append("customer_id", JSON.parse(getStorageItem("user")).id);
  formData.append("merchant_id", apiData.merchant_id);
  formData.append("device_token", token);
  formData.append("platform", apiData.platform);
  if (getStorageItem("token")) {
    formData.append("expired_token", getStorageItem("token"));
  }

  stockAPI(formData, "POST", "/updateDeviceToken", null, null, null, true)
    .then((response) => {
      if (response.statusCode === 100) {
        setStorageItem("token", token);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const initializeFirebase = () => {
  const config = {
    apiKey: "AIzaSyDYlkcxGkHffC7J-ooz9ONI4tVSY7_iq6w",
    authDomain: "carrotbox-b084b.firebaseapp.com",
    databaseURL: "https://carrotbox-b084b.firebaseio.com",
    projectId: "carrotbox-b084b",
    storageBucket: "carrotbox-b084b.appspot.com",
    messagingSenderId: "57326397511",
    appId: "1:57326397511:web:dd8b1b8a61c877fd81a962",
    measurementId: "G-6PY2H93JYG",
  };
  firebase.initializeApp(config);
};
