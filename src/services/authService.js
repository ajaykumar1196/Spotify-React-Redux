import { SCOPES } from '../constants/authConstants'
export default class AuthService {
  static setAuthToken = (token) => {
    localStorage.setItem('auth_token', token)
  }
  static getAuthToken = () => {
    return localStorage.getItem('auth_token')
  }
  static isAuthenticated = () => {
    return this.getAuthToken() !== null
  }
  static logout = () => {
    localStorage.removeItem('auth_token')
  }

  static login = () => {
    let queryArguments = [];
    queryArguments.push(`client_id=${process.env.REACT_APP_CLIENT_ID}`);
    queryArguments.push(`response_type=token`);
    queryArguments.push(`redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}/callback`)}`);
    queryArguments.push(`scope=${SCOPES.join(' ')}`);
    return `https://accounts.spotify.com/authorize/?${queryArguments.join('&')}`;

  }
}
