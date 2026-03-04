"use client"

import {motion} from "motion/react";
export default function Neo(){
    return(
        <>
            <div className="relative h-screen w-screen flex justify-center items-center">
                <div className="absolute ">
                    <motion.h1 className="text-transparent text-6xl font-bold bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(180deg, white 0%, white 20%, #ffd600 35%, #ca30e1 45%, #01d2e1 55%, #6c7dff 65%, white 80%, white 100%)",
                            backgroundSize: "100% 300%",
                        }}
                        animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                    >Macbook Neo</motion.h1>
                </div>
            </div>
        </>
    )
}