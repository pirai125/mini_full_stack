import axios from "axios";

const api_back = axios.create({
  baseURL: "http://localhost:3700",
});

export default api_back;
