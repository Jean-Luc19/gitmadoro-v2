import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectForm from './project-form';


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

  renderHeadingText() {
    let display = this.state.addingProject ? 'hidden' : '';
    if (this.props.projects.length < 1) {
      return <h3>Add a New Project and Start Pomming</h3>;
    } else {
      return (
        <div className={display}>
          <h3>Select a Current Project to Work On</h3>
          <button  onClick={() => this.setState({ addingProject: true })}>
            Or Create a New One
          </button>
        </div>
      );
    }
  }

  handleChange(e) {
    console.log(this.state.text)
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    console.log('handle submit')
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    const { projects } = this.props;
    let currentProjects = projects.length > 1 ?  this.renderProjects(projects) : '';

    return (
      <div>
        {this.renderHeadingText()}
        <ProjectForm
          addingProject={this.state.addingProject}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {currentProjects}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  projects: state.user.issues
});

export default connect(mapStateToProps)(SetPomGoal);
