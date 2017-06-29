import React, { Component } from 'react';

import { connect } from 'react-redux';

import ModalWrapper from './modal-wrapper';
import { openModal } from '../../actions';
import { CLOCK_MODAL } from './modal-types';

class ConfigurePomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ModalWrapper title="Set Up">
        <div>Set the duration and goal of your pom session</div>
        <div className="pom-settings">
          <i className="material-icons settings-icons">replay_30</i>
          <h1>25:00</h1>
          <i className="material-icons settings-icons">forward_30</i>
        </div>
        <button onClick={() => this.props.openModal(CLOCK_MODAL)}>Start The Pom</button>
      </ModalWrapper>
    );
  }
};

export default connect(null, { openModal })(ConfigurePomModal);
