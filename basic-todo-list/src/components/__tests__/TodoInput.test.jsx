import React from 'react';
import renderer from 'react-test-renderer';

import TodoInput from '../TodoInput';

test('TodoInput renders as expected', () => {
  const component = renderer.create(<TodoInput />);

  expect(component.toJSON()).toMatchSnapshot();
});
