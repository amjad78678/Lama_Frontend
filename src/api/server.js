import axios from "axios";
import errorHandle from "./error";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const Api = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const login = async (userData) => {
  try {
    const response = await Api.post("/login", userData);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const signup = async (userData) => {
  try {
    const response = await Api.post("/signup", userData);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
