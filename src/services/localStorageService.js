export const KEY_TOKEN = "accessToken";
export const KEY_USER_INFO = "userInfo";

export const setToken = (token) => {
  localStorage.setItem(KEY_TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(KEY_TOKEN);
};
export const setUserInfo = (userInfo) => {
  localStorage.setItem(KEY_USER_INFO, userInfo);
};

export const getUserInfo = () => {
  return localStorage.getItem(KEY_USER_INFO);
};

export const removeToken = () => {
  return localStorage.removeItem(KEY_TOKEN);
};
export const removeUserInfo = () => {
  return localStorage.removeItem(KEY_USER_INFO);
};
