import axios from 'axios';
import { useNavigate } from "react-router-dom";

const apiUrl = '/api'

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Aquí puedes manejar la respuesta 401 de forma global
      console.log('Respuesta 401 recibida');
      localStorage.setItem("loggedUser", null);
      const navigate = useNavigate();
      navigate("/", { replace: true });
      // Realizar alguna acción, como redirigir al usuario a la página de inicio de sesión
    }

    return Promise.reject(error);
  }
);


export function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}


export function getRandomQuote() {
  return axios.get(apiUrl + '/quotes/random');
}
