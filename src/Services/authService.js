import axios from 'axios'

const apiUrl = '/api'

export function registerUser(user) {
  return axios.post(`${apiUrl}/auth/register`, user)
}

export function loginUser(user) {
  return axios.post(`${apiUrl}/login`, user).catch(()=>alert('algo salio mal'))
}