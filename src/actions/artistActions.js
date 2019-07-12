import * as artistConstants from "../constants/actionConstants";
import { spotify } from "../utils/authUtil";

const fetchArtistPending = () => {
  return {
    type: artistConstants.FETCH_ARTIST_PENDING
  };
};

const fetchArtistFailure = err => {
  return {
    type: artistConstants.FETCH_ARTIST_FAILURE,
    payload: err
  };
};

const fetchArtistSuccess = (artist, artistID) => {
  return {
    type: artistConstants.FETCH_ARTIST_SUCCESS,
    payload: {
      artist,
      artistID
    }
  };
};

export const fetchArtist = artistID => dispatch => {
  dispatch(fetchArtistPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + `/artists/${artistID}`)
    .then(res => {
      dispatch(fetchArtistSuccess(res.data, artistID));
    })
    .catch(err => {
      dispatch(fetchArtistFailure(err));
    });
};

const fetchArtistRelatedArtistsPending = () => {
  return {
    type: artistConstants.FETCH_ARTIST_RELATED_ARTISTS_PENDING
  };
};

const fetchArtistRelatedArtistsFailure = err => {
  return {
    type: artistConstants.FETCH_ARTIST_RELATED_ARTISTS_FAILURE,
    payload: err
  };
};

const fetchArtistRelatedArtistsSuccess = artistRelatedArtists => {
  return {
    type: artistConstants.FETCH_ARTIST_RELATED_ARTISTS_SUCCESS,
    payload: artistRelatedArtists
  }
}

export const fetchArtistRelatedArtists = artistID => dispatch => {
  dispatch(fetchArtistRelatedArtistsPending());
  return spotify().get(process.env.REACT_APP_BASE_URL + `/artists/${artistID}/related-artists`)
    .then(res => {
      dispatch(fetchArtistRelatedArtistsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchArtistRelatedArtistsFailure(err));
    });
};

const fetchArtistTopTracksPending = () => {
  return {
    type: artistConstants.FETCH_ARTIST_TOP_TRACKS_PENDING,
  };
};

const fetchArtistTopTracksFailure = err => {
  return {
    type: artistConstants.FETCH_ARTIST_TOP_TRACKS_FAILURE,
    payload: err
  };
};

const fetchArtistTopTracksSuccess = artistTopTracks => {
  return {
    type: artistConstants.FETCH_ARTIST_TOP_TRACKS_SUCCESS,
    payload: artistTopTracks
  }
}

export const fetchArtistTopTracks = artistID => dispatch => {
  dispatch(fetchArtistTopTracksPending());
  return spotify().get(process.env.REACT_APP_BASE_URL + `/artists/${artistID}/top-tracks?market=from_token`)
    .then(res => {
      dispatch(fetchArtistTopTracksSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchArtistTopTracksFailure(err));
    });
};