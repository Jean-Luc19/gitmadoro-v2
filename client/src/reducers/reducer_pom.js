import { SET_POM_TIME, SET_BREAK_TIME } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case SET_POM_TIME:
      return {...state, pomTime: action.time};
    case SET_BREAK_TIME:
      return {...state, breakTime: action.time};
    default:
      return state;
  }
};
