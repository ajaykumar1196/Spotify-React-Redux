import React from "react";
import { connect } from "react-redux";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

import "circular-std";
import "./PlaylistTrackObject.css";

import { playSong } from "../../actions/playerActions";

import { formatSeconds } from "../../utils/numbersUtil";
import { trackArtists } from "../../utils/trackUtil";

class PlaylistTrackObject extends React.Component {
  playSong = () => {
    this.props.playSong(
      this.props.trackURL,
      this.props.trackID,
      this.props.trackName,
      this.props.trackAlbum.images[0].url,
      this.props.trackAlbum.id,
      this.props.trackArtists
    );
  };

  togglePlay = () => {
    const { isPlaying } = this.props.player;
    const audioElement = document.getElementById("audio");

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  renderArtists = artists => {
    return trackArtists(artists).map((artist, index, artists) => {
      return (
        <span key={artist.id}>
          <Link
            disabled
            tabIndex="-1"
            className="track-row__artist-name-link"
            to={`/artist/${artist.id}`}
          >
            {artist.name}
          </Link>

          {index < artists.length - 1 ? (
            <span className="artists-separator">, </span>
          ) : (
            ""
          )}
        </span>
      );
    });
  };
  render() {
    const { isPlaying } = this.props.player;
    const isActive = this.props.trackID === this.props.player.trackID;
    const isPlayable = this.props.trackURL ? true : false;

    return (
      <div
        onClick={
          isPlayable ? (isActive ? this.togglePlay : this.playSong) : null
        }
        className={`track-object ${
          !isPlayable ? "track-object-not-playable" : ""
        }`}
        role="button"
        tabIndex="0"
      >
        <div className="track-col position-outer">
          <div className="track-play-pause track-top-align">
            {isActive && isPlaying ? (
              <Icon.Pause
                className="icon-play"
                fill="#1ed760"
                color="#1ed760"
              />
            ) : (
              <Icon.Play className="icon-play" fill="currentColor" />
            )}
          </div>
        </div>

        <div className="track-col track-top-align position-outer track-col-cover-art-thumb">
          <div
            className="media-object-cover-art track-middle-align media-object-cover-art--with-auto-height"
            aria-hidden="true"
            style={{ width: "50px", height: "auto" }}
          >
            <div>
              <div className="icon">
                <svg viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                  <title>Playlist Icon</title>
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
                  backgroundImage: `url(${this.props.trackAlbum.images[0].url})`
                }}
              />
            </div>
          </div>
        </div>

        <div className="track-col name">
          <div className="track-name-wrapper track-top-align">
            <div className="track-name ellipsis-one-line" dir="auto">
              {this.props.trackName}
            </div>
            <div className="second-line">
              <span
                className="TrackListRow__artists ellipsis-one-line"
                dir="auto"
              >
                <span className="react-contextmenu-wrapper">
                  <span className="Track__entity-by">By </span>
                  {this.renderArtists(this.props.trackArtists)}
                </span>
              </span>
              <span className="second-line-separator" aria-label="in album">
                •
              </span>
              <span
                className="TrackListRow__album ellipsis-one-line"
                dir="auto"
              >
                <span className="react-contextmenu-wrapper">
                  <Link
                    tabIndex="-1"
                    className="track-row__album-name-link"
                    to={`/album/${this.props.trackAlbum.id}`}
                  >
                    {this.props.trackAlbum.name}
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="track-col track-col-duration">
          <div className="track-duration track-top-align">
            <span>
              {formatSeconds(Math.floor(this.props.trackDuration / 1000))}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

export default connect(
  mapStateToProps,
  { playSong }
)(PlaylistTrackObject);
