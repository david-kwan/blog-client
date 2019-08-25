import React from 'react';
import { render } from '@testing-library/react';

import Svg from '../Svg';

describe('Svg', () => {
  it('renders without error', () => {
    render(<Svg href={'http://localhost:3000'} className={''} />);
  });
});
