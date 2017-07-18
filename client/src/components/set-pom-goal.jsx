import React, { Component } from 'react';
import { connect } from 'react-redux';


class SetPomGoal extends Component {



  renderProjects(projects) {
    console.log(projects)

    return projects.map(project => {
      <li key={project.id}>{project.body}</li>;
    });
  }


  render() {
    const { projects } = this.props;

    let currentProjects;
    if (projects.length > 1) {
      currentProjects = this.renderProjects(projects);
    } else {
      currentProjects = 'dude ';
    }
    return (
      <div>
        <div>Add New Project</div>
        <ul>{currentProjects}</ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  projects: state.user.issues
});

export default connect(mapStateToProps)(SetPomGoal);
