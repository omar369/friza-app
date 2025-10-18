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
        filter: ["blur(4px)", "blur(0px)"], // entrada más suave
      }}
      transition={{
        duration: 1.6,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier elegante tipo "easeOutExpo"
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8,
      }}
      whileHover={{
        scale: 1.1,
        filter: "brightness(1.2)",
        transition: { type: "spring", stiffness: 200, damping: 10 },
      }}
      whileTap={{
        scale: 0.95,
        filter: "brightness(0.9)",
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className="flex items-center justify-center select-none"
    >
      <Logo className="w-64 h-42 md:w-80 md:h-80 text-blue-600 overflow-hidden" />
    </motion.div>
  );
}

