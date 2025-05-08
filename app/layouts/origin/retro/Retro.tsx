"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

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

const Retro: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="flex items-center justify-center h-auto">
        {"Retro".split("").map((character, index) => (
          <motion.h1
            key={index}
            className="text-[70px] arabic-text bg-gradient-to-b from-[#FFD700] to-[#635400] bg-clip-text text-transparent"
            style={{ willChange: "opacity, text-shadow, transform" }}
            variants={textShadowVariant}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2.7 + index * 0.1, // Slightly increase duration per character
              ease: [0.6, 0.01, 0.4, 0.98], // Smoother cubic-bezier for natural flow
              delay: index * 0.3, // Increased delay for smoother stagger
              type: "spring",
              stiffness: 80, // Reduced stiffness for softer spring
              damping: 25, // Slightly higher damping for smoother settle
            }}
          >
            {character}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Retro;
