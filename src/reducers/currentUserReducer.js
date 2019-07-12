import * as currentUserConstants from "../constants/actionConstants";

const initalState = {
  isFetching: false,
  currentUserPlaylists: null,
  currentUserArtists: null,
  currentUserAlbums: null,
  error: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_PENDING:
    case currentUserConstants.FETCH_CURRENT_USER_ARTISTS_PENDING:
    case currentUserConstants.FETCH_CURRENT_USER_ALBUMS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_FAILURE:
    case currentUserConstants.FETCH_CURRENT_USER_ARTISTS_FAILURE:
    case currentUserConstants.FETCH_CURRENT_USER_ALBUMS_FAILURE:
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
    case currentUserConstants.FETCH_CURRENT_USER_ALBUMS_SUCCESS:
      return {
        ...state,
        currentUserAlbums: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
