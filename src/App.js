import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracking from "./ClickTracking";

class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <ClickTracking/>
      </div>
    );
  }
}

export default App;
