"use client";

import { motion } from "framer-motion";
import Logo from "@/../public/logo.svg";

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [-5, 0], 
        filter: ["blur(4px)", "blur(0px)"], 
      }}
      transition={{
        duration: 1.6,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1], 
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8,
      }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", stiffness: 200, damping: 10 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className="flex items-center justify-center select-none"
    >
      <Logo className="w-64 h-42 md:w-96 md:h-96 text-blue-600 overflow-hidden md:pb-10" />
    </motion.div>
  );
}

