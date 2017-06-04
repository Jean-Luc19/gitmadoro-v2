
import * as Cookies from 'js-cookie';
import { FETCH_USER_SUCCESS } from './types';

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUser = () => dispatch => {
  const token = Cookies.get('accessToken');
  return fetch(`api/auth/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json.user)
      dispatch(fetchUserSuccess(json.user));
    });
};
