import { useState, useEffect, useRef, useCallback } from 'react';
import useDebouncedCallback from './useDebouncedCallback';

// ref === [{name, ref}, {name2, ref2}, ...]
export default function useSize(ref) {
  const observer = useRef();
  const [ignored, setIgnored] = useState(0);
  // {ref1: {width, height}, ref2: {width, height}, ...}
  const [size, setSize] = useState({});

  // debounce the observing callback to avoid setting state too often
  const observe = useCallback(
    useDebouncedCallback((entries) => {
      // get the supported box width and height
      const getBoxDimension = (entry) => {
        if (entry.contentBoxSize) {
          return {
            width: entry.contentBoxSize.width,
            height: entry.contentBoxSize.height,
          };
        } else {
          return {
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          };
        }
      };

      const reducer = (acc, entry, index) => {
        // find out which ref this entry correspond to
        // find matching the ref array's index and entries' index
        const refName = ref[index].name;
        // get this ref's dimension
        const { width, height } = getBoxDimension(entry);
        // return the new dimension
        return { ...acc, [refName]: { width, height } };
      };

      let newSize;
      // if ref is an array of refs,
      // reduce the observing entries into an array of sizes
      if (Array.isArray(ref)) {
        newSize = entries.reduce(reducer, {});
        // otherwise, get the only entry's dimension
      } else {
        newSize = getBoxDimension(entries[0]);
      }
      console.log('size', newSize);
      // set the size depending on whether it was changed or not
      setSize((prev) => (prev === newSize ? prev : newSize));

      /* setSize((s) =>
      s.width !== width || s.height !== height ? { width, height } : s
    ); */
      // console.log(entries);
      // console.log('observed ' + width + 'x' + height);
    }, 300),
    []
  );

  // init and observe using resize observer onMount
  // unObserve and nullify the observer ref onUnmount
  useEffect(() => {
    if (!observer.current) {
      const RObserver =
        window.ResizeObserver || require('resize-observer-polyfill').default;
      observer.current = new RObserver(observe);
      // an array of refs can be passed in
      /* if (Array.isArray(ref)) {
        for (let target in ref) {
          observer.current.observe(target.current);
        }
      } else {
        observer.current.observe(ref.current);
      } */
      // observer.current.observe(ref.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
    //// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observe]);

  // the ref to be observed can change
  // force re-render when ref changes
  useEffect(() => {
    const forceUpdate = () => setIgnored((c) => c + 1);
    const observeAll = () => {
      // an array of refs can be passed in
      if (Array.isArray(ref)) {
        for (let target in ref) {
          observer.current.observe(target.current);
        }
      } else {
        observer.current.observe(ref.current);
      }
    };
    if (ref) {
      observeAll();
      // this make forceUpdate run at the next event tick
      window.setTimeout(forceUpdate, 0);
    }

    return () => observer.current.disconnect();
  }, [ref]);

  return size;
}
