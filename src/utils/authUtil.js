import AuthService from '../services/authService';
import axios from 'axios'

const authHeader = () => {
  let _auth_token = AuthService.getAuthToken();
  if (_auth_token) {
    return {
      'Authorization': 'Bearer ' + _auth_token
    }
  } else {
    return {}
  }
}

export const spotify = () => {
  let handleResponse = axios.defaults.transformResponse.push(function (data, headers) {
    if (data.error && data.error.status === 401) {
      AuthService.logout();
      window.location.href = AuthService.login();
    }
    return data;
  });

  return axios.create({
    authHeader, handleResponse
  })
}