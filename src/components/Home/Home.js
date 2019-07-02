import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "circular-std";

import "./Home.css";

import * as RouteConstant from "../../constants/routeConstants";

import Player from "../Player/Player";
import Logout from "../Logout/Logout";
import NewReleases from "../NewReleases/NewReleases";
import Categories from "../Categories/Categories";
import PlaylistTrackObject from "../PlaylistTrackObject/PlaylistTrackObject";
import FeaturedPlaylists from "../FeaturedPlaylists/FeaturedPlaylists";
import PlaylistTracks from "../PlaylistTracks/PlaylistTracks";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {/* <Sidebar /> */}
        <PlaylistTrackObject />
        {/* <Artwork
          isActive={
            this.props.songID ===
            "https://p.scdn.co/mp3-preview/32cc6f7a3fca362dfcde753f0339f42539f15c9a"
          }
          songID={
            "https://p.scdn.co/mp3-preview/32cc6f7a3fca362dfcde753f0339f42539f15c9a"
          }
        /> */}
        <div className="main-section">
          <Switch>
            <Route exact path={RouteConstant.HOME} component={NewReleases} />
            <Route path={RouteConstant.CATEGORIES} component={Categories} />
            <Route
              path={RouteConstant.FEATURED_PLAYLIST}
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
        </div>
        {this.props.trackID ? <Player /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userProfile: state.user.userProfile,
    isFetching: state.user.isFetching,
    isPlaying: state.player.isPlaying,
    trackID: state.player.trackID,
    newReleasesAlbums: state.browse.newReleasesAlbums,
    isBrowseFetching: state.browse.isFetching
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Home));
