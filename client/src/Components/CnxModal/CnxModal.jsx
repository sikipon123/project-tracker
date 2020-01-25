import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../LandingPage/LandingPage.css";
import "./CnxModal.css";
import {
  addInstructor,
  getInstructors,
  loginInstructor
} from "../../actions/InstructorActions";
import { addStudent, getStudents } from "../../actions/StudentActions";

class CnxModal extends React.Component {
  state = {
    userType: "",
    users: [],
    userLogin: { email: "", password: "" },
    newUser: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      birthDate: "",
      isActive: false
    }
  };

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };
  handleChangeLogin = e => {
    this.setState({
      userLogin: {
        ...this.state.userLogin,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = () => {
    const Userdata = {
      email: this.state.userLogin.email,
      password: this.state.userLogin.password
    };

    this.props.loginInstructor(Userdata);
  };

  // checkEmpty = () => {
  //   let emptyField = 0;
  //   // eslint-disable-next-line
  //   Object.values(this.state.newUser).map(field => {
  //     if (field === "") emptyField = 1;
  //   });
  //   return emptyField;
  // };
  // eslint-disable-next-line

  // handleSignUp = () => {
  //   let validUser = 1;
  //   if (this.checkEmpty() || this.state.userType === "") {
  //     alert("One field is empty or empty user type");
  //     validUser = 0;
  //   } else {
  //     // eslint-disable-next-line
  //     this.state.users.map(user => {
  //       if (user.email === this.state.newUser.email) {
  //         alert("email exists");
  //         validUser = 0;
  //       } else if (user.username === this.state.newUser.username) {
  //         alert("UserName exists");
  //         validUser = 0;
  //       }
  //     });
  //   }
  //   if (validUser === 1) {
  //     if (this.state.userType === "Instructor") {
  //       this.props.addInstructor(this.state.newUser);
  //       alert(`${this.state.userType} added successfully`);
  //     } else if (this.state.userType === "Student") {
  //       this.props.addStudent(this.state.newUser);
  //       alert(`${this.state.userType} added successfully`);
  //     }
  //     this.props.toggle();
  //   }
  // };

  componentWillReceiveProps(nextProps) {
    if (nextProps.authInstructor.isAuthenticatedInstructor) {
      console.log("this props:", this.props);
      // this.props.history.push("/instructorHome");
      // window.location.href = "/instructorHome";
    }
  }

  componentDidMount() {
    // this.props.getInstructors();
    // this.props.getStudents();
    // if (this.props.authInstructor.isAuthenticatedInstructor) {
    //   this.props.history.push("/instructorHome");
    // }
  }
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.type}</ModalHeader>
        <ModalBody className="formArea">
          {/* <div className="formArea"> */}
          <img
            src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="logo"
          />
          <h3>Project Tracker</h3>
          <p className="specifyUser">please specify the user type</p>
          <div className="userType">
            <button
              type="button"
              className="btn btn-info"
              onClick={() =>
                this.setState({
                  userType: "Student",
                  users: this.props.students
                })
              }
            >
              Student
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() =>
                this.setState({
                  userType: "Instructor",
                  users: this.props.instructors
                })
              }
            >
              Instructor
            </button>
          </div>
          <h5 id="welcomeMsg">
            Welcome <span>{this.state.userType}</span>
          </h5>
          {this.props.type === "Login" ? (
            <>
              <input
                type="email"
                className="form-control"
                id="emailArea"
                placeholder="Email..."
                name="email"
                onChange={this.handleChangeLogin}
              />
              <div className="passwordZone">
                <input
                  type="password"
                  className="form-control"
                  id="passwordArea"
                  placeholder="Password..."
                  name="password"
                  onChange={this.handleChangeLogin}
                />
                <a href="/" className="forgotPassword">
                  <p>Forgot Password?</p>
                </a>
              </div>
            </>
          ) : (
            <></>
          )}
          {this.props.type === "Sign Up" ? (
            <>
              <input
                type="text"
                className="form-control"
                placeholder="First Name..."
                name="firstName"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name..."
                name="lastName"
                onChange={this.handleChange}
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email..."
                name="email"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="UserName..."
                name="username"
                onChange={this.handleChange}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="PhoneNumber..."
                name="phoneNumber"
                onChange={this.handleChange}
              />
              <p className="birthdate">Birth date: </p>
              <input
                className="form-control"
                type="date"
                id="example-date-input"
                name="birthDate"
                onChange={this.handleChange}
              ></input>
            </>
          ) : (
            <></>
          )}
          {/* </div> */}
        </ModalBody>
        <ModalFooter>
          <Link
            to={
              this.props.authInstructor.isAuthenticatedInstructor === true
                ? "/instructorHome"
                : "#"
            }
          >
            <Button
              color="primary"
              onClick={() => {
                if (this.props.type === "Sign Up") this.handleSignUp();
                this.handleLogin();
              }}
            >
              {this.props.type}
            </Button>
          </Link>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(
  state => {
    return {
      authInstructor: state.authInstructor
      // students: state.studentsReducer.students
    };
  },
  // { getInstructors, addInstructor, getStudents, addStudent,
  { loginInstructor }
)(CnxModal);
