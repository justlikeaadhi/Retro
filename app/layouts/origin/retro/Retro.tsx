"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Taskbar from "@/app/layouts/origin/taskbar/Taskbar";

/**
 * @file RetroTextComponent.tsx
 * @description Professional-grade animated text component with golden text effect.
 * Features staggered character animation with spring physics and optimized performance.
 *
 * @author [Your Name]
 * @created [Creation Date]
 * @version 1.0
 * @dependencies react, framer-motion
 *
 * @props (Not currently implemented, extend as needed)
 *
 * @example
 * <Retro />
 */

/**
 * @const textShadowVariant
 * @description Framer Motion animation variants for text shadow and opacity effects
 * @type {Variants}
 *
 * @property {object} hidden - Initial state with subtle shadow and transparency
 * @property {object} visible - Target state with glowing golden shadow and full opacity
 *
 * @note Uses CSS text-shadow property for glow effect and opacity for fade-in
 */
const textShadowVariant: Variants = {
  hidden: {
    textShadow: "0 0 0px rgba(255, 215, 0, 0.5)",
    opacity: 0,
  },
  visible: {
    textShadow: "0 0 45px rgba(255, 215, 0, 0.8)",
    opacity: 1,
  },
};

/**
 * @function Retro
 * @description Main component rendering animated retro-style text
 *
 * @structure
 * - Outer container with full-width centering
 * - Inner flex container for character alignment
 * - Individual animated characters using motion.h1
 *
 * @animationDetails
 * - Staggered entry animation per character
 * - Spring-based physics for natural movement
 * - Dynamic duration calculation based on character index
 * - Optimized will-change properties for smooth rendering
 *
 * @performance Consideration
 * - Uses will-change: opacity, text-shadow, transform for browser optimization
 * - CSS clip-text for efficient gradient rendering
 * - Cubic-bezier easing function for smooth transitions
 */
const Retro: React.FC = () => {
  return (
    <>
      <Taskbar />
      <div
        className="flex items-center justify-center w-full min-h-screen"
        role="banner"
        aria-label="Animated Retro Text"
      >
        <div
          className="flex items-center justify-center h-auto"
          data-testid="retro-text-container"
        >
          {"Retro".split("").map((character, index) => (
            <motion.h1
              key={index}
              className="text-[70px] arabic-text bg-gradient-to-b from-[#FFD700] to-[#635400] bg-clip-text text-transparent cursor-default"
              style={{
                willChange: "opacity, text-shadow, transform",
              }}
              variants={textShadowVariant}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 2.7 + index * 0.1, // Base duration + index-based increment
                ease: [0.6, 0.01, 0.4, 0.98], // Custom cubic-bezier curve for smooth acceleration
                delay: index * 0.3, // Staggered delay for sequential animation
                type: "spring",
                stiffness: 80, // Spring tension (affects bounce intensity)
                damping: 25, // Resistance to motion (higher = less oscillation)
                mass: 0.8, // Implicit mass value (not shown, but considered in spring physics)
              }}
              aria-label={`Character ${index + 1}: ${character}`}
              role="text"
            >
              {character}
            </motion.h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Retro;

/**
 * @designSystem
 * - Color Scheme: Uses metallic gold gradient (#FFD700 to #635400)
 * - Typography: 70px base size (consider responsive breakpoints)
 * - Spacing: Auto margins with flex centering
 *
 * @accessibility
 * - ARIA roles and labels for screen reader support
 * - Semantic HTML structure
 * - High contrast gradient for visibility
 *
 * @futureImprovements
 * 1. Implement responsive font sizing
 * 2. Add prop-based configuration for text content
 * 3. Add error boundaries
 * 4. Implement custom cursor interaction
 * 5. Add prefers-reduced-motion media query support
 * 6. Create theme configuration system
 */
