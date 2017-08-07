import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions';
import ModalWrapper from './modal-wrapper';
import { convertTime } from '../../utils/convert-time';

class FinalPreviewModal extends Component {

  render() {
    const { pomTime, breakTime, project } = this.props;

    return (
      <ModalWrapper title="Your Pom Preview">
        <div className="pom-preview">
          <div className="clock-preview">
            <h2>{convertTime(pomTime)}</h2>
          </div>
          <h2>{project}</h2>
          <h2>{convertTime(breakTime)}</h2>
        </div>
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
