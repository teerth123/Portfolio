"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Slider from "../../components/Slider";

export default function InvertedTabs() {
  const tabs = ["All Posts", "Engineering", "Community", "Press", "Changelog"];
  const [selected, setSelected] = useState<number>(0);

  const [timer, setTimer] = useState<number>(0.3);

  return (
    <>
      <div className="fixed top-5 left-5">
        <div className="flex justify-center items-center gap-2">
          <h1>Animation Timer</h1>
          <div className="w-48">
            <Slider label="timer" min={0} max={5} initial={timer} onChange={(v) => setTimer(Number(v.toFixed(2)))} />
          </div>
          <h1>{timer}</h1>
        </div>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        {/* show a small hint in light mode */}
        <div className="block dark:hidden">
          <h1 className="text-xl font-semibold">- switch to dark mode</h1>
        </div>

        {/* original tabs UI — only visible in dark mode */}
        <div className="hidden dark:block ">
          <div className="flex justify-center items-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`relative mx-2 px-3 cursor-pointer rounded-full flex justify-center items-center ${selected !== index ? "hover:text-white:/20" : " "}`}
                onClick={() => setSelected(index)}
              >
                <h1
                  className={`font-medium leading-tight text-lg mix-blend-exclusion `}
                >
                  {tab}
                </h1>
                {selected === index && (
                  <motion.div
                    className="dark:bg-white bg-black inset-0 absolute -z-10 py-5 my-auto rounded-full"
                    layoutId="rauno"
                    transition={{ duration: timer, ease: "easeInOut" }}
                  ></motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
