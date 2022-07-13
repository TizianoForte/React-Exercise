import React from "react";
import {Welcome} from "./Welcome";



 class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<strong>Erick</strong>}age={25}/> 
      </div>
    );
  }
};

export default App

//Penso che l'esercizio richiedesse questo.
