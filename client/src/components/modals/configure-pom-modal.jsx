import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWrapper from './modal-wrapper';
import { FINAL_PREVIEW_MODAL } from './modal-types';
import {
  openModal,
  setPomTime,
  setBreakTime
 } from '../../actions';
import SetPomTime from '../set-pom-time';
import PomPreview from '../pom-preview';
import SetPomGoal from '../set-pom-goal';


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
      this.props.setPomTime(this.state.pomDuration);
    } else {
      this.setState({breakDurationSet: true});
      this.props.setBreakTime(this.state.breakDuration);
      this.props.openModal(FINAL_PREVIEW_MODAL);
    }
  }

  setTime(time) {
    if(!this.state.pomDurationSet){
      this.setState({ pomDuration: this.state.pomDuration + time });
    } else {
      this.setState({ breakDuration: this.state.breakDuration + time });
    }
  }

  renderPomConfigs() {
    if (!this.props.currentProject){
      return (
        <SetPomGoal />
      );
    }
    return (
      <SetPomTime
       setTime={this.setTime}
       onClick={this.handleClick}
       time={this.state}
      />
    );
  }

  render() {
    return (
      <ModalWrapper title="Set Up">
        <div>
          <h2>Configure your Pomodoro Session</h2>
        </div>
        {this.renderPomConfigs()}
        <PomPreview />
      </ModalWrapper>
    );
  }
};

const mapStateToProps = state => ({
  currentProject: state.pom.currentProject
});

export default connect(mapStateToProps, { openModal, setPomTime, setBreakTime })(ConfigurePomModal);
