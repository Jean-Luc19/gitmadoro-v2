import React, { Component } from 'react';

import { connect } from 'react-redux';

import ModalWrapper from './modal-wrapper';
import { openModal } from '../../actions';
import SetPomTime from '../set-pom-time';


class ConfigurePomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pomDuration: 1500,
        pomDurationSet: false,
        breakDuration: 300,
        breakDurationSet: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.setTime = this.setTime.bind(this);
    this.pomPreview = this.pomPreview.bind(this);
  }

  handleClick() {
    if(!this.state.pomDurationSet) {
      this.setState({pomDurationSet: true});
    } else {
      this.setState({breakDurationSet: true});
    }
  }

  setTime(time, clock=this.state.pomDuration) {
     this.setState({pomDuration: this.state.pomDuration + time});
  }

  pomPreview() {

    if (!this.state.pomDurationSet) {
      return '';
    }
    const time = this.state.pomDuration;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60 === 0 ? '00' : time % 60;

    return (
      <div>
        <p>Work Time: {`${minutes}:${seconds}`}</p>
      </div>
    );
  }

  render() {
    const pomPreview = this.pomPreview();
    return (
      <ModalWrapper title="Set Up">
        <div>Set the duration and goal of your pom session</div>
        <SetPomTime
          setTime={this.setTime}
          onClick={this.handleClick}
          time={this.state}
        />
        {pomPreview}


      </ModalWrapper>
    );
  }
};

export default connect(null, { openModal })(ConfigurePomModal);
