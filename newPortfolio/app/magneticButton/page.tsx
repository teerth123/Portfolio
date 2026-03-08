"use client";

import {
  motion,
  number,
  Variants,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useRef } from "react";

export default function MagneticButtons() {
  const firstRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // depth layers follow with increasing delay (lower stiffness = more lag)
  const layer1X = useSpring(x, { stiffness: 50, damping: 20 });
  const layer1Y = useSpring(y, { stiffness: 50, damping: 20 });
  const layer2X = useSpring(x, { stiffness: 100, damping: 20 });
  const layer2Y = useSpring(y, { stiffness: 100, damping: 20 });
  const layer3X = useSpring(x, { stiffness: 150, damping: 20 });
  const layer3Y = useSpring(y, { stiffness: 150, damping: 20 });

  function mouseTracker(e: any) {
    if (!firstRef.current) return;
    const { left, top, width, height } =
      firstRef.current.getBoundingClientRect();
    e.preventDefault();
    console.log(e.clientX, e.clientY);
    const relativeX = e.clientX - left;
    const relativeY = e.clientY - top;
    x.set((relativeX - width / 2) * 0.2);
    y.set((relativeY - height / 2) * 0.2);
  }
  function mouseLeave(e: any) {
    x.set(0);
    y.set(0);
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-white dark:bg-black">
        <div className="relative">
          <motion.div className="absolute w-full h-full bg-black/10 dark:bg-white/20 rounded-lg z-0" style={{ x: layer1X, y: layer1Y, top: "6px", left: "6px" }} />
          <motion.div className="absolute w-full h-full bg-black/20 dark:bg-white/40 rounded-lg z-10" style={{ x: layer2X, y: layer2Y, top: "3px", left: "3px" }} />
          <motion.div className="absolute w-full h-full bg-black/30 dark:bg-white/60 rounded-lg z-20" style={{ x: layer3X, y: layer3Y, top: "1px", left: "1px" }} />
          <motion.div
            className="cursor-default p-5 rounded-lg text-center relative z-30"
            onMouseMove={mouseTracker}
            onMouseLeave={mouseLeave}
            ref={firstRef}
            style={{ x: x, y: y }}
            transition={{ ease: "easeInOut" }}
          >
            <motion.h1
              whileTap={{ scale: 0.95 }}
              className={`border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#0a0a0a] p-2 rounded-lg text-[#171717] dark:text-[#ededed] `}
            >
              Magnetized
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}
