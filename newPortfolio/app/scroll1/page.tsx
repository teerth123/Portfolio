"use client";

import { motion } from "motion/react";
import { useState } from "react";

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
          <h1 className="dark:text-white text-black">rotateY</h1>
          <input
            type="range"
            min={0}
            max={360}
            value={yvalue}
            onChange={(e) => setYValue(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{yvalue}</h1>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <h1 className="dark:text-white text-black">rotateX</h1>
          <input
            type="range"
            min={0}
            max={360}
            value={xvalue}
            onChange={(e) => setXValue(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{xvalue}</h1>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <h1 className="dark:text-white text-black">rotateZ</h1>
          <input
            type="range"
            min={0}
            max={360}
            value={zvalue}
            onChange={(e) => setZValue(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{zvalue}</h1>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <h1 className="dark:text-white text-black">Gap</h1>
          <input
            type="range"
            min={1}
            max={100}
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{gap}</h1>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <h1 className="dark:text-white text-black">Xtranslate</h1>
          <input
            type="range"
            min={0}
            max={100}
            value={XTranslate}
            onChange={(e) => setXTranslate(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{XTranslate}</h1>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <h1 className="dark:text-white text-black">YTranslate</h1>
          <input
            type="range"
            min={0}
            max={100}
            value={YTranslate}
            onChange={(e) => setYTranslate(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{YTranslate}</h1>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <h1 className="dark:text-white text-black">ZTranslate</h1>
          <input
            type="range"
            min={0}
            max={100}
            value={ZTranslate}
            onChange={(e) => setZTranslate(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{ZTranslate}</h1>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <h1 className="dark:text-white text-black">Length</h1>
          <input
            type="range"
            min={1}
            max={10}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <h1 className="dark:text-white text-black">{length}</h1>
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
