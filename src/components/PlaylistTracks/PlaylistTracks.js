import React from "react";
import { connect } from "react-redux";

import { fetchPlaylistTracks } from "../../actions/playlistActions";
import MediaListContainer from "../MediaListContainer/MediaListContainer";

class PlayListTracks extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistTracks(this.props.match.params.playlistID);
  }

  render() {
    return (
      <div>
        {this.props.playlistTracks ? (
          <MediaListContainer
            heading={"Playlist Items"}
            items={this.props.playlistTracks.items}
            type={"track"}
          />
        ) : (
          "Loading Tracks..."
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    playlistTracks: state.playlist.playlistTracks,
    isPlaylistTracksFetching: state.playlist.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPlaylistTracks
  }
)(PlayListTracks);
