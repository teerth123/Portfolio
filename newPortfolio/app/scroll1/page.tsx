"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Slider from "../../components/Slider";

export default function Scroll1() {
  const [yvalue, setYValue] = useState(0);
  const [xvalue, setXValue] = useState(0);
  const [zvalue, setZValue] = useState(0);
  const [XTranslate, setXTranslate] = useState(0);
  const [YTranslate, setYTranslate] = useState(0);
  const [ZTranslate, setZTranslate] = useState(0);
  const [gap, setGap] = useState(50);
  const [length, setLength] = useState(5);
  return (
    <>
      <div className="fixed top-5 left-5 z-50">
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="rotateY" min={0} max={360} initial={yvalue} onChange={(v) => setYValue(Math.round(v))} />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="rotateX" min={0} max={360} initial={xvalue} onChange={(v) => setXValue(Math.round(v))} />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="rotateZ" min={0} max={360} initial={zvalue} onChange={(v) => setZValue(Math.round(v))} />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="Gap" min={1} max={100} initial={gap} onChange={(v) => setGap(Math.round(v))} />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="Xtranslate" min={0} max={100} initial={XTranslate} onChange={(v) => setXTranslate(Math.round(v))} />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="YTranslate" min={0} max={100} initial={YTranslate} onChange={(v) => setYTranslate(Math.round(v))} />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="ZTranslate" min={0} max={100} initial={ZTranslate} onChange={(v) => setZTranslate(Math.round(v))} />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <Slider label="Length" min={1} max={10} initial={length} onChange={(v) => setLength(Math.round(v))} />
        </div>
      </div>
      <div
        className="h-screen w-screen flex justify-center items-center"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        <div style={{ transformStyle: "preserve-3d" }}>
          {Array.from({ length: length }).map((card, index) => {
            // const angleStep = Math.PI / (length - 1);
            // const angle = angleStep * index - Math.PI / 2;
            // const radius = gap * 6;
            return (
              <motion.div
                className="flex justify-center items-center h-72 w-80 rounded-xl border border-white bg-black fixed"
                key={index}
                style={{transformStyle:"preserve-3d", transformOrigin:"bottom center"}}
                animate={{
                  //   rotateX: xvalue,
                  // //   rotateY:yvalue,
                  //   rotateY: -(angle * (180 / Math.PI)) + yvalue,
                  //   rotateZ: zvalue,
                  //   translateX: Math.sin(angle) * radius + XTranslate,
                  //   translateY: YTranslate,
                  //   translateZ: Math.cos(angle) * radius + ZTranslate,
                  rotateX: -xvalue*30*index  ,
                  rotateY: -yvalue,
                  translateX: gap*index,
                }}
              >
                <h1 className="text-white">Card {index + 1}</h1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
