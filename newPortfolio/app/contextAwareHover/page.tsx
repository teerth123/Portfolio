"use client"

import Image from "next/image"
import {motion} from "motion/react"
import { useState } from "react";
export default function ContextAwareHover() {

    const MotionImage = motion(Image);
    const [mouseXY, setMouseXY] = useState<[number, number]>([0, 0]);

    const call = (e:React.MouseEvent<HTMLDivElement>)=>{
        const { left, top, width, height } = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const relativeX = e.clientX - left;
        const relativeY = e.clientY - top;
        (e.currentTarget as HTMLElement).style.setProperty("--x", `${relativeX}px`);
        (e.currentTarget as HTMLElement).style.setProperty("--y", `${relativeY}px`);
        setMouseXY([relativeX, relativeY]); 
    }
    return(
        <>
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="overflow-hidden h-150 w-96 rounded-lg flex justify-center items-center border border-white relative"
                onMouseEnter={call}>
                    <div className="h-full w-full blur-2xl absolute z-10">
                        <MotionImage src="/spotify.png" alt="spotify" width={200} height={200}
                        animate={{x:mouseXY[0], y:mouseXY[1]}}></MotionImage>
                    </div>
                    
                    <div className="absolute z-20 h-[90%] w-[90%] bg-black rounded-2xl flex justify-center items-center">
                        <div>
                            <Image src="/spotify.png" alt="spotify" width={80} height={80}></Image>
                            <h1 className="text-2xl font-semibold text-white mt-2">Spotify</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}