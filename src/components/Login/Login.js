import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthService from '../../services/authService'
import AuthCallback from '../AuthCallback/AuthCallback'
import './Login.css'
class Login extends React.Component {
  renderLanding() {
    return (
      <div className="wrapper">
        <div className="center-login">
          <h2>LOGIN WITH SPOTIFY</h2>
          <a className="btn btn-login cta-button" href={AuthService.login()}>Log-in</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Switch>
        <Route path="/callback" component={AuthCallback} />
        <Route path="/" component={this.renderLanding} />
      </Switch>
    );
  }
}

export default Login;
