import axios from 'axios'

const apiUrl = '/api'

export function registerUser(user) {
  return axios.post(`${apiUrl}/register`, user)
}

export function loginUser(user) {
  return axios.post(`${apiUrl}/login`, user)
}