import * as browseConstants from "../constants/actionConstants";

const initalState = {
  isFetching: false,
  newReleasesAlbums: null,
  categories: null,
  error: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case browseConstants.FETCH_NEW_RELEASES_PENDING:
    case browseConstants.FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case browseConstants.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        newReleasesAlbums: action.payload,
        isFetching: false
      };
    case browseConstants.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false
      };
    case browseConstants.FETCH_NEW_RELEASES_FAILURE:
    case browseConstants.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
