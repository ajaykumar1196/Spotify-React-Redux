import React from "react";
import { connect } from "react-redux";

import { fetchCurrentUserPlaylists } from "../../../actions/currentUserActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

class UserPlaylists extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserPlaylists();
  }

  render() {
    return (
      <div>
        {this.props.currentUserPlaylists ? (
          <MediaObjectsContainer
            heading={"Playlists"}
            items={this.props.currentUserPlaylists.items}
            type={"playlist"}
          />
        ) : (
          "Loading Playlists..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserPlaylists: state.currentUser.currentUserPlaylists
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrentUserPlaylists
  }
)(UserPlaylists);
