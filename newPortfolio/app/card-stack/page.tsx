"use client"
import { useState } from "react";
import {motion} from "motion/react" 

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
                        <h1 className="dark:text-white text-black" >Gap</h1>
                        <input
                            type="range"
                            min={1}
                            max={100}
                            value={gap}
                            onChange={(e) => setGap(Number(e.target.value))}
                        />
                        <h1 className="dark:text-white text-black">{gap}</h1>
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