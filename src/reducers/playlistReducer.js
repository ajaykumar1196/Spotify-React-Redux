import * as playlistConstants from "../constants/actionConstants";

const initalState = {
  isFetching: false,
  playlistTracks: null,
  playlistID: "",
  error: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case playlistConstants.FETCH_NEW_RELEASES_PENDING:
    case playlistConstants.FETCH_CATEGORIES_PENDING:
    case playlistConstants.FETCH_PLAYLIST_TRACKS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case playlistConstants.FETCH_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        playlistTracks: action.payload.playlistTracks,
        playlistID: action.payload.playlistID,
        isFetching: false
      };
    case playlistConstants.FETCH_PLAYLIST_TRACKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
