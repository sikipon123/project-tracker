import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { assignProject } from "../../../../actions/projectsAdminAction";

class pickInstructorCard extends Component {
  handleAssign = idInstructor => {
    this.props.assignProject(this.props.projectID, idInstructor);
  };
  render() {
    return (
      <div className="row" style={{"justifyContent":"center"}}>
        {this.props.instructors.map((instructor, key) =>
          instructor.isActive ? (
            // eslint-disable-next-line
            <a
              href=""
              key={key}
              onClick={() => this.handleAssign(instructor._id)}
            >
              <div className="col-12 mt-4">
                <div className="card">
                  <h5 className="card-header">
                    {instructor.firstName} {instructor.lastName}
                  </h5>
                </div>
              </div>
            </a>
          ) : null
        )}
      </div>
    );
  }
}
pickInstructorCard.propTypes = {
  assignProject: PropTypes.func.isRequired,
  authAdmin: PropTypes.object.isRequired
  // errors:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authAdmin: state.authAdmin
  // errors: state.errors
});
export default connect(mapStateToProps, { assignProject })(pickInstructorCard);
