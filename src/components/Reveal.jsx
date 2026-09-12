import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal — lightweight scroll-triggered fade/rise wrapper.
 * Replaces the need for an animation library: uses IntersectionObserver
 * and CSS transitions defined in index.css (.reveal / .reveal-visible).
 *
 * Usage:
 *   <Reveal><h2>Heading</h2></Reveal>
 *   <Reveal delay={120} as="li">...</Reveal>
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  y = 16,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms', '--reveal-y': `${y}px` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
