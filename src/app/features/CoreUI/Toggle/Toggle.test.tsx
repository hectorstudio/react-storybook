import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Toggle from './Toggle';

describe('Toggle', () => {
  afterEach(cleanup);

  it('renders in the document', () => {
    const { getByRole } = render(<Toggle />);
    const element = getByRole('checkbox');
    expect(element).toBeInTheDocument();
  });

  it('displays label', () => {
    const handleChange = jest.fn();
    const { getByText } = render(<Toggle label='Ship automatically' onChange={handleChange} />);
    const element = getByText('Ship automatically');
    expect(element).toBeInTheDocument();
  });

  it('handles onChange', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Toggle onChange={handleChange} />);
    const element = getByRole('checkbox');

    expect(handleChange).not.toHaveBeenCalled();

    userEvent.click(element);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('handles toggling checked state', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Toggle onChange={handleChange} />);
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
    const { getByRole } = render(<Toggle defaultValue onChange={handleChange} />);
    const element = getByRole('checkbox');

    expect(handleChange).not.toHaveBeenCalled();

    userEvent.click(element);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('does not call onChange in readonly mode', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Toggle onChange={handleChange} disabled />);
    const element = getByRole('checkbox');

    userEvent.click(element);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
