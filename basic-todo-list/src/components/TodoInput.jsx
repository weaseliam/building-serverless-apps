import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoInput extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func
  }

  static defaultProps = {
    onAddTodo: () => { }
  }

  constructor() {
    super();

    this.clearValue();
  }

  clearValue = () => {
    this.state = {
      value: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === '') {
      return;
    }

    console.log(`Submit handler called with ${this.state.value}`);
    this.props.onAddTodo(this.state.value);
    this.clearValue();
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    let { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={value}></input>
        <button type="submit">Add</button>
      </form>
    );
  }
};

export default TodoInput;
