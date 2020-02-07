import { useState, useEffect, RefObject } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFocus = <T extends Element | any>(ref: RefObject<T>) => {
  const [value, setValue] = useState(false);

  const handleFocus = () => setValue(true);
  const handleBlur = () => setValue(false);

  useEffect(
    // eslint-disable-next-line consistent-return
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('focus', handleFocus);
        node.addEventListener('blur', handleBlur);

        return () => {
          node.removeEventListener('focus', handleFocus);
          node.removeEventListener('blur', handleBlur);
        };
      }
    },
    [ref],
  );

  return value;
};

export default useFocus;
