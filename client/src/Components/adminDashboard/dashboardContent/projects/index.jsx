import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AssignModal from "./assignModal";

class index extends Component {
  getAssignedInstructorName=(idInstructor)=>{
    let instructor = this.props.authAdmin.instructors.filter(ins=>ins._id===idInstructor&&ins)
    return (instructor[0].firstName+" "+instructor[0].lastName)
    // console.log (instructor)
  }
  render() {
    return (
      <div className="row projects-container">
        {this.props.authAdmin.projects.map((project, key) => (
          <div key={key} className="col-lg-3 col-xs-12 mt-4">
            <div
              className={
                project.idInstructor
                  ? "card"
                  : "card text-white bg-secondary mb-3"
              }
            >
              <div className="card-header project-assignment-card">
              {project.idInstructor?
              
              <button type="button" className="btn btn-lg btn-outline-success btn-assign-status" disabled>{this.getAssignedInstructorName(project.idInstructor)}</button>
              :
              <button type="button" className="btn btn-lg btn-outline-warning btn-assign-status" disabled>Unassigned</button>}
              <h5 className="project-card-name">{project.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{project.description}</p>
                {/* eslint-disable-next-line */}
                <a
                  href=""
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={()=>{this.props.toggleIsOpen();this.props.setProjectIdInModal(project._id);this.props.setInstructorIdInModal(project.idInstructor)}}
                >
                  Assign Instructor
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
index.propTypes = {
  authAdmin: PropTypes.object.isRequired
  // errors:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authAdmin: state.authAdmin
  // errors: state.errors
});
export default connect(mapStateToProps, {})(index);
