import React from "react";
import TodoList from "./Todolist";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items, deleteState) => {
            const itemsCopy = [...items.items];
            return (
              <ul className="list">
                {itemsCopy.map((el, i) => (
                  <div key={i}>
                    <li>
                      <button
                        onClick={() => {
                          deleteState(itemsCopy, i);
                        }}
                      >
                        Remove
                      </button>
                      {el}
                    </li>
                  </div>
                ))}
              </ul>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
