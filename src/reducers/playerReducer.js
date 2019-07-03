import * as playerConstants from "../constants/actionConstants";

const initalState = {
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  muted: false,
  repeat: false,
  shuffle: false,
  volume: 1,
  trackURL: "",
  trackID: "",
  trackName: "",
  trackArtwork: "",
  trackAlbumID: "",
  trackArtists: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case playerConstants.PLAY_SONG:
      return {
        ...state,
        trackURL: action.payload.trackURL,
        trackID: action.payload.trackID,
        trackName: action.payload.trackName,
        trackArtwork: action.payload.trackArtwork,
        trackAlbumID: action.payload.trackAlbumID,
        trackArtists: action.payload.trackArtists
      };
    case playerConstants.ON_LOAD_START:
      return {
        ...state,
        currentTime: 0,
        duration: 0
      };
    case playerConstants.ON_LOADED_META_DATA:
      return {
        ...state,
        duration: action.payload
      };
    case playerConstants.ON_PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case playerConstants.ON_PLAY:
      return {
        ...state,
        isPlaying: true
      };
    case playerConstants.ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: action.payload
      };
    case playerConstants.ON_VOLUME_CHANGE:
      return {
        ...state,
        volume: action.payload.volume,
        muted: action.payload.muted
      };
    case playerConstants.TOGGLE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat
      };
    case playerConstants.TOGGLE_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle
      };

    default:
      return state;
  }
};
