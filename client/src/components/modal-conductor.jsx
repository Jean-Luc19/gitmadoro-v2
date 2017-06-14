import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginModal from './login-modal';


const ModalConductor = props => {
  switch (props.modalType) {
    case 'LOGIN_MODAL':
      return <LoginModal />;
    default:
      return null;
  }
};

const mapStateToProps = (state, props) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps
});

export default connect(mapStateToProps)(ModalConductor);
