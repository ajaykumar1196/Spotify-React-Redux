import * as userConstants from '../constants/actionConstants';
import { spotify } from '../utils/authUtil';

export const fetchUserPending = () => {
  return {
    type: userConstants.FETCH_USER_PENDING
  }
}

export const fetchUserSuccess = userProfile => {
  return {
    type: userConstants.FETCH_USER_SUCCESS,
    payload: userProfile
  }
}

export const fetchUser = () => dispatch => {
  dispatch(fetchUserPending());
  return spotify().get(process.env.REACT_APP_BASE_URL + '/me').then(res => {
    dispatch(fetchUserSuccess(res.data));
  })
};