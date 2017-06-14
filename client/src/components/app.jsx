import React, { Component } from 'react';
import HomeContainer from './home-container';
import ModalConductor from './modal-conductor';


export default () => {
  return (
    <div>
      <ModalConductor />
      <HomeContainer />

    </div>
  );
};
