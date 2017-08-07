import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions';


const ModalWrapper = props => {
    return (
      <div>
        <div className="modal-body"></div>
          <div className="modal-content">
            <div className="modal-dialog">
              <div className="top-bar">
                <p>{props.title}</p>
                <p><a onClick={() => props.closeModal()}>Close</a></p>
              </div>

              {props.children}

            </div>
          </div>
      </div>
    );
};

export default connect(null, { closeModal })(ModalWrapper);
