"use client";

import React from "react";
import { taskbarIcons } from "@/config/vector";
import { motion } from "motion/react";

/**
 * @file Taskbar.tsx
 * @description Animated vertical taskbar component with fade-in entrance effect.
 * Implements motion-powered transitions and enterprise-grade accessibility patterns.
 *
 * @author Aadarsh Anilkumar
 * @created 08-05-2025
 * @version 1.2
 * @dependencies react, motion/react, @/config/vector
 *
 * @props (Component currently stateless - extend for dynamic behavior)
 *
 * @example
 * <Taskbar />
 */

/**
 * @const taskbarVariant
 * @description Framer Motion variant for taskbar container animation
 * @type {Object}
 *
 * @property {Object} visible - Visible state with full opacity
 * @property {Object} hidden - Initial hidden state with transparency
 *
 * @note Used for controlled mount/unmount sequences
 */
const taskbarVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

/**
 * @function Taskbar
 * @description Primary taskbar component with animated entry sequence
 *
 * @structure
 * - Motion-wrapped root container with fade animation
 * - Fixed-dimension vertical icon stack
 * - Icon cells with hover interactions and labels
 *
 * @animation
 * - 2-second fade-in with 2-second initial delay
 * - easeInOut timing function for smooth transition
 * - Component-level animation rather than element-level
 *
 * @accessibility
 * - Semantic motion container with ARIA navigation role
 * - Explicit DOM IDs for testing integration
 * - Progressive opacity transitions for visual clarity
 */
const Taskbar = () => {
  return (
    <motion.div
      className="flex items-center justify-start w-full min-h-screen absolute p-4"
      variants={taskbarVariant}
      id="taskbar-container"
      initial="hidden"
      animate="visible"
      transition={{
        duration: 2,
        delay: 2,
        ease: "easeInOut",
      }}
      role="navigation"
      aria-label="Animated application taskbar"
    >
      <div
        className="flex flex-col items-center justify-evenly w-[40px] h-[200px] z-10 gap-2"
        id="taskbar-controls"
        data-testid="taskbar-icons-container"
      >
        {taskbarIcons.map((icons, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center w-[40px] h-[45px] opacity-50 hover:opacity-100 transition-all ease-in-out duration-300 cursor-pointer"
              key={index}
              role="button"
              aria-label={`Launch ${icons.name}`}
              tabIndex={0}
            >
              {/* Vector icon container with fixed aspect ratio */}
              <div
                className="flex items-center justify-center w-[35px] h-[35px]"
                aria-hidden="true"
              >
                {icons.icon()}
              </div>
              {/* Accessible text label with size optimization */}
              <p className="text-[10px] font-sans opacity-50">{icons.name}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Taskbar;

/**
 * @designSystem
 * - Motion: Fade-in animation with strategic delay
 * - Layout: Absolute positioning with z-index layering
 * - Typography: System sans-serif at 10px for label clarity
 * - Interaction: 300ms hover state transition
 *
 * @performance
 * - Single animation controller for root element
 * - CSS-native hover transitions
 * - Optimized icon rendering through vector config
 * - Minimal re-renders with static icon mapping
 *
 * @futureImprovements
 * 1. Implement animation orchestration system
 * 2. Add exit animations for unmount sequences
 * 3. Create animation profile config system
 * 4. Implement touch device hover alternatives
 * 5. Add animation interrupt handlers
 * 6. Introduce responsive scaling breakpoints
 * 7. Add reduced-motion preferences support
 */
