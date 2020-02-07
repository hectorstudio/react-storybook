import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Root from './Root';

describe('Root', () => {
  afterEach(cleanup);

  test('display hello world', async () => {
    const { findByText } = await render(<Root />);
    const element = await findByText('Hello World...');
    expect(element).toBeInTheDocument();
  });
});
