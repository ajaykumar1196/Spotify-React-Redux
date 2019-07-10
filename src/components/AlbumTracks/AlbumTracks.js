import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAlbumTracks } from "../../actions/albumActions";

import TrackObject from "../TrackObject/TrackObject";
import MediaOwnerObject from "../MediaOwnerObject/MediaOwnerObject";

class AlbumTracks extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumTracks(this.props.match.params.albumID);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.albumID !== this.props.match.params.albumID) {
      this.props.fetchAlbumTracks(this.props.match.params.albumID);
    }
  }

  renderMediaList = (items, album) => {
    return items.map(item => {
      return (
        <TrackObject
          key={item.id}
          trackName={item.name}
          trackURL={item.preview_url}
          trackID={item.id}
          trackArtists={item.artists}
          trackAlbum={album}
          trackDuration={item.duration_ms}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="contents">
          {this.props.albumTracks ? (
            <div>
              <div className="mediaContainer">
                <MediaOwnerObject
                  artwork={this.props.albumTracks.images[0].url}
                  name={this.props.albumTracks.name}
                  owner={this.props.albumTracks.artists}
                  numberOfTracks={this.props.albumTracks.tracks.total}
                  type={"artist"}
                />
                {this.renderMediaList(
                  this.props.albumTracks.tracks.items,
                  this.props.albumTracks
                )}
              </div>
            </div>
          ) : (
            "Loading Tracks..."
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    albumTracks: state.album.albumTracks,
    isAlbumTracksFetching: state.album.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAlbumTracks
  }
)(withRouter(AlbumTracks));
