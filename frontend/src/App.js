import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    isLoading: false,
    data: null
  };

  generate = () => {
    this.setState({ isLoading: true });
    axios
      .post("/phonenumbers/generate")
      .then(res => {
        if (res.data)
          this.setState({
            isLoading: false,
            data: res.data,
            file: res.data.fileName
          });
      })
      .catch(() => {
        this.setState({ error: "An error occured, please try again" });
      });
  };

  sortAscending = () => {
    this.setState({ isLoading: true });
    axios
      .post("/phonenumbers/change-sort-order?sortOrder=asc")
      .then(res => {
        if (res.data)
          this.setState({ isLoading: false, file: res.data.fileName });
      })
      .catch(() => {
        this.setState({ error: "An error occured, please try again" });
      });
  };

  sortDescending = () => {
    this.setState({ isLoading: true });
    axios
      .post("/phonenumbers/change-sort-order?sortOrder=desc")
      .then(res => {
        if (res.data)
          this.setState({ isLoading: false, file: res.data.fileName });
      })
      .catch(() => {
        this.setState({ error: "An error occured, please try again" });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p className="main-title">Random Phone Number Generator</p>
            <p className="sub-title">
              Click "Generate" Button to generate a list of phone numbers
            </p>
            <div className="sort-links">
              Sort: <span onClick={this.sortAscending}>Ascending</span>
              <span onClick={this.sortDescending}>Descending</span>
            </div>
            <div className="stat-area">
              {this.state.isLoading && <div className="loading" />}
              {this.state.data && (
                <div className="generated-data">
                  <span> Total Generated Numbers: {this.state.data.count}</span>
                  <br />
                  <span> Min Phone Number: {this.state.data.min}</span>
                  <br />
                  <span> Max Phone Number: {this.state.data.max}</span>
                  <br />
                  <br />
                  <span>
                    <a href={this.state.file} download>
                      <button type="submit">Download File</button>
                    </a>
                  </span>
                </div>
              )}
              {this.state.error && <div>{this.state.error}</div>}
            </div>
            <button className="generate-btn" onClick={this.generate}>
              Generate
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
