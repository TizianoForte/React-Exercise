import React from "react";
import { ClickCounter } from "./ClickCounter";



class App extends React.Component {
  
	render() {
		return (
      <ClickCounter incrementBy={20}/>
    )
}
}

export default App;
