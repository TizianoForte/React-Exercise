import React from "react";

export class ClickTracking extends React.Component {
  state = {
    button: "",
  };

  lastClick = (event) => {
    console.log(event.target.name,"Ciao Erik")
    this.setState({
      button: event.target.name,
      
    });
  };

  render() {
    return (
      <div>
        <button name="firstButton" onClick={this.lastClick}>
          firstButton
        </button>
        <button name="secondButton" onClick={this.lastClick}>
          secondButton
        </button>
        <button name="thirdButton" onClick={this.lastClick}>
          thirdButton
        </button>
        <h1>The last button is: {this.state.button}</h1>
      </div>
    );
  }
}


export default ClickTracking