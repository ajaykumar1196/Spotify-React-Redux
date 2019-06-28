import * as userConstants from '../constants/actionConstants';

const initalState = {
  isFetching: false,
  userProfile: null
}

export default (state = initalState, action) => {
  switch (action.type) {
    case userConstants.FETCH_USER_PENDING:
      return {
        ...state,
        isFetching: true
      }
    case userConstants.FETCH_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}