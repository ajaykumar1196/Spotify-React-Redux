import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPlaylistTracks } from "../../actions/playlistActions";
import MediaListContainer from "../MediaListContainer/MediaListContainer";

class PlayListTracks extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylistTracks(this.props.match.params.playlistID);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.playlistID !== this.props.match.params.playlistID
    ) {
      this.props.fetchPlaylistTracks(this.props.match.params.playlistID);
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.playlistTracks ? (
          <MediaListContainer
            heading={this.props.playlistTracks.name}
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
)(withRouter(PlayListTracks));
