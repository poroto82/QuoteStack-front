import axios from 'axios';
import { useNavigate } from "react-router-dom";

const apiUrl = '/api/v1'


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

export function saveUser(user,accountId) {
  if (typeof (user.id) == 'undefined' || user.id == null) {
    return axios.post(apiUrl + '/users', user,{ params: { accountId: accountId } })
  }
  else {
    const id = user.id
    delete user.id
    delete user.isEmailVerified
    delete user.role
    return axios.patch(apiUrl + '/users/' + id, user,{ params: { accountId: accountId } })
  }
}

export function deleteUser(id) {
  return axios.delete(apiUrl + '/users/' + id)
}

export function saveConn(conn, idUser) {
  if (typeof (conn.id) == 'undefined' || conn.id == null) {
    conn.user_id = idUser
    return axios.post(apiUrl + '/connections', conn)
  }
  else {
    const id = conn.id
    delete conn.id
    return axios.patch(apiUrl + '/connections/' + id, conn)
  }
}

export function deleteConn(id) {
  return axios.delete(apiUrl + '/connections/' + id)
}

export function deletePod(id) {
  return axios.delete(apiUrl + '/pods/' + id)
}

export function deleteAccount(id) {
  return axios.delete(apiUrl + '/accounts/' + id)
}


export function getConns() {
  return axios.get(apiUrl + '/connections');
}

export function getAccounts() {
  return axios.get(apiUrl + '/accounts');
}


export function saveAccount(acc) {
  if (typeof (acc.id) == 'undefined' || acc.id == null) {
    return axios.post(apiUrl + '/accounts', acc)
  }
  else {
    const id = acc.id
    delete acc.id
    delete acc.qtyUsers
    return axios.patch(apiUrl + '/accounts/' + id, acc)
  }
}

export function saveQueryHistory(qh) {
  return axios.post(apiUrl + '/query-history', qh)
}

export function getQueryHistory(qh) {
  return axios.get(apiUrl + '/query-history')
}

export function getPods(accountId) {
  return axios.get(apiUrl + '/pods', { params: { accountId: accountId } });
}

export function getTables(){
  return axios.get(apiUrl + '/fusiontables');
}

export function savePod(pod,accountId) {
  if (typeof (pod.id) == 'undefined' || pod.id == null) {
    return axios.post(apiUrl + '/pods', pod, { params: { accountId: accountId } })
  }
  else {
    const id = pod.id
    delete pod.id
    return axios.patch(apiUrl + '/pods/' + id, pod, { params: { accountId: accountId } })
  }
}

export function getUsers(accountId) {
  return axios.get(apiUrl + '/users', { params: { accountId: accountId } });
}

export function oConnect(id) {
  const q = {
    connectionId: id
  }
  return axios.post(apiUrl + '/query/connect', q)
}

export function runQuery(query, conn, cantRecords) {
  const q = {
    sql: query,
    conn: conn,
    cantRecords: cantRecords
  }
  return axios.post(apiUrl + '/query/executeQuery', q)
}