import React from "react";
import { ClickCounter } from "./ClickCounter";

const onCounterChange =(state) =>{
  console.log(state)
}

class App extends React.Component {
  
	render() {
		return (
      <ClickCounter onCounterChange={onCounterChange}/>
    )
}
}

export default App;
