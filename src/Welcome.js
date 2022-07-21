import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        <Age age={15}/>
      </div>
    )
  }
}

