import React from 'react';
import { render } from '@testing-library/react';

import About from '../About';

describe('About Component', () => {
  it('renders without error', () => {
    render(<About />);
  });
});
