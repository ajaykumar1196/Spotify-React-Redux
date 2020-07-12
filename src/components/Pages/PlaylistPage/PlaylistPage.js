import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPlaylistTracks } from "../../../actions/playlistActions";
import TrackObject from "../../TrackObject/TrackObject";
import MediaOwnerObject from "../../MediaOwnerObject/MediaOwnerObject";
import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

class PlaylistPage extends React.Component {
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

  renderMediaList = items => {
    return items.map(item => {
      return (
        <TrackObject
          key={item.track.id}
          trackName={item.track.name}
          trackURL={item.track.preview_url}
          trackID={item.track.id}
          trackArtists={item.track.artists}
          trackAlbum={item.track.album}
          trackDuration={item.track.duration_ms}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="contents">
          <div className="mediaContainer">
            {this.props.playlistTracks ? this.props.playlistTracks.tracks.items.length ?(
              <div>
                <MediaOwnerObject
                  artwork={this.props.playlistTracks.images[0].url}
                  name={this.props.playlistTracks.name}
                  owner={this.props.playlistTracks.owner}
                  numberOfTracks={this.props.playlistTracks.tracks.total}
                  type={"user"}
                />
                {this.renderMediaList(this.props.playlistTracks.tracks.items)}
              </div>
            ) : (
              <EmptyMessage title="Sorry, no tracks available!" subtitle="Explore other playlist."/>
            ) : (
              this.props.error ? <EmptyMessage title="404!" subtitle="Can't find the playlist."/> 
              :<Loader/>
              )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    playlistTracks: state.playlist.playlistTracks,
    isPlaylistTracksFetching: state.playlist.isFetching,
    error: state.playlist.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPlaylistTracks
  }
)(withRouter(PlaylistPage));
