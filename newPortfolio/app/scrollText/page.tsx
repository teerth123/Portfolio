"use client";

import { motion, useScroll, useTransform , useMotionTemplate } from "motion/react";
import { useRef } from "react";

export default function ScrollText() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const transform = useMotionTemplate`rotateX(30deg) translateY(${y}px) translateZ(10px)`;
    return(
        <>
            <div className="h-[300vh] w-screen flex justify-center items-center"
            ref={targetRef}>
                <div className="sticky top-0 flex justify-center items-center">
                    <div className="" style={{perspective:"200px", transformStyle:"preserve-3d"}}>
                        <motion.h1 className="text-6xl font-bold text-black" style={{ transform}}
                         >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat tempora vitae, delectus deleniti enim odio, aliquam, nobis iusto quos nihil magni numquam earum! Non placeat accusantium quo nulla ad hic quam sequi vero, labore laborum, expedita eligendi. Culpa incidunt aliquid quaerat velit, atque dolores ex accusamus nostrum quis impedit! Nemo officiis deserunt totam recusandae consectetur suscipit molestiae fuga temporibus, dolorum iusto tempora illo mollitia at ipsa quibusdam hic alias quam est provident exercitationem. Eligendi, maxime dolor nesciunt pariatur molestiae voluptate. Voluptate, dolore nulla? Fugiat possimus exercitationem voluptatum, excepturi consequatur nobis aspernatur vel aperiam neque? Fugit nesciunt eaque quaerat necessitatibus quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat tempora vitae, delectus deleniti enim odio, aliquam, nobis iusto quos nihil magni numquam earum! Non placeat accusantium quo nulla ad hic quam sequi vero, labore laborum, expedita eligendi. Culpa incidunt aliquid quaerat velit, atque dolores ex accusamus nostrum quis impedit! Nemo officiis deserunt totam recusandae consectetur suscipit molestiae fuga temporibus, dolorum iusto tempora illo mollitia at ipsa quibusdam hic alias quam est provident exercitationem. Eligendi, maxime dolor nesciunt pariatur molestiae voluptate. Voluptate, dolore nulla? Fugiat possimus exercitationem voluptatum, excepturi consequatur nobis aspernatur vel aperiam neque? Fugit nesciunt eaque quaerat necessitatibus quod.
                        </motion.h1>
                    </div>
                </div>
            </div>
        </>
    )
}