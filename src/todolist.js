import { Component } from "react";
import mylist from "./mylist";


export  class TodoList extends Component {
    state = {
      inputTodo: "",
      data: mylist,
    };
  
    saveTodo = (event) => {
      const todo = event.target.value;
      this.setState({
        inputTodo: todo,
      });
    };
  
    addTodo = () => {
      this.setState({
        data: [...mylist, { todo: this.state.inputTodo }],
        inputTodo: ""
      });
    };
  
    render() {
      return (
        <>
          <h1>Todo List</h1>
          <input type="text" onChange={this.saveTodo} value={this.state.inputTodo}/>
          <button onClick={this.addTodo}>Add</button>
          <ul>
            {this.state.data.map((item, key) => {
              return <li key={key}>{item.todo}</li>;
            })}
          </ul>
        </>
      );
    }
  };


  export default TodoList