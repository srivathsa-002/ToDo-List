import React from "react";
import TodoForm from "../molecule/TodoForm";
import Todo from "../molecule/Todo";
import "../../styles/components/container.css"
import "../../styles/components/widget.css";
import "../../styles/components/option.css";
import NavigationButtons from "../molecule/NavigationButtons";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  editTodo = (oldTodo, newValue) => {
    oldTodo.text = newValue;
  }

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = str => {
    this.setState({
      todoToShow: str
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div data-testid="todoList">
        <div className="row">
          <div className="column" style={{ float: "left", width: "20vw" }}>
            <NavigationButtons badgeContent={this.state.todos.filter(todo => !todo.complete).length} all={() => this.updateTodoToShow("all")} active={() => this.updateTodoToShow("active")} complete={() => this.updateTodoToShow("complete")}/>
            {/* <div className="button-container">
              <div className="three-buttons">
                <div className="hoverable1" onClick={() => this.updateTodoToShow("all")} val="All">
                  <AllIcon />
                  {/* <ListIcon />*/}
                  {/* {" "}All 
                </div>
                <hr />
                <div className="hoverable2" onClick={() => this.updateTodoToShow("active")} val="Active">
                  <ActiveIcon />
                  <AccessibilityNewIcon />
                  <Badge badgeContent={this.state.todos.filter(todo => !todo.complete).length} color="primary">
                    {" "}Active
                  </Badge>
                </div>
                <hr />
                <div className="hoverable3" onClick={() => this.updateTodoToShow("complete")} val="Complete">
                  <CompleteIcon /> */}
                  {/* <PlaylistAddCheckIcon /> */}
                  {/* {" "}Completed
                  </div>
              </div>
            </div> */}
          </div>
          <div className="column" style={{ width: "77vw", float: "left" }}>
            <div className="container" style={{ maxWidth: "100vw" }}>
              <TodoForm onSubmit={this.addTodo} />
              <div className="widget">
                {todos.map((todo) => (
                  <Todo
                    key={todo.id}
                    toggleComplete={() => this.toggleComplete(todo.id)}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                    todo={todo}
                    editTodo={this.editTodo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
