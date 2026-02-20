import React from "react";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  /** Base color to preserve (defaults to currentColor) */
  baseColor?: string;
}

/**
 * ShinyText - Animated shine effect across text
 * Preserves base text color while adding a subtle metallic sheen
 * Respects prefers-reduced-motion
 */
const ShinyText: React.FC<ShinyTextProps> = ({ 
  children, 
  className = "",
  baseColor 
}) => {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        color: baseColor,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
