import * as userConstants from '../constants/actionConstants';
import { spotify } from '../utils/authUtil';

export const fetchUserPending = () => {
  return {
    type: userConstants.FETCH_USER_PENDING
  }
}

export const fetchUserSuccess = user => {
  return {
    type: userConstants.FETCH_USER_SUCCESS,
    payload: user
  }
}

export const fetchUserFailure = (err) => {
  console.log(err)
  return {
    type: userConstants.FETCH_USER_FAILURE,
    payload: err
  }
}

export const fetchUser = () => dispatch => {
  dispatch(fetchUserPending());
  return spotify().get(process.env.REACT_APP_BASE_URL + '/me').then(res => {
    dispatch(fetchUserSuccess(res.data));
  }).catch(err => {
    dispatch(fetchUserFailure(err.message))
  });
};