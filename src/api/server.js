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
export const logout = async (data) => {
  try {
    const response = await Api.post("/logout", data);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await Api.post("/project/create", projectData);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const getProjects = async () => {
  try {
    const response = await Api.get("/project/allProjects");
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const getProjectData = async (projectId) => {
  try {
    console.log("iam callign api", projectId);
    const response = await Api.get(`/project/data/${projectId}`);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};

export const addWidgetConfiguration = async (data) => {
  try {
    const response = await Api.post(`/project/addWidget`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const getWidgetConfiguration = async (projectId) => {
  try {
    const response = await Api.get(`/project/getWidget/${projectId}`);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};

export const createFile = async (fileData) => {
  try {
    const response = await Api.post("/file/create", fileData);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const deleteFile = async (fileData) => {
  try {
    const response = await Api.patch("/file/delete", fileData);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const getProjectFiles = async (projectId) => {
  try {
    const response = await Api.get(`/file/get/${projectId}`);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const getFileData = async (fileId) => {
  try {
    const response = await Api.get(`/file/getFileData/${fileId}`);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const editFileDescription = async (data) => {
  try {
    const response = await Api.put(`/file/editFile`, data);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const getUserData = async () => {
  try {
    const response = await Api.get(`/getUserData`);
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
export const editUserData = async (data) => {
  try {
    const response = await Api.put(`/editUser`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return errorHandle(error);
  }
};
