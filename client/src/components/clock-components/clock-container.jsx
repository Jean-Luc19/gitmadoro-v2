import React, { Component } from 'react';

class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomDuration: 0,
      timeRunning: false
    };
  }

  tick() {
    if(this.state.remainingTime <= 55) {
      this.stopClock();
    }else {
      this.setState({remainingTime: this.state.pomDuration --});
    }

  }

  startClock() {
    this.clock = setInterval(() => this.tick(), 1000);
  }

  stopClock() {
    clearInterval(this.clock);
  }

  handleChange(e) {
    const enteredTime = e.target.value * 60;
    this.setState({pomDuration: enteredTime});
  }



  render() {
    const showTime = this.state.timeRunning ? this.state.remainingTime : this.state.pomDuration;

    return (
      <div>
        {showTime}
        <button onClick={this.startClock.bind(this)}>Start</button>
        <form>
          <input onChange={this.handleChange.bind(this)} type="number" min="5" max="60" placeholder="how long shall you pom?"/>

        </form>
      </div>
    );

  }
}

export default ClockContainer;
