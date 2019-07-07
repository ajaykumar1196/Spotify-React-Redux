import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import * as RouteConstant from "../../constants/routeConstants";
import { navBarLibraryItems } from "../../constants/navBarConstants";

import NavigationBar from "../NavigationBar/NavigationBar";
import RecentlyPlayed from "./RecentlyPlayed/RecentlyPlayed";

class Collection extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar links={navBarLibraryItems} />
        <Switch>
          <Route
            path={RouteConstant.USER_RECENTLY_PLAYED}
            component={RecentlyPlayed}
          />
          <Route path={RouteConstant.USER_PLAYLIST} />
          <Route path={RouteConstant.USER_ARTISTS} />
          <Route path={RouteConstant.USER_ALBUMS} />
          <Route path={RouteConstant.USER_ALBUMS} />
          <Redirect to={`${RouteConstant.USER_RECENTLY_PLAYED}`} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Collection);
