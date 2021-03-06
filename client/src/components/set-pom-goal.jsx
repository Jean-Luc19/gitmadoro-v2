import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectForm from './project-form';
import { setPomProject, addNewProject } from '../actions';


class SetPomGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      addingProject: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderProjects(projects) {
    return projects.map(project =>
      <div className="project-item" key={project.id}>{project.body}</div>
    );
  }

  hide() {
    return this.state.addingProject ? 'hidden' : '';
  }
  renderHeadingText() {
    if (this.props.projects.length < 1) {
      return <h3>Add a New Project and Start Pomming</h3>;
    } else {
      return (
        <div className={this.hide()}>
          <h3>Select a Current Project to Work On</h3>
        </div>
      );
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ addingProject: false });
    this.props.addNewProject(this.state.text);
  }

  render() {
    const { projects } = this.props;
    let currentProjects = projects.length > 1 && !this.state.addingProject ?  this.renderProjects(projects) : '';

    return (
      <div>
        {this.renderHeadingText()}
        {currentProjects}
        <ProjectForm
          addingProject={this.state.addingProject}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <button
          className={this.hide()}
          onClick={() => this.setState({ addingProject: true })}>
          Or Create a New One
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  projects: state.user.issues
});

export default connect(mapStateToProps, { setPomProject, addNewProject })(SetPomGoal);
