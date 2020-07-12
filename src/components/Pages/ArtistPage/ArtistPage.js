import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./ArtistPage.css"

import { fetchArtist, fetchArtistRelatedArtists, fetchArtistTopTracks } from "../../../actions/artistActions";

import TrackObject from "../../TrackObject/TrackObject";
import MediaObjectsContainer from "../../MediaObjectsContainer/MediaObjectsContainer";

import EmptyMessage from "../../EmptyMessage/EmptyMessage";
import Loader from '../../Loader/Loader';

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
        <div>
          {this.props.artist && this.props.artistRelatedArtists && this.props.artistTopTracks ? this.props.artistTopTracks.tracks.length ? (
            <div>

              <div className="contents">
                <div className="mediaContainer">
                  <header className="artist-header" >
                    <div className="owner-media-object">
                      <div
                        className="media-object-cover-art track-middle-align media-object-cover-art--with-auto-height"
                        aria-hidden="true"
                        style={{ width: "auto", height: "auto" }}
                      >
                        <div>
                          <div className="icon">
                            <svg viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                              <title>Play Icon</title>
                              <path
                                d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                                fill="#ffffff"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div
                            className="media-object-cover-art-image media-object-cover-art-image-loaded"
                            style={{
                              backgroundImage: `url('${this.props.artist.images[0].url}')`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="TrackListHeader__body">
                      <div className="TrackListHeader__entity-name">
                        <h1 className="large" dir="auto">{this.props.artist.name}</h1>
                      </div>
                      <span className="TrackListHeadeer__entity-followers">{this.props.artist.followers.total.toLocaleString()} followers</span>

                    </div>
                  </header>

                  <div>
                    <h1 className="mediaContainer-heading">Top Tracks</h1>
                  </div>
                  {this.renderMediaList(this.props.artistTopTracks.tracks.slice(1, 6))}
                  < MediaObjectsContainer
                    heading={"Related Artists"}
                    items={this.props.artistRelatedArtists.artists}
                    type={"artist"}
                  />
                </div>
              </div>
            </div>
          ) : (
            <EmptyMessage title="Sorry, no tracks available!" subtitle="Explore other artists."/>
          ) : (
            this.props.error ? <EmptyMessage title="404!" subtitle="Can't find the artist."/> 
            :<Loader/>
            )}
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
    isartistFetching: state.artist.isFetching,
    error: state.artist.error
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
