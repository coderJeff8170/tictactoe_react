import React from 'react';
import { render } from '@testing-library/react';

import Game from './index.js';

describe('App', () => {
  test('renders App component', () => {
    render(<Game />);
  });
});