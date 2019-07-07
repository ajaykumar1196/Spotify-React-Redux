import React from "react";
import { connect } from "react-redux";

import { fetchCurrentUserPlaylists } from "../../../actions/currentUserActions";

import MediaContainer from "../../MediaContainer/MediaContainer";

class UserPlaylists extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserPlaylists();
  }

  render() {
    return (
      <div>
        {this.props.currentUserPlaylists ? (
          <MediaContainer
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
