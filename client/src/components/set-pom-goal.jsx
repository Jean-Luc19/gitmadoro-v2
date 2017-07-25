import React, { Component } from 'react';
import { connect } from 'react-redux';


class SetPomGoal extends Component {

  renderProjects(projects) {
    return projects.map(project =>
      <div className="project-item" key={project.id}>{project.body}</div>
    );
  }

  render() {
    const { projects } = this.props;

    let currentProjects = projects.length > 1 ?  this.renderProjects(projects) : '';

    return (
      <div>
        <p>Select a Project or create a new one</p>
        <form>
          <input type="text" placeholder="Enter a Project Name"/>
        </form>
        {currentProjects}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  projects: state.user.issues
});

export default connect(mapStateToProps)(SetPomGoal);
