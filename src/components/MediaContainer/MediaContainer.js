import React from "react";
import "./MediaContainer.css";
import "circular-std";

import MediaObject from "../MediaObject/MediaObject";

class MediaContainer extends React.Component {
  renderMediaObjects = ({ items, type }) => {
    return items.map(item => {
      const pathName = type + "/" + item.id;
      const artwork = item.images ? item.images[0].url : item.icons[0].url;
      return (
        <MediaObject
          key={item.id}
          artwork={artwork}
          link={pathName}
          name={item.name}
        />
      );
    });
  };

  render() {
    return (
      <div className="mediaContainer">
        <div>
          <h1 className="mediaContainer-heading">{this.props.heading}</h1>
        </div>
        <div className="mediaContainer-content">
          <div className="mediaContainer-content-wrapper">
            {this.renderMediaObjects(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

export default MediaContainer;
