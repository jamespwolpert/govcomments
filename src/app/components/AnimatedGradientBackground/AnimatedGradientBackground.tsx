'use client'
import React, { useState, useEffect, useMemo, CSSProperties } from 'react';
import './AnimatedGradientBackground.css';

// Define the props for the component
interface AnimatedGradientBackgroundProps {
  colors?: string[];
  speed?: number;
}

// Define the type for the style of a single blob
// We can use React.CSSProperties and extend it if needed, or be more specific
// For this, a direct use of CSSProperties for the dynamic parts is fine.
type BlobStyle = CSSProperties;

const DEFAULT_COLORS = ['#400080', '#008080', '#800000', '#808000', '#003080'];
const DEFAULT_SPEED = 1;
const BASE_ANIMATION_DURATION = 40; // seconds

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  colors = DEFAULT_COLORS,
  speed = DEFAULT_SPEED,
}) => {
  const [blobStyles, setBlobStyles] = useState<BlobStyle[]>([]);

  // Memoize animations to avoid re-declaring them on every render
    const animations = useMemo(() => ['moveBlob1', 'moveBlob2', 'moveBlob3'], []);
    const newBlobStyles: BlobStyle[] = colors.map((color, index) => {
    const top = Math.random() * 70 - 10; // -10% to 60%
    const left = Math.random() * 70 - 10; // -10% to 60%
    const width = Math.random() * 60 + 70; // 70vw to 130vw
    const height = Math.random() * 60 + 70; // 70vh to 130vh

    const durationVariance = (Math.random() - 0.5) * (BASE_ANIMATION_DURATION / speed / 5);
    const animationDurationVal = BASE_ANIMATION_DURATION / speed + durationVariance;
//   const animationDelayVal = Math.random() * (BASE_ANIMATION_DURATION / speed / colors.length);

    const animationName = animations[index % animations.length];

    return {
    // Base styles for the blob that are consistent
    // position: 'absolute', // Already in CSS class .gradient-blob
    // borderRadius: '50%', // Already in CSS class .gradient-blob
    // opacity: 0.6,       // Already in CSS class .gradient-blob
    // filter: 'blur(10vmax)', // Already in CSS class .gradient-blob
    // willChange: 'transform, opacity', // Already in CSS class .gradient-blob
    // mixBlendMode: 'screen', // Already in CSS class .gradient-blob

    // Dynamic styles
    backgroundColor: color,
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}vw`,
    height: `${height}vh`,
    animationName,
    animationDuration: `${animationDurationVal.toFixed(2)}s`,
    // animationDelay: `${animationDelayVal.toFixed(2)}s`,
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    };
    });


  useEffect(() => {
    setBlobStyles(newBlobStyles);
  }, []);

  return (
    <>
    <div className="gradient-background-container">

      {blobStyles.map((style, index) => (
        <div
          key={index}
          className="gradient-blob" // Class for base styling (blur, opacity, etc.)
          style={style} // Inline style for dynamic properties (color, position, animation specifics)
        />
      ))}
    </div>
    </>


  );
};

// It's good practice to still define defaultProps if you use them this way,
// or handle defaults directly in destructuring as done above.
// For clarity with TypeScript, destructuring with defaults is often preferred.
// AnimatedGradientBackground.defaultProps = {
//   colors: DEFAULT_COLORS,
//   speed: DEFAULT_SPEED,
// };

export default AnimatedGradientBackground;