import React from "react";
import { connect } from "react-redux";
import * as Icon from "react-feather";

import "circular-std";
import "./PlaylistTrackObject.css";

import { playSong } from "../../actions/playerActions";

class PlaylistTrackObject extends React.Component {
  playSong = () => {
    this.props.playSong(this.props.trackURL, this.props.trackID);
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
  render() {
    const { isPlaying } = this.props.player;
    const isActive = this.props.trackID === this.props.player.trackID;
    const isPlayable = this.props.trackURL ? true : false;

    return (
      <div
        onClick={isPlayable ? (isActive ? this.togglePlay : this.playSong) : ""}
        class={`track-object ${!isPlayable ? "track-object-not-playable" : ""}`}
        role="button"
        tabindex="0"
      >
        <div class="track-col position-outer">
          <div class="track-play-pause track-top-align">
            {isActive && isPlaying ? (
              <Icon.Pause className="icon-play" fill="currentColor" />
            ) : (
              <Icon.Play className="icon-play" fill="currentColor" />
            )}
          </div>
        </div>
        <div class="track-col name">
          <div class="track-name-wrapper track-top-align">
            <div class="track-name ellipsis-one-line" dir="auto">
              {this.props.trackName}
            </div>
            <div class="second-line">
              <span class="TrackListRow__artists ellipsis-one-line" dir="auto">
                <span class="react-contextmenu-wrapper">
                  <span class="Track__entity-by">By </span>
                  <a
                    disabled
                    tabindex="-1"
                    class="track-row__artist-name-link"
                    href="/artist/0Nrwy16xCPXG8AwkMbcVvo"
                  >
                    Black Pistol Fire
                  </a>
                </span>
              </span>
              <span class="second-line-separator" aria-label="in album">
                •
              </span>
              <span class="TrackListRow__album ellipsis-one-line" dir="auto">
                <span class="react-contextmenu-wrapper">
                  <a
                    tabindex="-1"
                    class="track-row__album-name-link"
                    href="/album/7DVKYtrPILCQxbUgP7EJ0a"
                  >
                    Pick Your Poison
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="track-col track-col-duration">
          <div class="track-duration track-top-align">
            <span>3:45</span>
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
