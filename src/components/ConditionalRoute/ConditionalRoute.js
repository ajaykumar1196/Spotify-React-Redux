import React from "react";
import { withRouter } from "react-router-dom";

import AuthService from "../../services/authService";

import Home from "../Home/Home";
import Login from "../Login/Login";

class ConditionalRoute extends React.Component {
  render() {
    return AuthService.isAuthenticated() ? <Home /> : <Login />;
  }
}

export default withRouter(ConditionalRoute);
