import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import * as RouteConstant from "../../constants/routeConstants";
import { navBarBrowseItems } from "../../constants/navBarConstants";

import NavigationBar from "../NavigationBar/NavigationBar";
import NewReleases from "./NewReleases/NewReleases";
import FeaturedPlaylists from "./FeaturedPlaylists/FeaturedPlaylists";
import Categories from "./Categories/Categories";
import CategoryPlaylists from "./CategoryPlaylists/CategoryPlaylists";

class Browse extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar links={navBarBrowseItems} />
        <Switch>
          <Route path={RouteConstant.NEW_RELEASES} component={NewReleases} />
          <Route path={RouteConstant.CATEGORY_PLAYLISTS} component={CategoryPlaylists} />
          <Route path={RouteConstant.CATEGORIES} component={Categories} />
          <Route
            path={RouteConstant.FEATURED_PLAYLISTS}
            component={FeaturedPlaylists}
          />
          <Redirect to={RouteConstant.NEW_RELEASES} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Browse);
