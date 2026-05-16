import axios from "axios";


export const API = axios.create({
  baseURL: "https://portafolioreact-ejat.onrender.com/api",
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
