"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function StaggeredText() {
  const [text, setText] = useState("Staggered Text");
  const [newText, setNewText] = useState("");

  const STAGGER = 0.1;
  const DURATION = 1.2;
  const PAUSE = 0.8;
  const totalCycle = text.length * STAGGER + DURATION + PAUSE;

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText(newText)
 }

  return (
    <>
      <div className="fixed top-5 left-5">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your text"
            value={newText}
            onChange={(e)=>setNewText(e.target.value)}
            className="focus:ring-0 border border-[#b5b5b5] outline-none p-2 rounded-lg"
          />
        </form>
      </div>

      <div className="h-screen w-screen flex justify-center items-center dark:bg-black bg-white">
        <div
          className="relative"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <div className="absolute z-10 flex flex-nowrap w-106">
            {Array.from({ length: text.length }).map((_, index) => {
              return (
                <motion.h1
                  key={index}
                  className="font-semibold text-3xl"
                  style={{ transformOrigin: "center top" }}
                  initial={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
                  animate={{ rotateX: 90, opacity: 0, filter: "blur(8px)" }}
                  transition={{
                    duration: DURATION,
                    repeat: Infinity,
                    delay: STAGGER * index,
                    repeatDelay: totalCycle - DURATION,
                  }}
                >
                  {text[index] === " " ? "\u00A0" : text[index]}
                </motion.h1>
              );
            })}
          </div>

          <div className="absolute z-0 flex flex-nowrap w-106">
            {Array.from({ length: text.length }).map((_, index) => {
              return (
                <motion.h1
                  key={index}
                  className="font-semibold text-3xl"
                  style={{ transformOrigin: "center bottom" }}
                  initial={{ rotateX: 90, opacity: 0, filter: "blur(8px)" }}
                  animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: DURATION,
                    repeat: Infinity,
                    delay: STAGGER * index,
                    repeatDelay: totalCycle - DURATION,
                  }}
                >
                  {text[index] === " " ? "\u00A0" : text[index]}
                </motion.h1>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
