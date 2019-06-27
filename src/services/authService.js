
export default class AuthService {
  static get allScopes() {
    return [
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
      'streaming',
      'ugc-image-upload',
      'user-follow-modify',
      'user-follow-read',
      'user-library-read',
      'user-library-modify',
      'user-read-private',
      'user-read-birthdate',
      'user-read-email',
      'user-top-read',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played'
    ];
  }

  static setAuthToken = (token) => {
    localStorage.setItem('_auth_token', token)
  }
  static getAuthToken = () => {
    return localStorage.getItem('_auth_token')
  }
  static isAuthenticated = () => {
    return this.getAuthToken() !== null
  }
  static logout = () => {
    localStorage.removeItem('_auth_token')
  }

  static login = () => {
    console.log(process.env.REACT_APP_CLIENT_ID)
    let queryArguments = [];
    queryArguments.push(`client_id=${process.env.REACT_APP_CLIENT_ID}`);
    queryArguments.push(`response_type=token`);
    queryArguments.push(`redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}${window.location.pathname}callback`)}`);
    queryArguments.push(`scope=${this.allScopes.join(' ')}`);
    return `https://accounts.spotify.com/authorize/?${queryArguments.join('&')}`;

  }
}
