import React from "react";
import shortid from "shortid";
import "../../styles/components/widget.css";
import InputBox from "../atoms/InputBox";
import AddTaskIcon from "../atoms/AddTaskIcon";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form className="widget-header" onSubmit={this.handleSubmit} data-testid="form">
        <InputBox value={this.state.text} onChange={this.handleChange} />
        <div className="Grid-container" onClick={this.handleSubmit}>
          <AddTaskIcon />
          {/* <Grid container>
            <Grid item>
              <AddIcon />
              {"   "}
            </Grid>

            <Grid item style={{ paddingTop: "1px", paddingLeft: "5px" }}>
              <span style={{ paddingLeft: "5px" }}>Add task</span>
            </Grid>
          </Grid> */}
        </div>
      </form>
    );
  }
}
