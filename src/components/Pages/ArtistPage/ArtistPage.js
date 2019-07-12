import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchArtist, fetchArtistRelatedArtists, fetchArtistTopTracks } from "../../../actions/artistActions";
import TrackObject from "../../TrackObject/TrackObject";
import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

class ArtistPage extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistID);
    this.props.fetchArtistRelatedArtists(this.props.match.params.artistID)
    this.props.fetchArtistTopTracks(this.props.match.params.artistID)
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.artistID !== this.props.match.params.artistID
    ) {
      this.props.fetchArtist(this.props.match.params.artistID);
      this.props.fetchArtistRelatedArtists(this.props.match.params.artistID)
      this.props.fetchArtistTopTracks(this.props.match.params.artistID)
    }
  }

  renderMediaList = items => {
    return items.map(item => {
      return (
        <TrackObject
          key={item.id}
          trackName={item.name}
          trackURL={item.preview_url}
          trackID={item.id}
          trackArtists={item.artists}
          trackAlbum={item.album}
          trackDuration={item.duration_ms}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="contents">
          <div className="mediaContainer">
            {this.props.artist && this.props.artistRelatedArtists && this.props.artistTopTracks ? (
              <div>
                <div>
                  <div>
                    <h1 className="mediaContainer-heading">Top Tracks</h1>
                  </div>
                  {this.renderMediaList(this.props.artistTopTracks.tracks.slice(1, 6))}
                </div>
                < MediaObjectsContainer
                  heading={"Related Artists"}
                  items={this.props.artistRelatedArtists.artists}
                  type={"artist"}
                />
              </div>
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
    artistTopTracks: state.artist.artistTopTracks,
    isartistFetching: state.artist.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchArtist,
    fetchArtistRelatedArtists,
    fetchArtistTopTracks
  }
)(withRouter(ArtistPage));
