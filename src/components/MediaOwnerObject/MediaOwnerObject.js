import React from "react";
import { Link } from "react-router-dom";

import "./MediaOwnerObject.css";

import { trackArtists } from "../../utils/trackUtil";

class MediaOwnerObject extends React.Component {
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
    return (
      <header className="TrackListHeader">
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
                  backgroundImage: `url(${this.props.artwork})`
                }}
              />
            </div>
          </div>
        </div>
        <div className="TrackListHeader__body">
          <div className="TrackListHeader__entity-name">
            <h2>
              <span dir="auto">{this.props.name}</span>
            </h2>
            <div>
              <span className="TrackListHeader__entity-by">By </span>
              <span className="TrackListHeader__owner" dir="auto">
                {this.props.type === "user" ? (
                  <Link to={`/user/${this.props.owner.id}`}>
                    {this.props.owner.display_name}
                  </Link>
                ) : (
                  this.renderArtists(this.props.owner)
                )}
              </span>
            </div>
          </div>
          <p className="TrackListHeader__text-silence TrackListHeader__entity-additional-info">
            {this.props.numberOfTracks} Songs
          </p>
        </div>
      </header>
    );
  }
}

export default MediaOwnerObject;
