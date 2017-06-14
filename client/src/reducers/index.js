import { combineReducers } from 'redux';

import user from './reducer_user';
import modal from './reducer_modal';

export default combineReducers({
  user,
  modal

});
