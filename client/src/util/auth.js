/* 
  This file contains utility functions for auth services.
*/
import axios from "axios";
import jwtDecode from "jwt-decode";

const readToken = () => window.localStorage.getItem("token");
const saveToken = (token) => window.localStorage.setItem("token", token);
const removeToken = () => window.localStorage.removeItem("token");
const decodeToken = () => jwtDecode(readToken());

const isLoggedIn = () => {
  if (readToken()) {
    const { exp } = decodeToken();
    return exp * 1000 > Date.now();
  }
};

// adds auth headers for same origin requests if user is logged in
const authRequestMiddleware = (config) => {
  // if user is logged in and request is same origin include token in header
  if (isLoggedIn() && config.url[0] === "/") {
    config.headers.common["Authorization"] = `Bearer ${readToken()}`;
  }

  // request is for another origin, don't include token in header
  return config;
};

const initAuth = () => {
  // add middleware to axios
  axios.interceptors.request.use(authRequestMiddleware, (err) =>
    Promise.reject(err)
  );
};

const login = ({ username, password }) => {
  return axios
    .post("/api/auth/login", { username, password })
    .then((response) => {
      const { token } = response.data;
      saveToken(token);
      return decodeToken();
    })
    .catch((error) => {
      removeToken();
      return Promise.reject(error);
    });
};

const signup = ({ username, password }) => {
  return axios
    .post("/api/auth/signup", { username, password })
    .then((response) => {
      const { token } = response.data;
      saveToken(token);
      return decodeToken();
    });
};

const logout = () => removeToken();

export { initAuth, login, logout, isLoggedIn, signup };
