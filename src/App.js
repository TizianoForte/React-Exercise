import React from "react";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";


class App extends React.Component {
  render() {
    return (
      <div>
        <Login/>
        <UncontrolledLogin/>
      </div>
    );
  }
}

export default App;
