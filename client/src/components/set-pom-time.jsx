import React from 'react';


const SetPomTime = props => {
  const minutes = Math.floor(props.time / 60);
  const seconds = props.time % 60 === 0 ? '00' : props.time % 60;



  return (
    <div>
      <div className="pom-settings">
        <i className="material-icons settings-icons" onClick={() => props.setTime(-30)}>replay_30</i>
        <h1>{`${minutes}:${seconds}`}</h1>
        <i className="material-icons settings-icons" onClick={() => props.setTime(30)}>forward_30</i>
      </div>
    
    </div>
  );
};

export default SetPomTime;
