import { useState, useEffect, RefObject } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useHover = <T extends Element | any>(ref: RefObject<T>): boolean => {
  const [value, setValue] = useState(false);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    // eslint-disable-next-line consistent-return
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref],
  );

  return value;
};

export default useHover;
