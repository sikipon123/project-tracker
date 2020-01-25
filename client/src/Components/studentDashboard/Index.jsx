import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./navbar/navbar";
import axios from "axios";
import Sidebar from "./sidebar/sidebar";
import DashboardContent from "./dashboardContent/index";
import AddModal from "./dashboardContent/projects/AddModal";

class index extends Component {
  state = {
    section: "Projects",
    projects: [
      {
        name: "project 1",
        description: "description",
        status: "created",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      },
      {
        name: "project 2",
        description: "description",
        status: "bot",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      },
      {
        name: "project 3",
        description: "description",
        status: "created",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      },
      {
        name: "project 4",
        description: "description",
        status: "created",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      }
    ],
    userData:""
  };
 

  
  handleRenderedSection = (section, e) => {
    e.preventDefault();
    this.setState({
      section: section
    });
  };
      componentDidMount() {
        console.log(this.props.match.params.id);
        axios
          .get(`/api/students/getOneProject/${this.props.match.params.id}`)
          .then(response => this.setState({ userData: response.data }));
        axios
          .get(`/api/students/getAllProjects/${this.props.match.params.id}`)
          .then(response => {
            this.setState({ Projects: response.data });
          });
      }
    
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col top-navbar">
            <Navbar handleRenderedSection={this.handleRenderedSection} />
          </div>
        </div>
        <div className="row sidebar-content">
          <div className="col-lg-2 sidebar">
            <Sidebar handleRenderedSection={this.handleRenderedSection} />
          </div>
          <div className="col-lg-10 dashboard-content">
            <DashboardContent section={this.state.section} />
            <div><AddModal projects={this.state.projects}/></div>
          </div>
          
        </div>
        <footer className="row my-footer">
          <div className="copyright text-center my-auto">
            <span>Copyright © Project Tracker 2020</span>
          </div>
          
        </footer>
        
      </div>
    );
  }
}
index.propTypes = {
  authStudent: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default index;