import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status, statusText } = error.response;
    console.error(`Error! HTTP Status:${status} ${statusText}`);
    return Promise.reject;
  }
);

export default api;
