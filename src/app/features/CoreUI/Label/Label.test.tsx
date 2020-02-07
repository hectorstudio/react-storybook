/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Label from './Label';

const dummyText = 'Some label text';

describe('Label', () => {
  afterEach(cleanup);

  it('display text', () => {
    const { getByText } = render(<Label title={dummyText} />);
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });

  it('displays children', () => {
    const { getByText } = render(
      <Label title='si9d0'>{dummyText}</Label>,
    );
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });
});
