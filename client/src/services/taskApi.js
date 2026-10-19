import axios from "axios";

const taskApi = axios.create({
  baseURL: "https://task-tracker-chi-bice.vercel.app/api/",
  withCredentials: true, // allows cookies if you want to rely on httpOnly cookie
});

// Request interceptor: attach token if present
taskApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
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
