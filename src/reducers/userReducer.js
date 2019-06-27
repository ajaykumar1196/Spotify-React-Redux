import * as userConstants from '../constants/actionConstants';

const initalState = {
  isFetching: false,
  user: null
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
    default:
      return state
  }
}