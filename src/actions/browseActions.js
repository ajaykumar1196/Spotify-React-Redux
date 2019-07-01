import * as browseConstants from "../constants/actionConstants";
import { spotify } from "../utils/authUtil";

const fetchNewReleasesPending = () => {
  return {
    type: browseConstants.FETCH_NEW_RELEASES_PENDING
  };
};

const fetchNewReleasesFailure = err => {
  return {
    type: browseConstants.FETCH_NEW_RELEASES_FAILURE,
    payload: err
  };
};

const fetchNewReleasesSuccess = newReleasesAlbums => {
  return {
    type: browseConstants.FETCH_NEW_RELEASES_SUCCESS,
    payload: newReleasesAlbums
  };
};

export const fetchNewReleases = () => dispatch => {
  dispatch(fetchNewReleasesPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + "/browse/new-releases")
    .then(res => {
      dispatch(fetchNewReleasesSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchNewReleasesFailure(err));
    });
};

const fetchCategoriesPending = () => {
  return {
    type: browseConstants.FETCH_CATEGORIES_PENDING
  };
};

const fetchCategoriesFailure = err => {
  return {
    type: browseConstants.FETCH_CATEGORIES_FAILURE,
    payload: err
  };
};

const fetchCategoriesSuccess = newReleasesAlbums => {
  return {
    type: browseConstants.FETCH_CATEGORIES_SUCCESS,
    payload: newReleasesAlbums
  };
};

export const fetchCategories = () => dispatch => {
  dispatch(fetchCategoriesPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + "/browse/categories")
    .then(res => {
      dispatch(fetchCategoriesSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchCategoriesFailure(err));
    });
};
