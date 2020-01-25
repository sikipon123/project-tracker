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
        text: "Instructors Statistics"
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}",
          startAngle: -90,
          dataPoints: [
            {
              y:
                this.props.instructors.length === 0
                  ? 100
                  : this.props.instructors.filter(instructor =>
                      instructor.isActive ? instructor : null
                    ).length,
              label: "Active Instructors"
            },
            {
              y:
                this.props.instructors.length === 0
                  ? 0
                  : this.props.instructors.filter(instructor =>
                      instructor.isActive ? null : instructor
                    ).length,
              label: "Inactive Instructors"
            }
          ]
        }
      ]
    };

    return <CanvasJSChart options={options} />;
  }
}
