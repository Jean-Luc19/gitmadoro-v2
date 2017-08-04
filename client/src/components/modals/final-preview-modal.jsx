import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions';
import ModalWrapper from './modal-wrapper';

class FinalPreviewModal extends Component {

  render() {
    const { pomTime, breakTime, project } = this.props;
    return (
      <ModalWrapper title="This is Your Pom">
        
      </ModalWrapper>
    );
  }
}

const mapStateToProps = state => ({
  pomTime: state.pom.pomTime,
  breakTime: state.pom.breakTime,
  project: state.pom.currentProject.title
});

export default connect(mapStateToProps, { openModal })(FinalPreviewModal);
