import React, { Component } from 'react';

import { connect } from 'react-redux';

import ModalWrapper from './modal-wrapper';
import { openModal } from '../../actions';
import SetPomTime from '../set-pom-time';
import PomPreview from '../pom-preview';


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

  }

  handleClick() {
    if(!this.state.pomDurationSet) {
      this.setState({pomDurationSet: true});
    } else {
      this.setState({breakDurationSet: true});
    }
  }

  setTime(time) {
    if(!this.state.pomDurationSet){
      this.setState({ pomDuration: this.state.pomDuration + time });
    }
    this.setState({ breakDuration: this.state.breakDuration + time });
  }

  render() {

    return (
      <ModalWrapper title="Set Up">
        <div>Set the duration and goal of your pom session</div>
        <SetPomTime
          setTime={this.setTime}
          onClick={this.handleClick}
          time={this.state}
        />

        <PomPreview timer={this.state}/>

      </ModalWrapper>
    );
  }
};

export default connect(null, { openModal })(ConfigurePomModal);
