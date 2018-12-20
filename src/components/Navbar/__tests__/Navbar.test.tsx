import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Navbar from '../Navbar';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const tree = renderer.create(<Navbar theme={mainTheme} primary>hi test</Navbar>).toJSON();
    // expect(tree).toHaveStyleRule('background-color', mainTheme.color.primary);
    // expect(tree).toHaveStyleRule('color', mainTheme.color.primary_dark);
    expect(tree).toMatchSnapshot();
});
