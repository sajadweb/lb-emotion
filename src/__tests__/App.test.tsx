import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import App from '../App';
import mainTheme from '../common/mainTheme';
import { ThemeProvider } from 'emotion-theming';

test('renders with correct styles', () => {
  const tree = renderer.create(<ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});