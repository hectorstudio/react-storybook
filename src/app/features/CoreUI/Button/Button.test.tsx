import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Button from './Button';

const testLabel = 'Hello World';

describe('Button', () => {
  afterEach(cleanup);

  it('displays label', () => {
    const { getByText } = render(<Button>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element).toBeInTheDocument();
  });

  it('can be of type submit', () => {
    const { getByText } = render(<Button type='submit'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'submit');
  });

  it('can be of type reset', () => {
    const { getByText } = render(<Button type='reset'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'reset');
  });

  it('can be of type button', () => {
    const { getByText } = render(<Button type='button'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });

  it('is of type button by default', () => {
    const { getByText } = render(<Button>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });

  it('default button is not inversed', () => {
    const { getByText } = render(<Button>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).not.toHaveClass('inverse');
  });

  it('inversed button swaps colors', () => {
    const { getByText } = render(<Button inverse>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveClass('inverse');
  });

  it('handle click', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>{testLabel}</Button>);
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });

  it('ignore click when disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} disabled>{testLabel}</Button>);
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('supports smaller size', () => {
    const { getByText } = render(<Button size='small'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveClass('small');
  });

  it('fill full width', () => {
    const { getByText } = render(<Button fillWidth>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveClass('fullWidth');
  });
});
