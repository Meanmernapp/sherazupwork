"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxSection({ children, offset = 50, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          const scrolled = window.scrollY;
          const elementOffset = ref.current.offsetTop;
          setY((scrolled - elementOffset) * 0.5);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${y}px)` }}>
      {children}
    </div>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, duration = 0.8, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !ref.current) return;

    const element = ref.current;
    const increment = (to - from) / (duration * 60);
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        element.textContent = `${prefix}${to}${suffix}`;
        clearInterval(timer);
      } else {
        element.textContent = `${prefix}${Math.floor(current)}${suffix}`;
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, from, to, duration, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}{from}{suffix}</span>;
}

interface FloatingProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingElement({ children, delay = 0, duration = 3, className = "" }: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
