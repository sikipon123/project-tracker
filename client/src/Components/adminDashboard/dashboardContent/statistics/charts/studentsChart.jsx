import React, { Component } from "react";
import CanvasJSReact from "../../../../../assets/canvasjs/canvasjs.react";
// eslint-disable-next-line
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class InstructorsChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: false,
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        text: "Students Statistics"
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}",
          startAngle: -90,
          dataPoints: [
            {
              y: !this.props.students
                ? 100
                : this.props.students.filter(student =>
                    student.isActive ? student : null
                  ).length,
              label: "Active Students"
            },
            {
              y: !this.props.students.length
                ? 100
                : this.props.students.filter(student =>
                    student.isActive ? null : student
                  ).length,
              label: "Inactive Students"
            }
          ]
        }
      ]
    };

    return <CanvasJSChart options={options} />;
  }
}
