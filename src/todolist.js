
import { Component } from "react";



export  class TodoList extends Component {
    state = {
      newTodo: "",
      data: [],
    };
  
    saveTodo = (event) => {
      const todo = event.target.value;
      this.setState({
        newTodo: todo,
      });
    };
  
    addTodo = () => {
      this.setState({
        data: [...this.state.data, { todo: this.state.newTodo }],
        newTodo: ""
      });
    };

    removeTodo = () => {
      this.setState({
        data: [],
      });
    }
    
    render() {
      return (
        <>
          <h1>Todo List</h1>
          <input type="text" onChange={this.saveTodo} value={this.state.newTodo}/>
          <button onClick={this.addTodo}>Add</button>
          <button onClick={this.removeTodo}>Reset All</button>
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