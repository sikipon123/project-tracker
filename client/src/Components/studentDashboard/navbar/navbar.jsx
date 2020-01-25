import React, { Component } from "react";
import "../../../assets/fontawesome-free/css/all.min.css";
import "./css/style.css";

// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {logoutStudent} from '../../../actions/authStudentAction';

class navbar extends Component {
  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    window.location.href = "http://localhost:3000/";
  };
  render() {
    // const {admin}= this.props.authStudent;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <a className="navbar-brand mr-1" href="/">
          Project Tracker
        </a>
        <ul className="navbar-nav ml-auto ml-md-0">
          <li className="nav-item">
            {/* eslint-disable-next-line */}
            {/* <a
              href="#"
              className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle fa-fw"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            > */}
            {/* eslint-disable-next-line */}
            <a
              className="dropdown-item"
              style={{ backgroundColor: "gray" }}
              href=""
              // onClick={e => this.props.handleRenderedSection("Account", e)}
              onClick={e => this.handleLogout(e)}
            >
              Logout
            </a>
            {/* eslint-disable-next-line */}
            {/* <a
                className="dropdown-item"
                href="#"
                onClick={e => this.handleLogout(e)}
              >
                Logout
              </a>
            </div> */}
          </li>
        </ul>
      </nav>
    );
  }
}
// navbar.propTypes = {
//   logoutStudent: PropTypes.func.isRequired
//   // authStudent: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   // authStudent:state.authStudent
// });

// export default connect(mapStateToProps, { logoutStudent })(navbar);
export default navbar;
