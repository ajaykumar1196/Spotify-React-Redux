import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchUser } from "../../actions/userActions";

import Logout from '../Logout/Logout';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchUser()

  }

  render() {

    if (this.props.isFetching || !this.props.userProfile) {
      console.log(this.props)
      return <h1>Loading...</h1>
    }
    return (
      <div id="app">
        {this.props.userProfile.email}
        <div>
          <Switch>
            <Route path='/logout' component={Logout} />
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
