import * as playerConstants from "../constants/actionConstants";

export const onLoadedMetaData = duration => ({
  type: playerConstants.ON_LOADED_META_DATA,
  payload: duration
});

export const onLoadStart = () => ({
  type: playerConstants.ON_LOAD_START
});

export const playSong = playingID => ({
  type: playerConstants.PLAY_SONG,
  payload: playingID
});

export const onPause = () => ({
  type: playerConstants.ON_PAUSE
});

export const onPlay = () => ({
  type: playerConstants.ON_PLAY
});

export const onTimeUpdate = currentTime => ({
  type: playerConstants.ON_TIME_UPDATE,
  payload: currentTime
});

export const onVolumeChange = (volume, muted) => ({
  type: playerConstants.ON_VOLUME_CHANGE,
  payload: {
    volume,
    muted
  }
});