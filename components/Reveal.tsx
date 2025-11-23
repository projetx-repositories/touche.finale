import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean; // reveal once then stop observing
  delay?: number; // transition delay in ms
};

const Reveal: React.FC<RevealProps> = ({ children, className = '', threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const style: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
