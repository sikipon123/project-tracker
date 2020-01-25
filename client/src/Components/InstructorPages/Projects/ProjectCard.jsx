import React, { Component } from "react";
import axios from "axios";

export class ProjectCard extends Component {
  state = {
    studentName: ""
  };

  handleValidation = id => {
    axios
      .put(`/api/instructors/updateProject/${id}`, {
        status: "validated",
        validationDate: Date()
      })
      .then(response => {
        console.log("validated successfully");
      });
  };
  getStudentName = id => {
    axios.get(`/api/instructors/getonestudent/${id}`).then(response => {
      this.setState({
        studentName: response.data.firstName + " " + response.data.lastName
      });
    });
  };
  render() {
    const {
      _id,
      name,
      description,
      githubLink,
      status,
      idStudent
    } = this.props.project;
    this.getStudentName(idStudent);
    return (
      <div className="card">
        <img
          src="https://files.realpython.com/media/13-Python-Projects-for-Intermediate-Developers_Watermarked.bb98d44bdb10.jpg"
          alt="projectImg"
          className="projectImg"
        />
        <h3>{name}</h3>
        <h4>{githubLink}</h4>
        <p>{description}</p>
        <p>
          <b>Student:</b> {this.state.studentName}
          {}
        </p>
        <p className="status-area">
          <b>Status:</b>{" "}
          <span
            style={
              status === "validated" ? { color: "#3CB371" } : { color: "red" }
            }
          >
            {status}
          </span>
        </p>
        {status === "awaiting validation" ? (
          <button
            href=""
            onClick={() => this.handleValidation(_id)}
            type="button"
            className="btn btn-success validate-btn"
          >
            Validate
          </button>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default ProjectCard;
