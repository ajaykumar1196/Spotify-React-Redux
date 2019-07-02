import React from "react";
import { connect } from "react-redux";
import * as Icon from "react-feather";

import "./Player.css";

import { formatSeconds } from "../../utils/numbersUtil";

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

import Slider from "../Slider/Slider";

class Player extends React.Component {
  constructor() {
    super();
    this.audioElement = null;
  }

  componentDidMount() {
    this.audioElement.play();
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
                    <a href="#linkToSong">
                      <div className="now-playing__cover-art">
                        <div className="cover-art shadow">
                          <div className="icon">
                            <Icon.Music />
                          </div>
                          <div
                            style={{
                              backgroundImage:
                                "url(https://i.scdn.co/image/be9511a4f71d35978dc0a6b42dd1d4c3dfad6634)"
                            }}
                            className="cover-art-image cover-art-image-loaded"
                          />
                        </div>
                      </div>
                    </a>
                  </span>
                  <div className="track-info ellipsis-one-line">
                    <div className="track-info__name ellipsis-one-line">
                      <div className="react-contextmenu-wrapper">
                        <a href="#linkToSong">Name of the track</a>
                      </div>
                    </div>
                    <div className="track-info__artists ellipsis-one-line">
                      <a href="#linkToSong">Name of the artist</a>
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
                        <Icon.Pause  fill={"currentColor"}/>
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

        {/* <div className="player">
          <div className="player__inner container">
            <div className="player__section">
              <div className="player__buttons">
                <div
                  className="player__button"
                  //   onClick={playPrevSong}
                  role="button"
                  tabIndex="0"
                >
                  <i className="player__button__icon ion-ios-rewind" />
                </div>
                <div
                  className="player__button"
                  onClick={this.togglePlay}
                  role="button"
                  tabIndex="0"
                >
                  <i
                    className={`player__button__icon ion-ios-${
                      this.props.player.isPlaying ? "pause" : "play"
                    }`}
                  />
                </div>
                <div
                  className="player__button"
                  //   onClick={playNextSongFromButton}
                  role="button"
                  tabIndex="0"
                >
                  <i className="player__button__icon ion-ios-fastforward" />
                </div>
              </div>
            </div>
            <div className="player__section player__section--seek">
              <span>Slider</span>
              {/* <Slider
                max={duration}
                onChange={changeCurrentTime}
                value={currentTime}
              /> */}
        {/* </div>
            <div className="player__section player__section--time">
              <div className="player__time">
                {this.formatSeconds(this.props.player.currentTime)}
                <div className="player__time__separator">/</div>
                {this.formatSeconds(this.props.player.duration)}
              </div>
            </div>  */}
        {/* <div className="player__section player__section--options">
              <div className="player__buttons player__buttons--options">
                <div
                  className={`player__button ${
                    this.props.player.repeat ? "player__button--active" : ""
                  }`}
                  //   onClick={this.toggleRepeat}
                  role="button"
                  tabIndex="0"
                >
                  <i className="player__button__icon ion-loop" />
                </div>
                <div
                  className={`player__button ${
                    this.props.player.shuffle ? "player__button--active" : ""
                  }`}
                  //   onClick={this.toggleShuffle}
                  role="button"
                  tabIndex="0"
                >
                  <i className="player__button__icon ion-shuffle" />
                </div> */}
        {/* <div
                  className={`player__button ${
                    showHistory ? "player__button--active" : ""
                  }`}
                  onClick={toggleShowHistory}
                  role="button"
                  tabIndex="0"
                >
                  <i className="player__button__icon ion-android-list" />
                </div> */}
        {/* <div
                  className="player__button player__button--volume"
                  onClick={this.toggleMuted}
                  role="button"
                  tabIndex="0"
                >
                  <i
                    className={`player__button__icon ion-android-volume-${
                      this.props.player.muted ? "off" : "mute"
                    }`}
                  />
                  <i
                    className={`player__button__icon player__button__icon--absolute 
                    
                    `}
                  />
                </div> */}
        {/* </div>
            </div> */}
        {/* <div className="player__section player__section--volume">
              <span>Slider</span>
              <Slider
            max={1}
            onChange={changeVolume}
            value={volume}
          />
            </div> */}
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
