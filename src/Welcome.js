import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
  render(){
    const {name}= this.props;
    return (
        <div>
        <p>Welcome {name}!</p>
        <Age age={34}/>
        </div>
    )

  }
}

Welcome.defaultProps = {
  name: "Tiziano",
};




