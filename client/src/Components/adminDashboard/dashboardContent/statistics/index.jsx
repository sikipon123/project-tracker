import React, { Component } from 'react'
import InstructorsChart from './charts/instructorsChart';
import ProjectsChart from './charts/projectsChart';
import StudentsChart from './charts/studentsChart';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class index extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <InstructorsChart instructors={this.props.authAdmin.instructors}/>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <StudentsChart students={this.props.authAdmin.students}/>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <ProjectsChart projects={this.props.authAdmin.projects}/>
                </div>
            </div>
        )
    }
}
index.propTypes = {
    authAdmin: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps=state=>({
    authAdmin: state.authAdmin,
    errors: state.errors
})
export default connect(mapStateToProps,{})(index);