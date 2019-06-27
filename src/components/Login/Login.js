import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthService from '../../services/authService'
import AuthCallback from '../AuthCallback/AuthCallback'
class Login extends React.Component {
  renderLanding() {
    return (
      <div>
        <div>
          <h1>Login with spotify</h1>
          <a href={AuthService.login()}>Log-in</a>
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
