import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TwoColumnGrid from './TwoColumnGrid';

const dummyContent = 'adsu87f6t tgzuhiasdjoufgz67';

describe('TwoColumnGrid', () => {
  afterEach(cleanup);

  it('displays children', () => {
    const { getByText } = render(
      <TwoColumnGrid>{dummyContent}</TwoColumnGrid>,
    );
    const element = getByText(dummyContent);
    expect(element).toBeInTheDocument();
  });
});
