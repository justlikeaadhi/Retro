"use client";
import AdvancedSignature from "@/app/components/signature/AdvancedSignature";
import { motion } from "motion/react";

const SignatureContainer: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 gap-4">
      <AdvancedSignature />
      <motion.p
        className="font-mono text-[10px] text-[#2e2e2e]"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2.3,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        M(S)OON
      </motion.p>
    </div>
  );
};

export default SignatureContainer;
