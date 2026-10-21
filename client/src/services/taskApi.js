import axios from "axios";

const taskApi = axios.create({
  baseURL: "/api",
  withCredentials: true, // allows cookies if you want to rely on httpOnly cookie
});

// Request interceptor: attach token if present
taskApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401 errors (invalid/expired token)
taskApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default taskApi;
