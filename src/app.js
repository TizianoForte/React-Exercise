import React from "react";
import {Welcome} from "./Welcome";



 class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<strong>Tiziano</strong>}/> 
      </div>
    );
  }
};

export default App

//Penso che l'esercizio richiedesse questo.
