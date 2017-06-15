import React from 'react';



const ModalWrapper = props => {
    return (
      <div>
        <div className="modal-body"></div>
          <div className="modal-content">
            <div className="modal-dialog">
              <a className="waves-effect waves-light btn">Close</a>
              {props.children}

            </div>
          </div>
      </div>
    );
};

export default ModalWrapper;
