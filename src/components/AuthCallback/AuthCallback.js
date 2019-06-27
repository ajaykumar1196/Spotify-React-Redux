import React from "react";
import { Redirect } from "react-router-dom";
import { parse } from "qs";

import AuthService from "../../services/authService";

class AuthCallback extends React.Component {
  componentDidMount() {
    const query = parse(this.props.location.hash.substr(1));
    AuthService.setAuthToken(query.access_token);
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default AuthCallback;
