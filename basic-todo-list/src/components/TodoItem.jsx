import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ name, done, onToggleDone }) => (
  <li
    style={{ textDecoration: done ? "line-through" : "none" }}
    onClick={onToggleDone}>
    {name}
  </li>
);

TodoItem.propTypes = {
  name: PropTypes.string,
  done: PropTypes.bool,
  onToggleDone: PropTypes.func
};

TodoItem.defaultProps = {
  name: '',
  done: false,
  onToggleDone: () => { }
};

export default TodoItem;
