import React, { Component } from 'react';

import { connect } from 'react-redux';

import ModalWrapper from './modal-wrapper';
import { openModal } from '../../actions';
import { CLOCK_MODAL } from './modal-types';

const ConfigurePomModal = props => {

  return (
    <ModalWrapper title="Set Up">
      <div>Set the duration and goal of your pom session</div>
      <button onClick={() => props.openModal(CLOCK_MODAL)}>Start The Pom</button>
    </ModalWrapper>
  );
};

export default connect(null, { openModal })(ConfigurePomModal);
