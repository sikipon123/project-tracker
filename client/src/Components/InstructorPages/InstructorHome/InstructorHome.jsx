import React, { Component } from "react";
import "./InstructorHome.css";
import axios from "axios";

import Projects from "../Projects/Projects";
import Account from "../Account/Account";

export class InstructorHome extends Component {
  state = {
    page: "Projects",
    userData: {},
    userProjects: []
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(`/api/instructors/getoneinstructor/${this.props.match.params.id}`)
      .then(response => this.setState({ userData: response.data }));
    axios
      .get(`/api/instructors/getProjects/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ userProjects: response.data });
        console.log("helo");
      });
  }

  handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "http://localhost:3000";
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h3 className="projectTitle">Project Tracker</h3>
          <button
            type="button"
            className="btn btn-danger logout-btn "
            onClick={() => this.handleLogOut()}
          >
            Log Out
          </button>
          <h3>Welcome {this.state.userData.username}</h3>
        </nav>
        <div className="navbar-dark bg-dark sidenav">
          {/* eslint-disable-next-line */}
          <a
            className="nav-item nav-link"
            href="#"
            onClick={() => this.setState({ page: "Projects" })}
          >
            <i className="fas fa-fw fa-table"></i>
            <span>Projects</span>
          </a>
          {/* eslint-disable-next-line */}
          <a
            className="nav-item nav-link"
            href="#"
            onClick={() => this.setState({ page: "Account" })}
          >
            <i className="fas fa-user-circle"></i>
            <span> Account</span>
          </a>
        </div>
        <div className="main">
          {this.state.page === "Projects" ? (
            this.state.userProjects.length !== 0 ? (
              <Projects projects={this.state.userProjects} />
            ) : (
              <h1>No Projects assigned yet...</h1>
            )
          ) : (
            <Account userData={this.state.userData} />
          )}
        </div>
      </div>
    );
  }
}

export default InstructorHome;
