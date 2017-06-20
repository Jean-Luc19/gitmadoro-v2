import React, { Component } from 'react';

class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 15
    };
  }


  startClock() {
    this.clock = setInterval(
      () => {
        return this.setState({time: this.state.time --});},
      1000);
  }

  render() {

    return (
      <div>
        {this.state.time}
        <button onClick={this.startClock.bind(this)}>Start</button>
      </div>
    );

  }
}

export default ClockContainer;
