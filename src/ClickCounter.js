import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  buttonClick = () => {
    this.setState((increment) => {
      return { count: increment.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.buttonClick}>Clicca Erik!</button>
      </div>
    );
  }
}

export default ClickCounter