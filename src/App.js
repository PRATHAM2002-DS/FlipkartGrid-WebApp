// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import Home from "./Components/Home";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trends from "./Components/Trends/Trends";
import Query from "./Components/Query/Query";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "48megapixel",
          "5G Phone",
          "amoled display",
          "bezel_less display",
          "highRAM Phone",
          "lightweight",
          "snapdragon",
          "Gaming Phone",
          "Battery life",
          "Octacore Processor",
          "Quick Charging",
          "affordable",
        ],
        datasets: [
          {
            label: "TrendScore",
            data: [
              3950088.98707066, 107538236.2, 7857047.71946112, 1077394.95199238,
              29143533.8335433, 1333498.409, 6081084.44952911, 65633661.0341396,
              88722882.5, 7375250.034, 99773072.15, 27428924.7263928,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/trends"
                element={
                  <Trends
                    chartData={this.state.chartData}
                    legendPosition="bottom"
                  />
                }
              />
              <Route path="/query" element={<Query />} />
              {/* <Home /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
