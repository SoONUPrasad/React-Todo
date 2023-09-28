import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim() !== "") {
      this.props.onAddTodo(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} className="form">
          <input
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="What's on your mind?"
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
