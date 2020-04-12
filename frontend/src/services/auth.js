import axios from "axios";

import { SERVER_URL_API, TOKEN_KEY } from "./conf";

export const isAuthenticated = () => {
  if (sessionStorage.getItem(TOKEN_KEY) !== null) {
    return true;
  }
  return true;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = async data => {
  const LOGIN_ENDPOINT = `${SERVER_URL_API}/login`;

  const res = await axios.post(LOGIN_ENDPOINT, data);

  if (res.status === 200 && res.data.token && res.data.expireAt) {
    const jwt = res.data.token;
    const expire_at = res.data.expireAt;

    localStorage.setItem(TOKEN_KEY, jwt);
    localStorage.setItem("expire_at", expire_at);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.clear();
};
