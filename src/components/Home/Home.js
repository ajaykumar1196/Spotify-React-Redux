import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchUser } from "../../actions/userActions";

import * as RouteConstant from '../../constants/routeConstants'

import Sidebar from '../Sidebar/Sidebar';
import Logout from '../Logout/Logout';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchUser()

  }

  render() {

    if (this.props.isFetching || !this.props.userProfile) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="home">
        <Sidebar />
        <div className="main-section">
          <Switch>
            <Route path={RouteConstant.HOME} />
            <Route path={RouteConstant.RECENTLY_PLAYED} />
            <Route path={RouteConstant.} />
            <Route path={RouteConstant} />
            <Route path={RouteConstant} />
            <Route path={RouteConstant} />
            <Route path={RouteConstant} />
            <Route path={RouteConstant} />
            <Route path={RouteConstant.Logout} />
          </Switch>
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.user.userProfile,
    isFetching: state.user.isFetching
  }
}

export default connect(mapStateToProps,
  {
    fetchUser
  })(withRouter(Home));
