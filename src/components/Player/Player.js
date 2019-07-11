import React from "react";
import { connect } from "react-redux";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

import "./Player.css";

import { formatSeconds } from "../../utils/numbersUtil";
import { trackArtists } from "../../utils/trackUtil";

import {
  onLoadedMetaData,
  onLoadStart,
  onPause,
  onPlay,
  onTimeUpdate,
  onVolumeChange,
  playSong,
  toggleRepeat,
  toggleShuffle
} from "../../actions/playerActions";

import Slider from "./Slider/Slider";

class Player extends React.Component {
  constructor() {
    super();
    this.audioElement = null;
  }

  componentDidMount() {
    if (this.props.player.trackID) {
      this.audioElement.play();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.player.trackID !== this.props.player.trackID) {
      this.audioElement.play();
    }
  }

  onLoadedMetaData = () => {
    this.props.onLoadedMetaData(Math.floor(this.audioElement.duration));
  };

  onLoadStart = () => {
    this.props.onLoadStart();
  };

  onPlay = () => {
    this.props.onPlay();
  };

  onPause = () => {
    this.props.onPause();
  };

  onTimeUpdate = () => {
    this.props.onTimeUpdate(Math.floor(this.audioElement.currentTime));
  };

  onVolumeChange = () => {
    this.props.onVolumeChange(
      this.audioElement.volume,
      this.audioElement.muted
    );
  };

  changeCurrentTime = currentTime => {
    this.audioElement.currentTime = currentTime;
  };

  changeVolume = volume => {
    this.audioElement.muted = false;
    this.audioElement.volume = volume;
  };

  toggleMuted = () => {
    this.audioElement.muted = !this.audioElement.muted;
  };

  togglePlay = () => {
    if (this.audioElement.paused) {
      this.audioElement.play();
    } else {
      this.audioElement.pause();
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
    const volume = this.props.player.muted ? 0 : this.props.player.volume;
    return (
      <div>
        <audio
          id="audio"
          onEnded={this.onEnded}
          onLoadedMetadata={this.onLoadedMetaData}
          onLoadStart={this.onLoadStart}
          onPause={this.onPause}
          onPlay={this.onPlay}
          onTimeUpdate={this.onTimeUpdate}
          onVolumeChange={this.onVolumeChange}
          ref={audioElement => {
            this.audioElement = audioElement;
          }}
          src={this.props.player.trackURL}
        />

        <div className="Root__now-playing-bar">
          <footer className="now-playing-bar-container">
            <div className="now-playing-bar">
              <div className="now-playing-bar__left">
                <div className="now-playing">
                  <span className="now-playing__widget-overlay">
                    <Link to={`/album/${this.props.player.trackAlbumID}`}>
                      <div className="now-playing__cover-art">
                        <div className="cover-art shadow">
                          <div className="icon">
                            <Icon.Music color="#ffffff" />
                          </div>
                          <div
                            style={{
                              backgroundImage: `url(${
                                this.props.player.trackArtwork
                              })`
                            }}
                            className="cover-art-image cover-art-image-loaded"
                          />
                        </div>
                      </div>
                    </Link>
                  </span>
                  <div className="track-info ellipsis-one-line">
                    <div className="track-info__name ellipsis-one-line">
                      <div className="react-contextmenu-wrapper">
                        <Link to={`/album/${this.props.player.trackAlbumID}`}>
                          {this.props.player.trackName}
                        </Link>
                      </div>
                    </div>
                    <div className="track-info__artists ellipsis-one-line">
                      {this.renderArtists(this.props.player.trackArtists)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="now-playing-bar__center">
                <div className="player-controls" dir="ltr">
                  <div className="player-controls__buttons">
                    <div
                      onClick={this.props.toggleShuffle}
                      className="control-button"
                      title="Enable shuffle"
                    >
                      <Icon.Shuffle
                        color={
                          this.props.player.shuffle ? "#ffffff" : "#b3b3b3"
                        }
                      />
                    </div>
                    <div className="control-button" title="Enable skipBack">
                      <Icon.SkipBack />
                      {/* onClick={playPrevSong} */}
                    </div>
                    <div
                      onClick={this.togglePlay}
                      className="control-button play-button"
                      title="Enable play"
                    >
                      {this.props.player.isPlaying ? (
                        <Icon.Pause fill={"currentColor"} />
                      ) : (
                        <Icon.Play fill={"currentColor"} />
                      )}
                    </div>

                    <div className="control-button" title="Enable skipForward">
                      <Icon.SkipForward />
                    </div>
                    <div
                      onClick={this.props.toggleRepeat}
                      className="control-button"
                      title="Enable repeat"
                    >
                      <Icon.Repeat
                        color={this.props.player.repeat ? "#ffffff" : "#b3b3b3"}
                      />
                    </div>
                  </div>
                  <div className="playback-bar">
                    <div className="playback-bar__progress-time">
                      {formatSeconds(this.props.player.currentTime)}
                    </div>

                    <Slider
                      max={this.props.player.duration}
                      onChange={this.changeCurrentTime}
                      value={this.props.player.currentTime}
                    />
                    <div className="playback-bar__progress-time">
                      {formatSeconds(this.props.player.duration)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="now-playing-bar__right">
                <div className="now-playing-bar__right__inner">
                  <div className="ExtraControls">
                    <div className="volume-bar" dir="ltr">
                      <div
                        onClick={this.toggleMuted}
                        className="control-button"
                        title="Enable volume"
                      >
                        {volume === 0 ? (
                          <Icon.VolumeX />
                        ) : volume > 0.5 ? (
                          <Icon.Volume2 />
                        ) : (
                          <Icon.Volume1 />
                        )}
                      </div>
                      <Slider
                        max={1}
                        onChange={this.changeVolume}
                        value={volume}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
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
  {
    onLoadedMetaData,
    onLoadStart,
    onPause,
    onPlay,
    onTimeUpdate,
    onVolumeChange,
    playSong,
    toggleRepeat,
    toggleShuffle
  }
)(Player);
