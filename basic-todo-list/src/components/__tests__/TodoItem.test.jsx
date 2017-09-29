import React from 'react';
import renderer from 'react-test-renderer';

import TodoItem from '../TodoItem';

test('TodoItem renders as expected', () => {
  const component = renderer.create(<TodoItem name="Hello World !" />);

  expect(component.toJSON()).toMatchSnapshot();
});
