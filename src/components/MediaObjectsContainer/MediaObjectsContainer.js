import React from "react";
import "./MediaObjectsContainer.css";
import "circular-std";

import MediaObject from "../MediaObject/MediaObject";

class MediaObjectsContainer extends React.Component {
  renderMediaObjects = (items, type) => {
    return items.map(item => {
      const pathName = "/" + type + "/" + item.id;
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
      <div>
        <div>
          <h1 className="mediaContainer-heading">{this.props.heading}</h1>
        </div>
        <div className="mediaContainer-content">
          <div className="mediaContainer-content-wrapper">
            {this.renderMediaObjects(this.props.items, this.props.type)}
          </div>
        </div>
      </div>
    );
  }
}

export default MediaObjectsContainer;
