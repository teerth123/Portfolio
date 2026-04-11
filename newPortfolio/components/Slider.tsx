"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

type SliderProps = {
  label?: string;
  min?: number;
  max?: number;
  pages?: number;
  gaps?: number;
  rotateX?: any;
  initial?: number;
  onChange?: (value: number) => void;
  expanded?: boolean;
  width?: string;
};

export default function Slider({
  label,
  min = 0,
  max = 100,
  pages,
  initial = min,
  onChange,
  expanded = false,
  width = "w-80",
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [value, setValue] = useState<number>(initial ?? min);

  const knobWidth = 8;

  useEffect(() => {
    const update = () => {
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth - knobWidth;
        setMaxDrag(w > 0 ? w : 0);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (maxDrag > 0) {
      const ratio = (initial - min) / (max - min || 1);
      const px = Math.max(0, Math.min(ratio * maxDrag, maxDrag));
      x.set(px);
      const mapped = min + ratio * (max - min);
      setValue(mapped);
      onChange?.(mapped);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxDrag]);

  const clampPx = (v: number) => Math.max(0, Math.min(v, maxDrag || 0));

  const progress = useTransform(x, (v) => {
    const denom = maxDrag || 1;
    return `${(clampPx(v) / denom) * 100}%`;
  });

  const updateFromPx = (rawPx: number) => {
    const clamped = clampPx(rawPx);
    let finalPx = clamped;
    if (pages && pages > 1 && maxDrag > 0) {
      const steps = pages - 1;
      const ratio = clamped / maxDrag;
      const step = Math.round(ratio * steps);
      finalPx = (step / (steps || 1)) * maxDrag;
    }

    const ratio = maxDrag > 0 ? finalPx / maxDrag : 0;
    const mapped = min + ratio * (max - min);
    x.set(finalPx);
    setValue(mapped);
    onChange?.(mapped);
  };

  return (
    <div className={`flex items-center gap-4 ${width}`}>
      {label && <div className="min-w-[90px] text-sm font-medium">{label}</div>}
      <div className={`relative ${width}`}>
        <motion.div
          ref={trackRef}
          className={`rounded-xl border border-[#343434] relative overflow-hidden`}
          animate={{ height: expanded ? "96px" : "16px", borderRadius: expanded ? "10px" : "5px" }}
        >
          <motion.div className="h-full dark:bg-white/20 bg-black/20 top-0 left-0 absolute z-0 shadow-inner" style={{ width: progress }} />

          <motion.div
            className="dark:bg-white bg-black h-full z-10 w-2 rounded-[5px] absolute cursor-grab active:cursor-grabbing"
            drag="x"
            whileDrag={{ scale: 1.05 }}
            dragMomentum={false}
            dragConstraints={{ left: 0, right: maxDrag }}
            dragElastic={0}
            style={{ x }}
            onDrag={() => {
              const pos = x.get();
              const clamped = clampPx(pos);
              x.set(clamped);
              const ratio = maxDrag > 0 ? clamped / maxDrag : 0;
              const mapped = min + ratio * (max - min);
              setValue(mapped);
              onChange?.(mapped);
            }}
            onDragEnd={() => {
              const pos = x.get();
              updateFromPx(pos);
            }}
          />
        </motion.div>
      </div>
      <div className="min-w-[48px] text-right tabular-nums">
        <span className="font-semibold">{Number(value).toFixed(0)}</span>
      </div>
    </div>
  );
}
