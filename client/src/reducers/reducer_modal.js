import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = {
  modalType: null,
  modalProps: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case CLOSE_MODAL:
      return initialState;
  }

  return initialState;
};
