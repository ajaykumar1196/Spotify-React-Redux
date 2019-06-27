import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../../services/authService'
import Home from '../Home/Home';
import Login from '../Login/Login';

class ConditionalRoute extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.match.url === this.props.match.url;
  }

  render() {
    return (
      AuthService.isAuthenticated()
        ? <Home />
        : <Login />

    )
  }

}


export default withRouter(ConditionalRoute);
