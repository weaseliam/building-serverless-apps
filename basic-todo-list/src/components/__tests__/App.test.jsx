import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

test('App renders as expected', () => {
  const component = renderer.create(<App />);

  expect(component.toJSON()).toMatchSnapshot();
});
