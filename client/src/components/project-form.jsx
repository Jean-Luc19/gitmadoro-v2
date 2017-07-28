import React from 'react';

const ProjectForm = ({ addingProject, onChange, onSubmit }) => {

  if (!addingProject) {
    return <p></p>;
  } else {
    return (
      <form onSubmit={onSubmit}>
        <h3>Add a New Project</h3>
        <input
          onChange={onChange}
          type="text"
          placeholder="Enter a Project Name"
        />
      </form>
    );
  }
};

export default ProjectForm;
