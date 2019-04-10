import React, { Component } from "./node_modules/react";
import "./App.css";
import Dashboard from "./board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>At Bat</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;