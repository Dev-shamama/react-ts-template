import axios from "axios";

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

api.interceptors.response.use(
  res => res,
  err => {
    console.error("AXIOS API error:", err);
    return Promise.reject(err);
  }
);

export default api