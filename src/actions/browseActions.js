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

const fetchFeaturedPlaylistsPending = () => {
  return {
    type: browseConstants.FETCH_FEATURED_PLAYLISTS_PENDING
  };
};

const fetchFeaturedPlaylistsFailure = err => {
  return {
    type: browseConstants.FETCH_FEATURED_PLAYLISTS_FAILURE,
    payload: err
  };
};

const fetchFeaturedPlaylistsSuccess = featuredPlaylists => {
  return {
    type: browseConstants.FETCH_FEATURED_PLAYLISTS_SUCCESS,
    payload: featuredPlaylists
  };
};

export const fetchFeaturedPlaylists = () => dispatch => {
  dispatch(fetchFeaturedPlaylistsPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + "/browse/featured-playlists")
    .then(res => {
      dispatch(fetchFeaturedPlaylistsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchFeaturedPlaylistsFailure(err));
    });
};

const fetchCategoryPlaylistsPending = () => {
  return {
    type: browseConstants.FETCH_CATEGORY_PLAYLISTS_PENDING
  };
};

const fetchCategoryPlaylistsFailure = err => {
  return {
    type: browseConstants.FETCH_CATEGORY_PLAYLISTS_FAILURE,
    payload: err
  };
};

const fetchCategoryPlaylistsSuccess = categoryPlaylists => {
  return {
    type: browseConstants.FETCH_CATEGORY_PLAYLISTS_SUCCESS,
    payload: categoryPlaylists
  };
};

export const fetchCategoryPlaylists = (categoryId) => dispatch => {
  dispatch(fetchCategoryPlaylistsPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + `/browse/categories/${categoryId}/playlists`)
    .then(res => {
      dispatch(fetchCategoryPlaylistsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchCategoryPlaylistsFailure(err));
    });
};
