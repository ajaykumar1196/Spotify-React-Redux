import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Logout from '../Logout/Logout';

class Home extends React.Component {

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
