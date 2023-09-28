import "./styles.css";
import React, { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, text: "Do the laundry" },
        {id: 2,  text: "Iron the clothes" },
        {id: 3,  text: "Go for a walk" }
      ]
    };
  }

  handleAddTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  handleRemoveTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId)
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <Form onAddTodo={this.handleAddTodo} />
        <List todos={this.state.todos} onRemoveTodo={this.handleRemoveTodo} />
      </div>
    );
  }
}
