import React from "react";
import { Counter } from "./Counter";



 class App extends React.Component {
  render() {
    return (
      <div>
        <Counter count={34} incrementBy={2} timeout={1500}/>
      </div>
    );
  }
};

export default App


