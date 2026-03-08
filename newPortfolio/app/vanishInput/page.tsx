"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function Vanish() {
  const [text, setText] = useState("");
  const [isanimate, setAnimate] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    setAnimate(true);
    setTimeout(() => {
      setText("");
      setAnimate(false);
    }, text.length * 40 + 300);
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-72 w-96 rounded-lg border border-[#353535] bg-[#1d1c1d] flex justify-center items-center">
          <div
            className="border border-[#353535] rounded-lg flex py-1 px-2 gap-2 items-center cursor-text relative"
            onClick={() => inputRef.current?.focus()}
          >
            <Search className="scale-80 text-white/40 shrink-0" />

            <div className="relative min-w-40 h-6">
              <form onSubmit={handleSubmit} className="absolute inset-0">
              <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-full opacity-0 cursor-text"
              />
              </form>

              <div className="flex items-center h-full">
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="text-white text-sm"
                    style={{ whiteSpace: "pre" }}
                    animate={{opacity: isanimate ? 0 : 1, filter: isanimate ? "blur(6px)" : "blur(0px)", }}
                    transition={{duration:0.2, delay: isanimate ? (text.length - index) * 0.04 : 0}}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  className="text-white/60 text-sm select-none"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 0.5, 1] }}
                >
                  |
                </motion.span>
                {text.length === 0 && (
                  <span className="text-white/30 text-sm select-none">
                    What do you need?
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
