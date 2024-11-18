import React, { createElement, ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Animation properties that can be set for initial and animate states
interface AnimationProps {
  opacity?: number;
  x?: number; 
  y?: number;
  scale?: number;
  duration?: number;
}

// Component props extending HTML div props
interface AnimatedComponentProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  as?: 'div' | 'section'; // Restrict to supported element types
  initial?: AnimationProps;
  animate?: AnimationProps; 
}

// Base animated component that handles the GSAP animation
const AnimatedComponent = ({
  children,
  className,
  as = "div",
  initial = { opacity: 0, y: 200 },
  animate = { opacity: 1, y: 0, duration: 0.7 },
}: AnimatedComponentProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  // Setup GSAP animation when component mounts
  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return;

    // Animate from initial to final state with scroll trigger
    gsap.fromTo(
      element,
      { ...initial },
      {
        ...animate,
        scrollTrigger: { trigger: element }
      }
    );
  }, { scope: elementRef });

  // Create element with animation ref
  return createElement(as, { ref: elementRef, className }, children);
};

// Export pre-configured animated components
const animated = {
  div: (props: AnimatedComponentProps) => <AnimatedComponent {...props} as="div" />,
  section: (props: AnimatedComponentProps) => <AnimatedComponent {...props} as="section" />
};

export default animated;
