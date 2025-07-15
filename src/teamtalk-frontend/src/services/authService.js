import axios from "axios";

export const loginUser = async (email, password) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password }, { withCredentials: true });
};

export const registerUser = async (data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, data, { withCredentials: true });
};
