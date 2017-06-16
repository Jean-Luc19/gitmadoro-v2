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
                <a className="waves-effect waves-light btn" onClick={() => props.closeModal()}>Close</a>
              </div>

              {props.children}

            </div>
          </div>
      </div>
    );
};

export default connect(null, { closeModal })(ModalWrapper);
