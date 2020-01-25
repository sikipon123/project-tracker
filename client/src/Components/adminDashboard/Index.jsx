import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import DashboardContent from './dashboardContent/index';
import {setProjects} from '../../actions/projectsAdminAction';
import {setInstructors} from '../../actions/instructorsAdminAction';
import {setStudents} from '../../actions/studentsAdminAction';

 class index extends Component {
     state={
         section:"Statistics",
     }
     handleRenderedSection=(section,e)=>{
         e.preventDefault();
         this.setState({
             section:section
         })
     }
    componentDidMount(){
        if(!this.props.authAdmin.isAuthenticated){
            return this.props.history.push('/adminlogin');
        }
        if(this.props.authAdmin.students.length!==0){
            this.setState({
                section:"Statistics"
            })
        }
        this.props.setProjects();
        this.props.setInstructors();
        this.props.setStudents();
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col top-navbar">
                        <Navbar handleRenderedSection={this.handleRenderedSection}/>
                    </div>
                </div>
                <div className="row sidebar-content">
                    <div className="col-lg-2 sidebar">
                        <Sidebar handleRenderedSection={this.handleRenderedSection}/>
                    </div>
                    <div className="col-lg-10 dashboard-content">
                        <DashboardContent section={this.state.section}/>
                    </div>
                </div>
                <footer className="row  myfooter">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Project Tracker 2020</span>
                    </div>
                </footer>
            </div>
        )
    }
}
index.propTypes = {
    authAdmin: PropTypes.object.isRequired,
    errors:PropTypes.object

}
const mapStateToProps=state=>({
    authAdmin: state.authAdmin,
    errors: state.errors
})
export default connect(mapStateToProps,{setProjects,setInstructors,setStudents})(index);