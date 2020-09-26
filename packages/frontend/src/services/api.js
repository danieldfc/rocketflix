import axios from 'axios';

import { getToken } from './auth';
import { SERVER_URL_API } from './conf';

const USER_TOKEN = getToken();
const AuthStr = 'Bearer '.concat(USER_TOKEN);

export const api = axios.create({
  baseURL: SERVER_URL_API,
});

api.interceptors.request.use(async config => {
  if (USER_TOKEN) {
    config.headers.common.Authorization = AuthStr;
  }
  return config;
});

export const apiGet = async path => {
  try {
    const res = await axios.get(`${SERVER_URL_API}${path}`, {
      headers: {
        Authorization: AuthStr,
      },
    });

    return res.data;
  } catch (err) {
    console.log(`call for was ${SERVER_URL_API} cancelled: ${err}`);
    throw err;
  }
};

export const apiPost = async (path, param) => {
  try {
    const res = await axios.post(`${SERVER_URL_API}${path}`, param, {
      headers: {
        Authorization: AuthStr,
      },
    });

    return res.data;
  } catch (err) {
    console.log(`call for was ${SERVER_URL_API} cancelled: ${err}`);
    throw err;
  }
};

export const apiDelete = async path => {
  try {
    const res = await axios.delete(`${SERVER_URL_API}${path}`, {
      headers: {
        Authorization: AuthStr,
      },
    });

    return res.data;
  } catch (err) {
    console.log(`call for was ${SERVER_URL_API} cancelled: ${err}`);
    throw err;
  }
};

export const apiUpdate = async (path, param) => {
  try {
    const res = await axios.put(`${SERVER_URL_API}${path}`, param, {
      headers: {
        Authorization: AuthStr,
      },
    });

    return res.data;
  } catch (err) {
    console.log(`call for was ${SERVER_URL_API} cancelled: ${err}`);
    throw err;
  }
};
