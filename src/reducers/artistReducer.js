import * as artistConstants from "../constants/actionConstants";

const initalState = {
  isFetching: false,
  artist: null,
  artistID: "",
  artistRelatedArtists: null,
  artistTopTracks: null,
  error: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case artistConstants.FETCH_ARTIST_PENDING:
    case artistConstants.FETCH_ARTIST_RELATED_ARTISTS_PENDING:
    case artistConstants.FETCH_ARTIST_TOP_TRACKS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case artistConstants.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.payload.artist,
        artistID: action.payload.artistID,
        isFetching: false
      };
    case artistConstants.FETCH_ARTIST_RELATED_ARTISTS_SUCCESS:
      return {
        ...state,
        artistRelatedArtists: action.payload,
        isFetching: false
      };
    case artistConstants.FETCH_ARTIST_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        artistTopTracks: action.payload,
        isFetching: false
      };
    case artistConstants.FETCH_ARTIST_FAILURE:
    case artistConstants.FETCH_ARTIST_RELATED_ARTISTS_FAILURE:
    case artistConstants.FETCH_ARTIST_TOP_TRACKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
