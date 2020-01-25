import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
  render() {
    return (
      <div className="projectsList">
        {this.props.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
  }
}

export default Projects;
