"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import Slider from "../../components/Slider";

export default function Linear() {
  const [x, setX] = useState(125);
  const [y, setY] = useState(70);
  const [z, setZ] = useState(0);
  const [gap, setGap] = useState(20);
  const [index, setIndex] = useState(-10)

  return (
    <>
      <div className="fixed z-500 top-5  left-5">
        <div className="flex">
          <Slider label="Rotate-X" min={0} max={360} initial={x} onChange={(v) => setX(Math.round(v))} />
        </div>
        <div className="flex">
          <Slider label="Rotate-Y" min={0} max={360} initial={y} onChange={(v) => setY(Math.round(v))} />
        </div>
        <div className="flex">
          <Slider label="Rotate-Z" min={0} max={360} initial={z} onChange={(v) => setZ(Math.round(v))} />
        </div>
        <div className="flex">
          <Slider label="Gap" min={0} max={100} initial={gap} onChange={(v) => setGap(Math.round(v))} />
        </div>
      </div>

      <div className="h-screen w-screen flex justify-center items-center" style={{ perspective: "1200px" }}>
        <div
          style={{ transformStyle: "preserve-3d", position: "relative", width: "18rem", height: "20rem" }}
        >
          {Array.from({ length: 20 }).map((_, i) => {
            const distance = Math.abs(index - i)
            const isNear = index >= 0 && distance <= 5
            const height = isNear ? 250 - distance * 30 : 100

            return (
              <motion.div
                key={i}
                className="w-72 border border-white rounded-xl bg-black"
                animate={{ height }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={() => setIndex(i)}
                onMouseLeave={() => setIndex(-10)}
                style={{
                  position: "absolute",
                  bottom: 0,
                  transform: `translate(${i * gap}px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`,
                }}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}
