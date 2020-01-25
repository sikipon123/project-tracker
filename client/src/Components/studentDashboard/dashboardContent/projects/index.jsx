import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import EditModal from "./EditModal";

class index extends Component {
  state = {
    isOpen: false,
    projects: []
  };

  componentDidMount() {
    const idStudent = window.location.href.substr(
      window.location.href.indexOf("StudentDashboard") + 17
    );
    axios.get(`/api/projects/getAllProjects/${idStudent}`).then(response => {
      this.setState({ projects: response.data });
    });
  }

  handleDelete = idProject => {
    axios
      .delete(`/api/projects/deleteProject/${idProject}`)
      .then(response => console.log("Deleted Successfully!!"));
    window.location.href = window.location.href;
  };

  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log("toggled modal");
  };
  render() {
    console.log(this.state.projects);
    return (
      <div className="row">
        {/* {this.props.authStudent.projects.map((project, key) => ( */}
        {this.state.projects.map((project, key) => (
          <div key={key} className="col-lg-3 col-xs-12 m-4">
            <div className="card">
              <h5 className="card-header">{project.name}</h5>
              <div className="card-body">
                <p className="card-text">{project.description}</p>
                <p className="card-text">Github Link: {project.githubLink}</p>
                <p className="card-text">Deadline: {Date(project.deadline).toString().substring(0,15)}</p>
                {/* <a
                  href=""
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Detail
                </a> */}
                <div className="btns">
                <EditModal id="#exampleModal" project={project} />

                <button
                  className="btn btn-danger ml-3"
                  onClick={() => {
                    this.handleDelete(project._id);
                  }}
                >
                  Delete
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
// index.propTypes = {
//   authStudent: PropTypes.object.isRequired
//   // errors:PropTypes.object.isRequired
// };

export default index;
