import React from "react";
import "../../styles/components/option.css";
import EditIcon from "../atoms/EditIcon";
import DeleteIcon from "../atoms/DeleteIcon";
import CheckboxIcon from "../atoms/CheckboxIcon";
import UpdateIcon from "../atoms/UpdateIcon";
import Para from "../atoms/Para";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
    this.renderForm = this.renderForm.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(event) {
    event.preventDefault();
    this.props.editTodo(this.props.todo, this.input.value);
    this.toggleState();
  }

  toggleState() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    })
  }

  handleNewVal(newVal) {
    console.log(newVal);
    this.updateTodo();
  }

  renderForm() {
    return (
      <form className="option" onSubmit={this.updateTodo} data-testid="form">
        <input 
          type="text" 
          ref={(val) => {
            this.input = val
          }} 
          defaultValue={this.props.todo.text} 
        />
        <UpdateIcon placement="bottom" click={this.updateTodo} />
        
      </form>
    )
  }

  renderTodos() {
    return (
      <div className="option" data-testid="todo">
        <div className="option-text">
          <Para val={this.props.todo.text}/>
        </div>
        <div className="option-materials">
          <EditIcon placement="bottom" click={() => this.toggleState()} />
          
          <CheckboxIcon placement="bottom" checked={this.props.todo.complete ? true : false} click={this.props.toggleComplete} />
          
          <DeleteIcon placement="bottom" click={this.props.onDelete} />
          
        </div>
      </div>
    )
  }

  render() {
    const { isEditing } = this.state;
    return (
      <section>
        {
          isEditing ? this.renderForm() : this.renderTodos()
        }
      </section>
    );
  }
}

/* <Tooltip title="Delete ToDo" placement="bottom" arrow>
            <div>
              <IconButton>
                <DeleteOutlineOutlinedIcon onClick={this.props.onDelete} />
              </IconButton>
            </div>
          </Tooltip> */

/* <Tooltip title="Mark as Complete" placement="bottom" arrow>
            <div>
              <IconButton>
                <CheckBox isChecked={this.props.todo.complete ? true : false} onClick={this.props.toggleComplete} />
              </IconButton>
            </div>
          </Tooltip> */

/*<Tooltip title="Edit ToDo" placement="bottom" arrow>
            <div>
              <IconButton>
                <CreateOutlinedIcon onClick={() => this.toggleState()} />
              </IconButton>
            </div>
          </Tooltip> */

/* <p style={{ margin: "0" }}>{this.props.todo.text}</p> */

/* <Tooltip title="Update Todo" placement="bottom" arrow>
          <div>
            <IconButton onClick={this.updateTodo}>
              <ArrowUpwardIcon />
            </IconButton>
          </div>
        </Tooltip> */

/* <UpdateInputBox
          onNewVal={this.handleNewVal}
          defaultValue={this.props.todo.text}
        /> */

