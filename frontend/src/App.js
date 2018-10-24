import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    isLoading: false
  };

  generate = () => {
    this.setState({ isLoading: true });
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
              Sort: <span>Ascending</span>
              <span>Descending</span>
            </div>
            <div className="stat-area">
              {this.state.isLoading && <div className="loading" />}
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
