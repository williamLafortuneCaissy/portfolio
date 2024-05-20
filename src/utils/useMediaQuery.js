"use client";
import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    setMatches(mediaQueryList.matches)

    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;