import React from "react";
import axios from "axios";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../LandingPage/LandingPage.css";

class SignUp extends React.Component {
  state = {
    userType: "",
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
  addInstructor = () => {
    axios
      .post("api/instructors/registerinstructor", this.state.newUser)
      .then(console.log("success"));
  };
  addStudent = () => {
    axios
      .post("api/students/registerStudent", this.state.newUser)
      .then(console.log("success"));
  };

  handleSignUp = () => {
    if (this.state.userType === "Instructor") {
      this.addInstructor(this.state.newUser);
      alert(`${this.state.userType} added successfully`);
      this.props.toggle();
    } else if (this.state.userType === "Student") {
      this.addStudent(this.state.newUser);
      alert(`${this.state.userType} added successfully`);
      this.props.toggle();
    } else alert("please specify user type");
  };
  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.type}</ModalHeader>
        <ModalBody className="formArea">
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
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              this.handleSignUp();
            }}
          >
            Sign Up
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default SignUp;
