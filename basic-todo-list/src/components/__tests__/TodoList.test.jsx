import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from '../TodoList';

test('TodoList renders as expected', () => {
  const component = renderer.create(<TodoList todos={[{ name: "Hello World !" }]} />);

  expect(component.toJSON()).toMatchSnapshot();
});
