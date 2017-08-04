import React from 'react';
import { connect } from 'react-redux';
import LoginModal from './modals/login-modal';
import ClockModal from './modals/clock-modal';
import FinalPreviewModal from './modals/final-preview-modal';
import ConfigurePomModal from './modals/configure-pom-modal';
import { LOGIN_MODAL,
  CLOCK_MODAL,
  CONFIGURE_POM_MODAL,
  FINAL_PREVIEW_MODAL
} from './modals/modal-types';

const ModalConductor = (props) => {
  switch (props.modalType) {
    case LOGIN_MODAL:
      return <LoginModal />;
    case CLOCK_MODAL:
      return <ClockModal />;
    case CONFIGURE_POM_MODAL:
      return <ConfigurePomModal />;
    case FINAL_PREVIEW_MODAL:
      return <FinalPreviewModal />;
    default:
      return null;
  }
};

const mapStateToProps = (state, props) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps
});

export default connect(mapStateToProps)(ModalConductor);
