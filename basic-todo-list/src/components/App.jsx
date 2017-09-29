import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [{
        name: "Hello World !",
        done: false
      }]
    };
  }

  handleAddTodo = (name) => {
    let todo = {
      name,
      done: false
    };
    let todos = Object.assign(this.state.todos);
    todos.push(todo);

    this.setState({
      todos
    });
  }

  handleToggleTodo = (todo1, index) => {
    console.log(`Toggle todo for index ${index}`);

    let todos = Object.assign(this.state.todos);
    let todo = todos[index];
    todo.done = !todo.done;

    this.setState({
      todos
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Header />
        <TodoList todos={todos} onToggleTodo={this.handleToggleTodo} />
        <TodoInput onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
