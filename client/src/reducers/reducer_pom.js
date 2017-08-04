import { SET_POM_TIME, SET_BREAK_TIME, SET_POM_PROJECT } from '../actions';

export default (state={pomTime: 1500, breakTime: 300, currentProject: {title: 'Default Project'}}, action) => {
  switch (action.type) {
    case SET_POM_TIME:
      return {...state, pomTime: action.time};
    case SET_BREAK_TIME:
      return {...state, breakTime: action.time};
    case SET_POM_PROJECT:
      return {...state, currentProject: action.project};
    default:
      return state;
  }
};
