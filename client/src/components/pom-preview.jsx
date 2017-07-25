import React from 'react';
import { connect } from 'react-redux';

const pomPreview = ({ pomTime, breakTime }) => {

  const pomMinutes = Math.floor(pomTime / 60);
  const pomSeconds = pomTime % 60 === 0 ? '00' : pomTime % 60;

  const breakMinutes = Math.floor(breakTime / 60);
  const breakSeconds = breakTime % 60 === 0 ? '00' : breakTime % 60;

  const pomDisplayTime = pomTime ? <p>Work Time: {`${pomMinutes}:${pomSeconds}`}</p> : '';

  const breakDisplayTime = breakTime ? <p>Break Time: {`${breakMinutes}:${breakSeconds}`}</p> : '';

    return (
      <div>
        {pomDisplayTime}
        {breakDisplayTime}
      </div>
    );

};

const mapStateToProps = state => ({
  pomTime: state.pom.pomTime,
  breakTime: state.pom.breakTime
});

export default connect (mapStateToProps)(pomPreview);
