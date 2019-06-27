import * as userConstants from '../constants/actionConstants';

const initalState = {
  isFetching: false,
  user: null,
  error: ""
}

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case userConstants.FETCH_USER_PENDING:
      return {
        ...state,
        isFetching: true
      }
    case userConstants.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case userConstants.FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}