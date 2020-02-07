import React, { RefObject, FC, useRef } from 'react';
import { fireEvent } from '@testing-library/dom';
import { render, act } from '@testing-library/react';

import useHover from './useHover';

interface RenderHookProps {
  callback: (isHovering: boolean, ref: RefObject<HTMLDivElement>) => void;
}

const RenderHook: FC<RenderHookProps> = ({ callback }) => {
  const ref = useRef(null);
  const isHovering = useHover(ref);

  callback(isHovering, ref);

  return (
    <div ref={ref}>test</div>
  );
};

it('should update return value on hover', () => {
  jest.useFakeTimers();

  let hasHover = false;
  let currentReference: RefObject<HTMLDivElement> | null = null;
  render(<RenderHook callback={(isHovering, ref) => { hasHover = isHovering; currentReference = ref; }} />);

  expect(hasHover).toBe(false);

  act(() => {
    if (!currentReference || !currentReference.current) {
      throw new Error('ref is null');
    }
    fireEvent.mouseOver(currentReference.current);
  });

  act(() => {
    jest.runOnlyPendingTimers();
  });

  expect(hasHover).toBe(true);

  act(() => {
    if (!currentReference || !currentReference.current) {
      throw new Error('ref is null');
    }
    fireEvent.mouseOut(currentReference.current);
  });

  expect(hasHover).toBe(false);
});
