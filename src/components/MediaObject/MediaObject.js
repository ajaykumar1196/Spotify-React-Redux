import React from "react";
import { Link } from "react-router-dom";
import "./MediaObject.css";
class MediaObject extends React.Component {
  render() {
    return (
      <div className="media-object">
        <div className="media-object-container" style={{ maxWidth: "200px" }}>
          <div className="media-object-hoverable">
            <div className="media-object-wrapper ">
              <Link
                className="media-object-cover-art actionable shadow"
                to={this.props.link}
                style={{ width: "auto", height: "auto" }}
              >
                <div>
                  <div className="icon">
                    <svg
                      viewBox="0 0 80 81"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Playlist Icon</title>
                      <path
                        d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                        fill="#ffffff"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className="media-object-cover-art-image"
                    style={{
                      backgroundImage: `url(${this.props.artwork})`
                    }}
                  />
                </div>
              </Link>
            </div>
            <div className="mo-info">
              <div className="react-contextmenu-wrapper">
                <Link
                  className="mo-info-name"
                  title="New Music Friday"
                  dir="auto"
                  to={this.props.link}
                >
                  {this.props.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaObject;
