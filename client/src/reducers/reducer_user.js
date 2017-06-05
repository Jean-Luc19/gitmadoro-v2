import { FETCH_USER_SUCCESS, FETCH_ISSUES_SUCCESS } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {...state, currentUser: action.payload};
    case FETCH_ISSUES_SUCCESS:
      return {...state, issues: action.payload};

  }
  return state;
};
