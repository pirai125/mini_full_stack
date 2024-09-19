import axios from "axios";

const api_front = axios.create({
  baseURL: "http://localhost:3700",
});

export default api_front;
