import React from "react";
import {  withRouter } from "react-router-dom";
import './Logout.css';
import AuthService from "../../services/authService";

class Logout extends React.Component {
  handleClick = () => {
    AuthService.logout();
    this.props.history.push("/");
  }

  render() {
    return <button className="btn btn-logout cta-button" onClick={this.handleClick}>Logout</button>;
  }
}

export default withRouter(Logout);
