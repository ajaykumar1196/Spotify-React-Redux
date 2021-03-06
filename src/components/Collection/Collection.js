import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import * as RouteConstant from "../../constants/routeConstants";
import { navBarLibraryItems } from "../../constants/navBarConstants";

import NavigationBar from "../NavigationBar/NavigationBar";
import UserPlaylists from "./UserPlaylists/UserPlaylists";
import UserArtists from "./UserArtists/UserArtists";
import UserAlbums from "./UserAlbums/UserAlbums"

class Collection extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar links={navBarLibraryItems} />
        <Switch>
          <Route path={RouteConstant.USER_PLAYLIST} component={UserPlaylists} />
          <Route path={RouteConstant.USER_ARTISTS} component={UserArtists} />
          <Route path={RouteConstant.USER_ALBUMS} component={UserAlbums} />
          <Route path={RouteConstant.USER_TRACKS} />
          <Redirect to={`${RouteConstant.USER_PLAYLIST}`} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Collection);
