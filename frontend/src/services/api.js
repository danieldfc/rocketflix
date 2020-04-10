import axios from "axios";
import { getToken } from "./auth";
import { SERVER_URL_API } from "./conf";

const USER_TOKEN = getToken();
const AuthStr = "Bearer ".concat(USER_TOKEN);

export const api = axios.create({
  baseURL: SERVER_URL_API
});

api.interceptors.request.use(async config => {
  if (USER_TOKEN) {
    config.headers.common["Authorization"] = AuthStr;
  }
  return config;
});
