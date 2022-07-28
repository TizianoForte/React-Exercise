import React from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  user = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input name="user" onChange={this.user}></input>
        <Welcome name={this.state.name} />
      </div>
    );
  }
}

export default InteractiveWelcome;
