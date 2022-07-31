import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { Margin } from "@mui/icons-material";

class Trends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
  };

  render() {
    return (
      <div
        className="chart"
        style={{
          width: "50%",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Bar
          style={{ paddingTop: "10%" }}
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },

            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            animations: {
              borderWidth: {
                duration: 1000,
                // easing: "linear",
                from: 10,
                to: 1,
                loop: true,
              },
            },
          }}
        />

        <Line
          style={{ paddingTop: "10%" }}
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Most Trending" + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            // borderColor: "rgb(40, 116, 240)",

            animations: {
              borderWidth: {
                duration: 1000,
                // easing: "linear",
                from: 10,
                to: 1,
                loop: true,
              },
            },
            maintainAspectRatio: true,
          }}
        />

        <Doughnut
          style={{ paddingTop: "10%" }}
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Most Trending " + this.props.location,
              fontSize: 25,
            },
            // legend: {
            //   display: this.props.displayLegend,
            //   position: this.props.legendPosition,
            // },
          }}
        />
        {/* <div>
          <img src="state.png" alt="state"></img>
        </div> */}
      </div>
    );
  }
}

export default Trends;
