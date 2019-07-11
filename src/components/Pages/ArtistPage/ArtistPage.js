import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchArtist } from "../../../actions/artistActions";
import TrackObject from "../../TrackObject/TrackObject";
import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

class ArtistPage extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistID);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.artistID !== this.props.match.params.artistID
    ) {
      this.props.fetchArtist(this.props.match.params.artistID);
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
            {this.props.artist && this.props.artistRelatedArtists ? (
              <MediaObjectsContainer
                heading={"Related Artists"}
                items={this.props.artistRelatedArtists.artists}
                type={"artist"}
              />
            ) : (
                "Loading Artist..."
              )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    artist: state.artist.artist,
    artistRelatedArtists: state.artist.artistRelatedArtists,
    isartistFetching: state.artist.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchArtist
  }
)(withRouter(ArtistPage));
