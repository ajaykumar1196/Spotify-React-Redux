import * as userConstants from "../constants/actionConstants";
import { spotify } from "../utils/authUtil";

const fetchUserPending = () => {
  return {
    type: userConstants.FETCH_USER_PENDING
  };
};

const fetchUserSuccess = userProfile => {
  return {
    type: userConstants.FETCH_USER_SUCCESS,
    payload: userProfile
  };
};

export const fetchUser = () => async dispatch => {
  dispatch(fetchUserPending());
  const res = await spotify().get(process.env.REACT_APP_BASE_URL + "/me");
  return dispatch(fetchUserSuccess(res.data));
};
