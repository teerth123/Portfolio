"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function CardStack() {
  const [x, setX] = useState(125);
  const [y, setY] = useState(70);
  const [z, setZ] = useState(0);
  const [gap, setGap] = useState(20);
  const [index, setIndex] = useState(-10);

  return (
    <div className="h-screen w-screen bg-black">
      <div className="fixed z-50 top-5 right-5">
        <div className="flex gap-2">
          <h1 className="text-white">X</h1>
          <input type="range" min={0} max={360} value={x} onChange={(e) => setX(Number(e.target.value))} />
          <h1 className="text-white">{x}</h1>
        </div>
        <div className="flex gap-2">
          <h1 className="text-white">Y</h1>
          <input type="range" min={0} max={360} value={y} onChange={(e) => setY(Number(e.target.value))} />
          <h1 className="text-white">{y}</h1>
        </div>
        <div className="flex gap-2">
          <h1 className="text-white">Z</h1>
          <input type="range" min={0} max={360} value={z} onChange={(e) => setZ(Number(e.target.value))} />
          <h1 className="text-white">{z}</h1>
        </div>
        <div className="flex gap-2">
          <h1 className="text-white">Gap</h1>
          <input type="range" min={0} max={100} value={gap} onChange={(e) => setGap(Number(e.target.value))} />
          <h1 className="text-white">{gap}</h1>
        </div>
      </div>

      <div className="h-screen w-screen flex justify-center items-center" style={{ perspective: "1200px" }}>
        <div style={{ transformStyle: "preserve-3d", position: "relative", width: "18rem", height: "20rem" }}>
          {Array.from({ length: 5 }).map((_, i) => {
            const distance = Math.abs(index - i);
            const isNear = index >= 0 && distance <= 5;
            const height = isNear ? 250 - distance * 30 : 100;

            return (
              <motion.div
                key={i}
                className="h-80 w-72 border border-white rounded-xl bg-black"
                // animate={{ height }}
                // transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={() => setIndex(i)}
                onMouseLeave={() => setIndex(-10)}
                style={{
                  position: "absolute",
                  bottom: 0,
                  transform: `translate(${i * gap * 0.1}px, ${i * gap * 0.1}px) translateZ(${i * gap}px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
