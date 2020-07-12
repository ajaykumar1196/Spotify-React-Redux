import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAlbumTracks } from "../../../actions/albumActions";

import TrackObject from "../../TrackObject/TrackObject";
import MediaOwnerObject from "../../MediaOwnerObject/MediaOwnerObject";

import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

class AlbumPage extends React.Component {
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
          activeID={this.props.match.params.albumID}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="contents">
          <div className="mediaContainer">
            {this.props.albumTracks ? this.props.albumTracks.tracks.items.length ? (
              <div>
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
            )  : (
              <EmptyMessage title="Sorry, no tracks available!" subtitle="Explore other albums."/>
            ) : (
              this.props.error ? <EmptyMessage title="404!" subtitle="Can't find the album."/> 
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
    albumTracks: state.album.albumTracks,
    isAlbumTracksFetching: state.album.isFetching,
    error: state.album.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAlbumTracks
  }
)(withRouter(AlbumPage));
