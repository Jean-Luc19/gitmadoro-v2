import React, { Component } from 'react';
import HomeContainer from './home-container';
import ModalConductor from './modal-conductor';


const App = () => {
  return (
    <div>
      <ModalConductor name={'tony'}/>
      <HomeContainer />
    </div>
  );
};

export default App;
