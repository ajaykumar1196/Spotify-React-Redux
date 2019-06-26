
export default class AuthService {

  setAuthToken = (_auth_token) => {
    localStorage.setItem('_auth_token', _auth_token)
  }
  getAuthToken = () => {
    return localStorage.getItem('_auth_token')
  }
  isLoggedIn = () => {
    return this.getToken() !== null
  }
  logout = () => {
    localStorage.removeItem('_auth_token')
  }

  login = () => {
    let queryArguments = [];
    queryArguments.push(`client_id=${process.env.REACT_APP_CLIENT_ID}`);
    queryArguments.push(`response_type=token`);
    queryArguments.push(`redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}${window.location.pathname}auth-callback`)}`);
    queryArguments.push(`scope=${this.allScopes.join(' ')}`);
    return `https://accounts.spotify.com/authorize/?${queryArguments.join('&')}`;

  }
}
