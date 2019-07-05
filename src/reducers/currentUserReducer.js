import * as currentUserConstants from "../constants/actionConstants";

const initalState = {
  isFetching: false,
  currentUserPlaylists: null,
  error: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_SUCCESS:
      return {
        ...state,
        currentUserPlaylists: action.payload,
        isFetching: false
      };
    case currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
