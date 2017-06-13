import React, { Component } from 'react';

class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10
    };
  }

  startClock() {
    this.clock = setInterval(
      () => this.setState({ seconds: this.state.seconds --}),
      1000);
  }

  render() {

  }
}

export default ClockContainer;
