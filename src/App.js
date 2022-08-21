import React from "react";
import { CarDetails } from "./CarDetails";

const initialData = {
  brand: "Mini",
  model: "Cooper",
  year: "2000",
  color: "black",
}
class App extends React.Component {
  render() {
    return <CarDetails initialData={initialData}/>;
  }
}

export default App;
