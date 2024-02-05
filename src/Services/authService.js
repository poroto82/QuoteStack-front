import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const apiUrl = '/api'

export function registerUser(user) {
  return axios.post(`${apiUrl}/register`, user)
}

export function loginUser(user) {
  return axios.post(`${apiUrl}/login`, user)
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.setItem("loggedUser", null);
      const navigate = useNavigate();
      navigate("/today", { replace: true });
    }

    return Promise.reject(error);
  }
);