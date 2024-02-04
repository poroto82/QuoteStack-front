import axios from 'axios';

const apiUrl = '/api'

export function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function getRandomQuote(refresh = false) {
  let url = apiUrl + '/quotes/random'
  const params = new URLSearchParams({
    forceRefresh: refresh
  });
  return axios.get(url + '?' +params.toString());
}

export function getQuotes(refresh = false, limit = 5) {
  let url = apiUrl + '/quotes'
  const params = new URLSearchParams({
    forceRefresh: refresh,
    limit: limit
  });
  return axios.get(url + '?' +params.toString());
}

export function getUserQuotes(){
  return axios.get(apiUrl + '/user/quotes');
}

export function saveUserQuote(quote){
  return axios.post(apiUrl + '/user/quotes',quote)
}

export function deleteUserQuote(idQuote){
  return axios.delete(apiUrl + '/user/quotes/' + idQuote)
}


export function getUsersAndQuotes(){
  return axios.get(apiUrl + '/users')
}