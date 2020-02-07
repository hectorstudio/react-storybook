/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { useRef, useEffect, Ref } from 'react';

const useCombinedRefs = <T>(...refs: (Ref<T> | null)[]) => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        // @ts-ignore
        ref(targetRef.current);
      } else {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export default useCombinedRefs;
