import React from 'react';

const pomPreview = ({ timer }) => {

  const pomMinutes = Math.floor(timer.pomDuration / 60);
  const pomSeconds = timer.pomDuration % 60 === 0 ? '00' : timer.pomDuration % 60;
  
  const breakMinutes = Math.floor(timer.breakDuration / 60);
  const breakSeconds = timer.breakDuration % 60 === 0 ? '00' : timer.breakDuration % 60;

  const pomTime = timer.pomDurationSet ? <p>Work Time: {`${pomMinutes}:${pomSeconds}`}</p> : '';

  const breakTime = timer.breakDurationSet ? <p>Break Time: {`${breakMinutes}:${breakSeconds}`}</p> : '';

    return (
      <div>
        {pomTime}
        {breakTime}
      </div>
    );

};

export default pomPreview;
