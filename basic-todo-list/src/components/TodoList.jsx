import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo }) => (
  <ul>
    {
      todos.map((todo, index) =>
        <TodoItem
          name={todo.name}
          done={todo.done}
          onToggleDone={() => onToggleTodo(todo, index)}
          key={index} />)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleTodo: PropTypes.func
};

TodoList.defaultProps = {
  todos: [],
  onToggleTodo: () => { }
};

export default TodoList;
