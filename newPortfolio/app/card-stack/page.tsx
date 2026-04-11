"use client"
import { useState } from "react";
import {motion} from "motion/react" 
import Slider from "../../components/Slider";

export default function Home() {
    const [yvalue, setYValue] = useState(55);
    const [xvalue, setXValue] = useState(20);
    const [gap, setGap] = useState(15);

    const [clicked, setClicked] = useState<number | null>(null);

    const cardClicked = (e:number)=>{
        setClicked((prev)=>(prev===e)?null : e)
    }

    const getZ = (index:number)=>{
        if (clicked === null) return gap * index
        if (index === clicked) return gap * index
        if (index > clicked) return gap * index + 180
        return gap * index - 180
    }
    
    return(
            <>
            <div className="fixed top-5 left-5 z-50">
                    <div className="flex justify-between items-center gap-x-2">
                        <Slider label="rotateY" min={0} max={360} initial={yvalue} onChange={(v)=>setYValue(Math.round(v))} />
                    </div>
                    <div className="flex justify-between items-center gap-x-2">
                        <Slider label="rotateX" min={0} max={360} initial={xvalue} onChange={(v)=>setXValue(Math.round(v))} />
                    </div>
                    <div className="flex justify-between items-center gap-x-2">
                        <Slider label="Gap" min={1} max={100} initial={gap} onChange={(v)=>setGap(Math.round(v))} />
                    </div>
                </div>
            <div className="flex justify-center items-center h-screen w-screen"  style={{perspective:"1000px", transformOrigin:"preserve-3d"}}>
                <motion.div 
                    animate={{
                        rotateY: -yvalue,
                        rotateX: -xvalue
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="flex justify-center items-center"
                   
                    >
                        {
                            Array.from({length:5}).map((i, index)=>
                             (
                                <motion.div key={index} className="absolute h-72 w-80 rounded-xl border border-white bg-black" onClick={()=>cardClicked(index)}
                                animate={{ z: getZ(index)}} whileHover={{y:-10, borderColor:"#04D9FF", boxShadow:"0 0 20px rgba(4, 217, 255, 0.8)", cursor:"pointer"}}>
                                    <h1 className="text-white text-3xl flex justify-center items-center h-full">Card {index + 1}</h1>
                                </motion.div>
                            ))
                        }
                </motion.div>
            </div>
        </>
    )
}