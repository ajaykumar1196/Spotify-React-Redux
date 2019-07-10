import * as albumConstants from "../constants/actionConstants";

const initalState = {
  isFetching: false,
  albumTracks: null,
  albumID: "",
  error: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case albumConstants.FETCH_ALBUM_TRACKS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case albumConstants.FETCH_ALBUM_TRACKS_SUCCESS:
      return {
        ...state,
        albumTracks: action.payload.albumTracks,
        albumID: action.payload.albumID,
        isFetching: false
      };
    case albumConstants.FETCH_ALBUM_TRACKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
