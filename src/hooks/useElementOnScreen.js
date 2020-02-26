import { useEffect, useRef, useCallback } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  thredhold: 1.0,
};

export default function useElementOnScreen({
  onVisible,
  options = defaultOptions,
  ratio = 0.5,
  onlyOnce = false,
}) {
  // create ref to return to component to use,
  // and we observe the element using the ref
  const ref = useRef();
  // create ref to contain the intersection observer
  // so that observer can persist over parent rerenders
  const observer = useRef(null);
  // We could've used useState to persist the insection data
  // but useRef does not cause re-renders and...
  // going from intersecting to not (or vice versa) onScroll shouldn't cause rerenders
  const intersection = useRef({ isIntersecting: false, intersected: false });

  // a method that disconnect and nullify the observer variable in ref
  const unsetObserver = () => {
    // disconnect observer if there is one and unset its ref variable
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }
  };

  // a method that make sure the client browswer supports intersect observer
  // and create/return a new instance of it.
  const newObserver = useCallback(async () => {
    // import polyfill for intersection observer if not supported
    if (!('IntersectionObserver' in window)) {
      // dynamic import with webpack:
      // https://webpack.js.org/api/module-methods/#import-1
      await import('intersection-observer');
    }

    // a callback function when the element is intersecting viewport
    // this array deconstruction takes out the first entry/element
    const onIntersect = ([entry]) => {
      // execute callback when
      // entry exists
      // it is intersecting
      // element is >ratio% in view (ratio is 50% by default)
      if (entry && entry.isIntersecting && entry.intersectionRatio >= ratio) {
        onVisible();
        // update the isIntersecting property if not true
        if (!intersection.current.isIntersecting) {
          intersection.current.isIntersecting = true;
        }

        // if callback supposed run only once on intersection,
        // unset the observer and intersection modify to intersected as true
        if (onlyOnce && !intersection.current.intersected) {
          unsetObserver();
          intersection.current.intersected = true;
        }

        // or else, if it's not intersecting update the isIntersecting property if still true
      } else if (
        entry &&
        !entry.isIntersecting &&
        intersection.current.isIntersecting
      ) {
        intersection.current.isIntersecting = false;
      }
    };

    // return a new instance of intersection observer to use
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    return new IntersectionObserver(onIntersect, options);
  }, [onVisible, options, ratio, onlyOnce]);

  useEffect(() => {
    // only create new observer and observe if there isn't one
    if (!observer.current) {
      observer.current = newObserver();
      // observe the referenced element
      observer.current.observe(ref.current);
    }

    // disconnect on unMount
    return unsetObserver;
  }, [newObserver]);

  return {
    ref,
    isIntersecting: intersection.current.isIntersecting,
  };
}
