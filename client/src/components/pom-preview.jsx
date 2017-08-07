import React from 'react';
import { connect } from 'react-redux';
import { convertTime } from '../utils/convert-time';

const pomPreview = ({ pomTime, breakTime, currentProject }) => {

  const pomDisplayTime = pomTime ? <p>Work Time: {convertTime(pomTime)}</p> : '';

  const breakDisplayTime = breakTime ? <p>Break Time: {convertTime(breakTime)}</p> : '';

  const projectDisplay = currentProject ? <p>{currentProject.title}</p> : '';

    return (
      <div>
        {projectDisplay}
        {pomDisplayTime}
        {breakDisplayTime}
      </div>
    );

};

const mapStateToProps = state => ({
  pomTime: state.pom.pomTime,
  breakTime: state.pom.breakTime,
  currentProject: state.pom.currentProject
});

export default connect (mapStateToProps)(pomPreview);
