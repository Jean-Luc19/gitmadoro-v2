import React from 'react';
import ModalWrapper from './modal-wrapper';
import ClockContainer from '../clock-components/clock-container';

const ClockModal = props => {
  return (
    <ModalWrapper title="Configure The Pom">
      <ClockContainer />
    </ModalWrapper>
  );
};

export default ClockModal;
