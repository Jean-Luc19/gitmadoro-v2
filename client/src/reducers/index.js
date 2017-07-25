import { combineReducers } from 'redux';

import user from './reducer_user';
import modal from './reducer_modal';
import pom from './reducer_pom';

export default combineReducers({
  user,
  modal,
  pom
});
