/* global document */
import React, { Component } from "react";
import { connect } from "react-redux";
import { playSong } from "../actions/playerActions";
import * as Icon from "react-feather";
class ArtworkPlay extends Component {
  constructor() {
    super();
    this.playSong = this.playSong.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  playSong() {
    this.props.playSong(this.props.songID);
  }

  togglePlay() {
    const { isPlaying } = this.props.player;
    const audioElement = document.getElementById("audio");

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  }

  render() {
    const { isPlaying } = this.props.player;
    const { isActive } = this.props;
    return (
      <div style={{ background: "green" }}>
        <div
          role="button"
          tabIndex="0"
          onClick={isActive ? this.togglePlay : this.playSong}
        >
          {isActive && isPlaying ? <Icon.Pause /> : <Icon.Play />}
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
)(ArtworkPlay);
