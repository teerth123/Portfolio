"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#121212] via-[#f0f0f0] to-[#121212] text-2xl"
      style={{backgroundSize:"200% 200%"}}
      animate={{backgroundPosition: ["-200% 0%", "200% 0%"]}}
      transition={{duration:2, ease:"easeInOut", repeat:Infinity}}>
        Generating page.tsx...
      </motion.span>
    </div>
  );
}