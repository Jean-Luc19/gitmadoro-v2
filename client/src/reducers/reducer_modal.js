import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = {
  modalType: null,
  modalProps: {}
};

export default (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state, modalType: action.modalType,
        modalProps: action.modalProps
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};
