import React, { Component } from "react";
import "../../../assets/fontawesome-free/css/all.min.css";
import "./css/styles.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutAdmin } from "../../../actions/authAdminAction";

class navbar extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.logoutAdmin();
  };
  render() {
    // const {admin}= this.props.authAdmin;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <a className="navbar-brand mr-1" href="/">
          Project Tracker
        </a>
        <ul className="navbar-nav ml-auto ml-md-0">
          <li className="nav-item dropdown no-arrow">
            {/* eslint-disable-next-line */}
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle fa-fw" style={{"fontSize":"2rem"}}></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              {/* eslint-disable-next-line */}
              <a
                className="dropdown-item"
                href=""
                onClick={e => this.props.handleRenderedSection("Account", e)}
              >
                Account
              </a>
              {/* eslint-disable-next-line */}
              <a
                className="dropdown-item"
                href=""
                onClick={e => this.handleLogout(e)}
              >
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
navbar.propTypes = {
  logoutAdmin: PropTypes.func.isRequired
  // authAdmin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // authAdmin:state.authAdmin
});

export default connect(mapStateToProps, { logoutAdmin })(navbar);
