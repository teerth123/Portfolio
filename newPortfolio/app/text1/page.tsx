"use client"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react";

export default function Home() {
    const [selected, setSelected] = useState(0);
    const names = ["Hover", "First", "Second", "Third", "Fourth"];
    const getY = (index: number) => {
        const mid = Math.floor(names[selected].length / 2);
        const diff = Math.abs(index - mid);
        if (index === mid) return 0.15
        return diff * 0.15
    }
    return (
        <>
            <div className="fixed top-5 right-5">
                <div ></div>
            </div>
            <div className="fixed top-1/4 flex justify-center items-center w-screen gap-x-3">
                <div className="text-4xl bg-transparent dark:text-white text-black border-[#313131] border rounded-full h-20 w-20 flex justify-center items-center font-bold cursor-pointer hover:shadow-[4px_4px_6px_-1px_#4deeea,2px_2px_4px_-2px_#4deeea] " onMouseEnter={() => setSelected(1)} onMouseLeave={() => setSelected(0)}>1</div>
                <div className="text-4xl bg-transparent dark:text-white text-black border-[#313131] border rounded-full h-20 w-20 flex justify-center items-center font-bold cursor-pointer hover:shadow-[4px_4px_6px_-1px_#f97316,2px_2px_4px_-2px_#f97316]" onMouseEnter={() => setSelected(2)} onMouseLeave={() => setSelected(0)}>2</div>
                <div className="text-4xl bg-transparent dark:text-white text-black border-[#313131] border rounded-full h-20 w-20 flex justify-center items-center font-bold cursor-pointer hover:shadow-[4px_4px_6px_-1px_#a855f7,2px_2px_4px_-2px_#a855f7]" onMouseEnter={() => setSelected(3)} onMouseLeave={() => setSelected(0)}>3</div>
                <div className="text-4xl bg-transparent dark:text-white text-black border-[#313131] border rounded-full h-20 w-20 flex justify-center items-center font-bold cursor-pointer hover:shadow-[4px_4px_6px_-1px_#22c55e,2px_2px_4px_-2px_#22c55e]" onMouseEnter={() => setSelected(4)} onMouseLeave={() => setSelected(0)}>4</div>
            </div>
            <div className="flex justify-center items-center h-screen w-screen" key={selected}>
                <AnimatePresence mode="wait">
            {
                names[selected].split("").map((char, index)=>
                (
                    <motion.h1 
                    key={`${selected}-${index}`}
                    className="text-9xl font-bold dark:text-white text-black"
                    initial={{ y: 100}}
                    animate={{ y: 0 }}
                    transition={{duration:getY(index)}}
                    exit={{y:-100}}>
                        {char}
                    </motion.h1>
                ))
            }
            </AnimatePresence>
            </div>
        </>
    )
}