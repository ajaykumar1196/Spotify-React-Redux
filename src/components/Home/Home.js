import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';
import Logout from '../Logout/Logout'
class Home extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.match.url === this.props.match.url;
  }

  render() {
    return (
      <div id="app">
        <div>
          <Switch>
            <Route path='/logout' component={Logout} />
          </Switch>
        </div>
      </div>
    );

  }
}

export default withRouter(Home);
