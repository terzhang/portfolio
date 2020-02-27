import { useRef, useEffect, useCallback } from 'react';

/**
 * @param {Function} onIntersect Function to call once intersected
 * @param {Object} optionsData Options object used to initialize IntersectionObserver
 * @param {boolean} onlyOnce Whether to stop observing after onIntersect is fired once
 *
 * @returns {Object} A ref object created by useRef. Use this to assign to the element you want to observe.
 *
 * Usage:
 * const Component = () => {
 *   const targetRef = useIntersect(() => console.log('impressed!'));
 *
 *   return <div ref={targetRef}>Something here</div>
 * }
 */

const initialOptions = {
  root: null,
  rootMargin: '0px',
  // threshold can be an array as well
  threshold: 0.3,
};

// a method that make sure the client browswer supports intersect observer
// import the polyfill if it doesn't
const checkPolyfill = async () => {
  // import polyfill for intersection observer if not supported
  if (!('IntersectionObserver' in window)) {
    // dynamic import with webpack:
    // https://webpack.js.org/api/module-methods/#import-1
    await import('intersection-observer');
  }
};

const useIntersect = (
  onIntersect,
  options = initialOptions,
  onlyOnce = false
) => {
  const intersected = useRef(false);
  const targetRef = useRef();
  // We could've used useState to persist the insection data
  // but useRef does not cause re-renders when mutating intersected.current
  const observer = useRef(null);

  const handleIntersect = useCallback(
    ([entry]) => {
      const isIntersecting = (entry && entry.isIntersecting) || false;

      // only perform callback when it is intersecting with the ref'ed element
      if (isIntersecting) {
        onIntersect();

        // if callback are to be run on first intersection and not subsquent ones,
        // unset the observer and set the ref variable, intersected to true to not run anymore
        if (!intersected.current && observer.current && onlyOnce) {
          observer.current.disconnect();
          observer.current = null;
          intersected.current = true;
        }
      }
    },
    [onIntersect, onlyOnce]
  );

  useEffect(() => {
    checkPolyfill();
    // only create new observer and observe if there isn't one
    if (!intersected.current && !observer.current) {
      // create an observer and observe the referenced element
      observer.current = new IntersectionObserver(handleIntersect, options);
      observer.current.observe(targetRef.current);
    }

    return () => {
      // unset observer on unmount
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [handleIntersect, options, targetRef]);

  // return the ref for target component to use
  return targetRef;
};

export default useIntersect;
