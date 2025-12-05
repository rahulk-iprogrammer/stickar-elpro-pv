import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
 import reducerApp from "./App/redux/reducerApp";
import reducerPvUserAuthentication from "./containers/Screens/PV/redux/reducerPvUserAuthentication"

const encryptor = encryptTransform({
  secretKey: "stickar-secret-key",
  onError: function (error) {
    // Handle the error.
    console.log("ERROR IN REDUX PERSIST", error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor],
  stateReconciler: autoMergeLevel2,
  whitelist: [
    "reducerPvUserAuthentication"
  ],
};

const rootReducer = {
   reducerApp,
  reducerPvUserAuthentication,
};

const combinedReducer = combineReducers(rootReducer);

export default persistReducer(persistConfig, combinedReducer);
