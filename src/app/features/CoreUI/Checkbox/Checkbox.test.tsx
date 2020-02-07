import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  afterEach(cleanup);

  it('renders in the document', () => {
    const { getByRole } = render(<Checkbox />);
    const element = getByRole('checkbox');
    expect(element).toBeInTheDocument();
  });

  it('displays label', () => {
    const handleChange = jest.fn();
    const { getByText } = render(<Checkbox label='Ship automatically' onChange={handleChange} />);
    const element = getByText('Ship automatically');
    expect(element).toBeInTheDocument();
  });

  it('handles onChange', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={handleChange} />);
    const element = getByRole('checkbox');

    expect(handleChange).not.toHaveBeenCalled();

    userEvent.click(element);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('handles toggling checked state', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={handleChange} />);
    const element = getByRole('checkbox');

    expect(handleChange).not.toHaveBeenCalled();

    userEvent.click(element);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);

    handleChange.mockClear();

    userEvent.click(element);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('handles default checked state', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox checked onChange={handleChange} />);
    const element = getByRole('checkbox');

    expect(handleChange).not.toHaveBeenCalled();

    userEvent.click(element);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('does not call onChange in readonly mode', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={handleChange} disabled />);
    const element = getByRole('checkbox');

    userEvent.click(element);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
