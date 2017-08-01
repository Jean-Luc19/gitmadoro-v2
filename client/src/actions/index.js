
import * as Cookies from 'js-cookie';

//-------------------------Types-------------------------//

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_POM_TIME = 'SET_POM_TIME';
export const SET_BREAK_TIME = 'SET_BREAK_TIME';
export const SET_POM_PROJECT = 'SET_POM_PROJECT';




//--------------------Login--------------------//

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFailure = err => ({
  type: FETCH_USER_FAILURE
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
    .then(json => dispatch(fetchUserSuccess(json.user)))
    .catch(err => dispatch(fetchUserFailure(err)));
};

//--------------------Fetch User Issues--------------------//

export const fetchIssuesSuccess = data => ({
  type: FETCH_ISSUES_SUCCESS,
  payload: data
});

export const fetchIssuesFailure = err => ({
  type: FETCH_ISSUES_FAILURE,
  payload: err
});

export const fetchIssues = () => dispatch => {
  const token = Cookies.get('accessToken');
  return fetch('https://api.github.com/issues', {
    headers: { Authorization: `token ${token}`}
  })
  .then(response => response.json())
  .then(json => dispatch(fetchIssuesSuccess(json)))
  .catch(err => dispatch(fetchIssuesFailure(err)));
};

//--------------------Modal Actions--------------------//

export const openModal = (modalType, props={}) => ({
  type: OPEN_MODAL,
  modalType,
  modalProps: props
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

//--------------------Pom Settings Actions--------------------//

export const setPomTime = time => ({
  type: SET_POM_TIME,
  time
});
export const setBreakTime = time => ({
  type: SET_BREAK_TIME,
  time
});

export const setPomProject = id => ({
    type: SET_POM_PROJECT,
    id  
});
