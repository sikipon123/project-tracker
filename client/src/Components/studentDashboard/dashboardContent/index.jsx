import React, { Component } from "react";
import "./css/styles.css";
import Account from "./account/index";
// import Statistics from "./statistics/index";
import Projects from "./projects/index";
export default class index extends Component {
  renderSwitchSection = () => {
    switch (this.props.section) {
      case "Account":
        return <Account />;
      case "Projects":
        return <Projects />;
      default:
        return <Projects />;
    }
  };
  render() {
    return (
      <div className="container-fluid content-container">
        {this.renderSwitchSection()}
      </div>
    );
  }
}
