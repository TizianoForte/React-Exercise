
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
    removeElement = (key) => {
      const toDelete = this.state.data.filter((item,index) => index !== key);
      this.setState({
        data:[...toDelete]
      });
    };
    
    render() {
      return (
        <>
          <h1>Todo List</h1>
          <input type="text" onChange={this.saveTodo} value={this.state.newTodo}/>
          <button onClick={this.addTodo}>Add</button>
          <button onClick={this.removeTodo}>Reset All</button>
          <ul>
            {this.state.data.map((item, key) => {
              return <li key={key}>
                <button onClick={()=>this.removeElement(key)}>Remove</button>
                
                {item.todo}</li>;
            })}
            
          </ul>
        </>
      );
    }
  };


  export default TodoList