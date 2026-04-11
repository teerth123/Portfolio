"use client"
import {motion} from "motion/react"
import { useState } from "react";
import Slider from "../../components/Slider";

export default function Home(){
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const [zValue, setZValue] = useState(0);
    const [gap, setGap] = useState(1);
    const [hovered, setHovered] = useState(false);
    const [page, setPage] = useState(1);
    const totalPages = 10;
    const maxRotation = 40;
    return(
        <>
            <div className="fixed top-5 left-5 z-50">
                <div className="flex items-center gap-x-2">
                    <Slider label="Rotate-x" min={0} max={360} initial={xValue} onChange={(v)=>setXValue(Math.round(v))} />
                </div>
                <div className="flex items-center gap-x-2">
                    <Slider label="Rotate-y" min={0} max={360} initial={yValue} onChange={(v)=>setYValue(Math.round(v))} />
                </div>
                <div className="flex items-center gap-x-2">
                    <Slider label="Rotate-z" min={0} max={360} initial={zValue} onChange={(v)=>setZValue(Math.round(v))} />
                </div>
                <div className="flex items-center gap-x-2">
                    <Slider label="Gap" min={1} max={100} initial={gap} onChange={(v)=>setGap(Math.round(v))} />
                </div>
                <div className="flex items-center gap-x-2">
                    <Slider label="Page" min={1} max={10} initial={page} onChange={(v)=>setPage(Math.round(v))} />
                </div>
            </div>

            <div className="h-screen w-screen flex items-center justify-center" style={{perspective:'1000px', transformStyle:"preserve-3d"}}>
                <motion.div className="flex items-center justify-center"
                animate={{rotateX: -xValue, rotateY: -yValue, rotateZ: zValue}}
                style={{ transformStyle: "preserve-3d",}}
                onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
                >
                    <motion.div className="FrontCard absolute h-82 w-80 rounded-xl  bg-gradient-to-tr from-[#71717a] to-[#27272a] flex justify-center items-center" 
                    initial={false} 
                    style={{transformOrigin: "left center"}}
                    animate={{rotateY:(hovered) ? -yValue-40 : 0, translateZ: gap*11}}
                    transition={{ type: "tween", duration: 0.3 }}>
                        <h1 className="text-white text-3xl">FRONT</h1>
                    </motion.div>
                    {
                       

                        Array.from({length:10}).map((_,index)=>(
                            <motion.div 
                            style={{transformOrigin: "left center"}}
                            className="absolute h-78 w-72 rounded-lg border border-[#52525b] bg-[#18181b] flex justify-center items-center text-white" 
                            animate={{rotateY: hovered? -yValue - maxRotation * ((totalPages - index) / totalPages): 0, translateZ: gap*(index+1)}} 
                            transition={{ type: "tween", duration: 0.3 }}
                            key={index}>
                                <h1 className="text-4xl font-bold text-white">Page {10-index}</h1>
                            </motion.div>
                        ))
                    }
                    <motion.div className="FrontCard absolute h-82 w-80 rounded-xl border border-[#52525b] bg-black flex justify-center items-center" initial={false} animate={{translateZ: gap*0}}>
                        <h1 className="text-white text-3xl">BACK</h1>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}