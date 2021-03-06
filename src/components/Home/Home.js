import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";


import "./Home.css";

import * as RouteConstant from "../../constants/routeConstants";

import Player from "../Player/Player";
import Logout from "../Logout/Logout";
import PlaylistPage from "../Pages/PlaylistPage/PlaylistPage";
import Sidebar from "../Sidebar/Sidebar";
import Collection from "../Collection/Collection";
import Browse from "../Browse/Browse";
import AlbumPage from "../Pages/AlbumPage/AlbumPage";
import ArtistPage from "../Pages/ArtistPage/ArtistPage"

class Home extends React.Component {
  render() {
    return (
      <div className="Root__container">
        <Sidebar />
        <Switch>
          <Route path={RouteConstant.BROWSE} component={Browse} />
          <Route path={RouteConstant.PLAYLIST} component={PlaylistPage} />
          <Route path={RouteConstant.ALBUM} component={AlbumPage} />
          <Route path={RouteConstant.ARTIST} component={ArtistPage} />
          <Route path={RouteConstant.COLLECTION} component={Collection} />
          <Route path={RouteConstant.LOGOUT} component={Logout} />
          <Redirect to={RouteConstant.BROWSE} />
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
