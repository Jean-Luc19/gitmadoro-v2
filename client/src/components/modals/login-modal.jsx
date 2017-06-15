import React from 'react';
import ModalWrapper from './modal-wrapper';


const LoginModal = props => {
    return (
      <ModalWrapper>
          <a href={'/api/auth/github'}>Login with Github</a>
      </ModalWrapper>
    );
};

export default LoginModal;
