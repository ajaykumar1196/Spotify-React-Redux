import React from "react";
import { connect } from "react-redux";

import { fetchCurrentUserArtists } from "../../../actions/currentUserActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

class UserArtists extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserArtists();
  }

  render() {
    return (
      <div>
        {this.props.currentUserArtists ? (
          <MediaObjectsContainer
            heading={"Artists"}
            items={this.props.currentUserArtists.artists.items}
            type={"artist"}
          />
        ) : (
          "Loading Playlists..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.currentUser.currentUserArtists);
  return {
    currentUserArtists: state.currentUser.currentUserArtists
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrentUserArtists
  }
)(UserArtists);
