import { useEffect, useRef } from 'react';
function useDebouncedCallback(callback, wait) {
  // track args & timeout handle between calls
  const argsRef = useRef();
  const timeout = useRef();
  function cleanup() {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  }
  // make sure our timeout gets cleared if
  // our consuming component gets unmounted
  useEffect(() => cleanup, []);

  return function debouncedCallback(...args) {
    // capture latest args
    argsRef.current = args;
    // clear debounce timer
    cleanup();

    // this is run when timer hits 0
    const call = () => {
      if (argsRef.current) {
        callback(...argsRef.current);
      }
    };
    // start timer
    timeout.current = setTimeout(call, wait);
  };
}

export default useDebouncedCallback;
