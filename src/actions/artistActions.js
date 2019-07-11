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

const fetchArtistRelatedArtistsSuccess = artistRelatedArtists => {
  return {
    type: artistConstants.FETCH_ARTIST_RELATED_ARTISTS_SUCCESS,
    payload: artistRelatedArtists
  }
}

export const fetchArtist = artistID => dispatch => {
  dispatch(fetchArtistPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + `/artists/${artistID}`)
    .then(res => {
      dispatch(fetchArtistSuccess(res.data, artistID));
      return spotify().get(process.env.REACT_APP_BASE_URL + `/artists/${artistID}/related-artists`)
    }).then(res => {
      dispatch(fetchArtistRelatedArtistsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchArtistFailure(err));
    });
};
