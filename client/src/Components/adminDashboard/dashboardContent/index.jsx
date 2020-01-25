import React, { Component } from "react";
import "./css/styles.css";
import Account from "./account/index";
import Statistics from "./statistics/index";
import Instructors from "./instructors/index";
import Students from "./students/index";
import Projects from "./projects/index";
import AssignModal from "./projects/assignModal";


export default class index extends Component {
  state = {
    isOpen: false,
    idProject:null,
    idInstructor:null
  };
  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    // console.log("toggled modal");
  };
  setProjectIdInModal= id=>{
    this.setState({
      idProject:id
    })
  }
  setInstructorIdInModal= id=>{
    this.setState({
      idInstructor:id
    })
  }

  renderSwitchSection = () => {
    switch (this.props.section) {
      case "Account":
        return <Account />;
      case "Statistics":
        return <Statistics />;
      case "Instructors":
        return <Instructors />;
      case "Students":
        return <Students />;
      case "Projects":
        return <Projects toggleIsOpen={this.toggleIsOpen} setProjectIdInModal={this.setProjectIdInModal} setInstructorIdInModal={this.setInstructorIdInModal}/>;
      default:
        return <Statistics />;
    }
  };
  render() {
    return (
      <div className="container-fluid content-container">
        {this.renderSwitchSection()}
        {this.state.isOpen?<AssignModal className="assign-modal" id="#exampleModal" toggleIsOpen={this.toggleIsOpen} idProject={this.state.idProject} idInstructor={this.state.idInstructor}/>:null}
      </div>
    );
  }
}
