import * as currentUserConstants from "../constants/actionConstants";

const initalState = {
  isFetching: false,
  currentUserPlaylists: null,
  currentUserArtists: null,
  error: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_PENDING:
    case currentUserConstants.FETCH_CURRENT_USER_ARTISTS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_FAILURE:
    case currentUserConstants.FETCH_CURRENT_USER_ARTISTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_SUCCESS:
      return {
        ...state,
        currentUserPlaylists: action.payload,
        isFetching: false
      };
    case currentUserConstants.FETCH_CURRENT_USER_ARTISTS_SUCCESS:
      return {
        ...state,
        currentUserArtists: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
