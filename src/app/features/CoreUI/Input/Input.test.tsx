import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Input from './Input';

const placeholder = 'input';

describe('Input', () => {
  afterEach(cleanup);

  it('handles change event', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} onChange={handleChange} />,
    );
    const element = getByPlaceholderText(placeholder);
    fireEvent.input(element, { target: { value: '42' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element).toBeInTheDocument();
  });

  it('supports text type', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} type='text' />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest('input')).toHaveAttribute('type', 'text');
  });

  it('supports email type', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} type='email' />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest('input')).toHaveAttribute('type', 'email');
  });

  it('supports number type', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} type='number' />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest('input')).toHaveAttribute('type', 'number');
  });

  it('supports password type', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} type='password' />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest('input')).toHaveAttribute('type', 'password');
  });

  it('can be disabled', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} disabled />,
    );
    const element = getByPlaceholderText(placeholder);
    expect(element.closest('input')).toHaveAttribute('disabled', '');
  });
});
