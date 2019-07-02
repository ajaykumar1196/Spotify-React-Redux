import React from "react";
import "./MediaListContainer.css";
import PlaylistTrackObject from "../PlaylistTrackObject/PlaylistTrackObject";

class MediaListContainer extends React.Component {
  renderMediaList = ({ items, type }) => {
    return items.map(item => {
      return (
        <PlaylistTrackObject
          trackName={item.track.name}
          trackURL={item.track.preview_url}
          trackID={item.track.id}
          trackArtists={item.track.artists}
          trackAlbum={item.track.album}
        />
      );
    });
  };

  render() {
    return (
      <div className="mediaListContainer">
        <div>
          <h1 className="mediaListContainer-heading">{this.props.heading}</h1>
        </div>
        <div className="mediaListContainer-content">
          <div className="mediaListContainer-content-wrapper">
            {this.renderMediaList(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

export default MediaListContainer;
