import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleInstructor } from "../../../../actions/instructorsAdminAction";
import InstructorModal from './instructorModal';

class index extends Component {
  state={
    isOpen:false,
    idInstructor:null,
  }

  handleIsOpen=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    })
  }
  handleIdInstructor = id=>{
    this.setState({
      idInstructor: id
    })
  }
  handleToggle = (idInstructor, status) => {
    this.props.toggleInstructor(idInstructor, status);
  };
  render() {
    return (
      <div>
      <div className="row">
        {this.props.authAdmin.instructors.map((instructor, key) => (
          <div key={key} className="col-lg-3 col-xs-12 mt-4">
            <div
              className={
                instructor.isActive
                  ? "card"
                  : "card text-white bg-secondary mb-3"
              }
            >
              <h5 className="card-header">
                {instructor.firstName} {instructor.lastName}
              </h5>
              <div className="card-body">
                <p className="card-text">Email: {instructor.email}</p>
                <p className="card-text">
                  Phone Number: {instructor.phoneNumber}
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* eslint-disable-next-line */}
                  <a href="#" className="btn btn-primary" onClick={()=>{this.handleIsOpen();this.handleIdInstructor(instructor._id)}}>
                    View
                  </a>
                  {/* eslint-disable-next-line */}
                  <a
                    href=""
                    className={
                      instructor.isActive ? "btn btn-danger" : "btn btn-success"
                    }
                    onClick={() =>
                      this.handleToggle(instructor._id, !instructor.isActive)
                    }
                  >
                    {instructor.isActive ? "Disable" : "Activate"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {this.state.isOpen?<InstructorModal handleIsOpen={this.handleIsOpen} idInstructor={this.state.idInstructor}/>:null}
      </div>
    );
  }
}
index.propTypes = {
  authAdmin: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authAdmin: state.authAdmin,
  errors: state.errors
});
export default connect(mapStateToProps, { toggleInstructor })(index);
