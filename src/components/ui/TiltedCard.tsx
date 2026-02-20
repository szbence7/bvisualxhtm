"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  className?: string;
}

const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  children,
  rotateAmplitude = 8,
  scaleOnHover = 1.02,
  className = "",
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const scaleValue = useMotionValue(1);
  
  const rotateX = useSpring(rotateXValue, springConfig);
  const rotateY = useSpring(rotateYValue, springConfig);
  const scale = useSpring(scaleValue, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current || prefersReducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateXValue.set(rotationX);
    rotateYValue.set(rotationY);
  }

  function handleMouseEnter() {
    if (prefersReducedMotion) return;
    scaleValue.set(scaleOnHover);
  }

  function handleMouseLeave() {
    if (prefersReducedMotion) return;
    scaleValue.set(1);
    rotateXValue.set(0);
    rotateYValue.set(0);
  }

  function handleTouchStart(e: React.TouchEvent) {
    e.stopPropagation();
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
