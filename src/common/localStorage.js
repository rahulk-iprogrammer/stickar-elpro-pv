import { encrypt, decrypt } from "./commonFunctions";

export const setStorageItem = async (itemKey, itemValue) => {
  const res = await localStorage.setItem(itemKey, encrypt(itemValue));
  return res;
};

export const getStorageItem = (item) => {
  if (localStorage.getItem(item)) {
    const res = decrypt(localStorage.getItem(item));
    if (res) {
      return res;
    }
    return false;
  }
  return false;
};

export const removeStorageItem = (item) => {
  localStorage.removeItem(item);
};
