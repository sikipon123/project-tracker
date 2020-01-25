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
        text: "Projects Statistics"
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}",
          startAngle: -90,
          dataPoints: [
            {
              y:
                this.props.projects.length === 0
                  ? 100
                  : this.props.projects.filter(project =>
                      project.idInstructor ? project : null
                    ).length,
              label: "Assigned Projects"
            },
            {
              y:
                this.props.projects.length === 0
                  ? 0
                  : this.props.projects.filter(project =>
                      project.idInstructor ? null : project
                    ).length,
              label: "Unassigned Projects"
            }
          ]
        }
      ]
    };

    return <CanvasJSChart options={options} />;
  }
}
