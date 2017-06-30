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
        breakDuration: 300
    };

    this.handleClick = this.handleClick.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  handleClick() {
    console.log(this.state.pomDuration);
  }

  setTime(time) {
     this.setState({pomDuration: this.state.pomDuration + time});
  }

  render() {
    return (
      <ModalWrapper title="Set Up">
        <div>Set the duration and goal of your pom session</div>
        <SetPomTime
          setTime={this.setTime}
          onClick={this.handleClick}
          time={this.state.pomDuration}
        />
        <SetPomTime
          setTime={this.setTime}
          onClick={this.handleClick}
          time={this.state.pomDuration}
        />
        div.
      </ModalWrapper>
    );
  }
};

export default connect(null, { openModal })(ConfigurePomModal);
