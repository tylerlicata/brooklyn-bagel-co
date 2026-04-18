// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean `isVisible`.
 * When the element enters the viewport, isVisible flips to true.
 * Threshold and rootMargin are configurable.
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      {
        threshold:  options.threshold  ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

/**
 * Staggered animation helper.
 * Returns inline style with animation-delay based on index.
 */
export function staggerDelay(index, base = 80) {
  return { animationDelay: `${index * base}ms` };
}
