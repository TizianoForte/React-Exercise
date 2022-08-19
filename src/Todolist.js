import React from "react";



export default class TodoList extends React.Component {
    state = {
      items: [
        "fare la spesa",
        "bere caffè",
        "allenarsi",
      ],
      newItem: "",
    };
  
    addEvent = () => {
      this.setState({
        items: [...this.state.items, this.state.newItem],
        newItem: "",
      });
    };
  
    addItem = (event) => {
      this.setState({
        newItem: event.target.value,
      });
    };
  
    resetItems = () => {
      this.setState({
        items: [],
      });
    };
  
    deleteState = (array, i) => {
      array.splice(i, 1);
      this.setState({
        items: array,
      });
    };
  
    render() {
      return (
        <>
          <div>
            <h1>TODO LIST</h1>
            <input
              type="text"
              onChange={this.addItem}
              value={this.state.newItem}
            />
            <button onClick={this.addEvent} disabled={!this.state.newItem}>
              ADD
            </button>
            <button onClick={this.resetItems}>RESET</button>
            {this.props.render(this.state, this.deleteState)}
          </div>
        </>
      );
    }
}