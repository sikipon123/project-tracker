import React, { Component } from "react";
import "../../../assets/fontawesome-free/css/all.min.css";
import "./css/styles.css";
export default class sidebar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-sidebar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navbar-nav-dashadmin">
            {/* eslint-disable-next-line */}
            <a
              className="nav-item nav-link  "
              href="#"
              onClick={e => this.props.handleRenderedSection("Statistics", e)}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </a>
            {/* eslint-disable-next-line */}
            <a
              className="nav-item nav-link"
              href=""
              onClick={e => this.props.handleRenderedSection("Projects", e)}
            >
              <i className="fas fa-fw fa-table"></i>
              <span>Projects</span>
            </a>
            {/* eslint-disable-next-line */}
            <a
              className="nav-item nav-link"
              href=""
              onClick={e => this.props.handleRenderedSection("Instructors", e)}
            >
              <i className="fas fa-chalkboard-teacher"></i>
              <span>Instructors</span>
            </a>
            {/* eslint-disable-next-line */}
            <a
              className="nav-item nav-link"
              href=""
              onClick={e => this.props.handleRenderedSection("Students", e)}
            >
              <i className="fas fa-user-graduate"></i>
              <span>Students</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
