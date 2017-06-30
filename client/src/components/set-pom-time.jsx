import React from 'react';


const SetPomTime = props => {
  const { pomDuration, pomDurationSet, breakDuration, breakDurationSet } = props.time;
  let minutes = 0;
  let seconds = 0;
  if(!pomDurationSet) {
     minutes = Math.floor(pomDuration / 60);
     seconds = pomDuration % 60 === 0 ? '00' : pomDuration % 60;
  } else {
    minutes = Math.floor(breakDuration / 60);
    seconds = breakDuration % 60 === 0 ? '00' : breakDuration % 60;
  }


  return (
    <div>
      <div className="pom-settings">
        <i className="material-icons settings-icons" onClick={() => props.setTime(-30)}>replay_30</i>
        <h1>{`${minutes}:${seconds}`}</h1>
        <i className="material-icons settings-icons" onClick={() => props.setTime(30)}>forward_30</i>
      </div>
      <button onClick={props.onClick}>Set</button>
    </div>
  );
};

export default SetPomTime;
