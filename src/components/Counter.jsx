import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };
  render() {
    // console.log(this.state.count);
    return (
      <div className="counterDiv">
        <div>
          <h1>{this.state.count}</h1>
        </div>
        <div className="controls">
          <button onClick={this.handleDecrease}>-</button>
          <button onClick={this.handleIncrease}>+</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
