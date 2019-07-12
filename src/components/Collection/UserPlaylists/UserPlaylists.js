import React from "react";
import { connect } from "react-redux";

import { fetchCurrentUserPlaylists } from "../../../actions/currentUserActions";

import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";
import EmptyMessage from "../../EmptyMessage/EmptyMessage";

class UserPlaylists extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUserPlaylists();
  }

  render() {
    return (
      <div className="mediaContainer">
        {this.props.currentUserPlaylists ?
          this.props.currentUserPlaylists.items.length ? (
            <MediaObjectsContainer
              heading={"Playlists"}
              items={this.props.currentUserPlaylists.items}
              type={"playlist"}
            />
          ) : <EmptyMessage title="Like your favourite artists" subtitle="Follow artists you love to listen." /> : (
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
