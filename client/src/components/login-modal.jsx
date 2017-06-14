import React from 'react';

const LoginModal = props => {
    return (
      <div>
        <div className="modal-overlay" />
        <div className="modal-content">
          <a href={'/api/auth/github'}>Login with Github</a>
        </div>

      </div>
    );
};

export default LoginModal;
