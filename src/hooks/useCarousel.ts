"use client";

import { useState, useEffect, useCallback } from "react";

export function useCarousel(length: number, interval = 5000) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const previous = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, isPlaying]);

  return {
    current,
    next,
    previous,
    goTo,
    isPlaying,
    setIsPlaying,
  };
}
