import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "circular-std";

import "./Home.css";

import * as RouteConstant from "../../constants/routeConstants";

import Player from "../Player/Player";
import Logout from "../Logout/Logout";
import NewReleases from "../NewReleases/NewReleases";
import Categories from "../Categories/Categories";
import FeaturedPlaylists from "../FeaturedPlaylists/FeaturedPlaylists";
import PlaylistTracks from "../PlaylistTracks/PlaylistTracks";
import Sidebar from "../Sidebar/Sidebar";

class Home extends React.Component {
  render() {
    return (
      <div className="Root__container">
        <Sidebar />

        <Switch>
          <Route exact path={RouteConstant.HOME} component={NewReleases} />
          <Route path={RouteConstant.CATEGORIES} component={Categories} />
          <Route
            path={RouteConstant.FEATURED_PLAYLISTS}
            component={FeaturedPlaylists}
          />
          <Route path={RouteConstant.PLAYLIST} component={PlaylistTracks} />
          {/*<Route path={RouteConstant.CATEGORIES} />
            <Route path={RouteConstant.DISCOVER} />
            <Route path={RouteConstant.ALBUM} />
            <Route path={RouteConstant.ARTIST} />
            <Route path={RouteConstant.USER_RECENTLY_PLAYED} />
            <Route path={RouteConstant.USER_PLAYLIST} />
            <Route path={RouteConstant.USER_ARTISTS} />
            <Route path={RouteConstant.USER_ALBUMS} />
            <Route path={RouteConstant.USER_ALBUMS} /> */}
          <Route path={RouteConstant.LOGOUT} component={Logout} />
        </Switch>

        {this.props.trackID ? <Player /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    trackID: state.player.trackID
  };
};

export default connect(mapStateToProps)(withRouter(Home));
