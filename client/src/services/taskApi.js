import axios from "axios";

const taskApi = axios.create({
  baseURL: "/api",
  withCredentials: true, // allows cookies if you want to rely on httpOnly cookie
  
})

export default taskApi;
