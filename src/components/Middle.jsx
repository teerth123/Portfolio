import React, { useState } from "react";
import Projects from "./Projects";

export default function Middle(){
    const [selected, setSelect] = useState("Discover My Journey")
    return(
        <>
           <div className="flex justify-between items-center  ">
                <div className="leftDiv mt-20">
                    <img src="/pic.jpeg" className="object-cover object-top w-1/6 h-auto rounded-xl" alt="Your image" />
                    <h1 className="font-medium font-roboto text-xl mb-5 mr-2">Teerth Kulkarni
                         <span className="mx-2 cursor-pointer">
                            (
                            <i className="ri-linkedin-fill text-[#4692DD]" onClick={()=>window.open("https://www.linkedin.com/in/teerth-kulkarni-152334290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}></i>
                            <i class="ri-twitter-x-fill" onClick={()=>window.open("https://x.com/DexTee_17", "_blank")}></i>
                            <i class="ri-youtube-fill text-[#FE1414]" onClick={()=>window.open("https://www.youtube.com/@WCEWaveCreativeEcho", "_blank")}></i>
                            <i class="ri-github-fill " onClick={()=>window.open("https://github.com/teerth123", "_blank")}></i>
                            <i class="ri-file-line" onClick={()=>window.open("https://docs.google.com/document/d/1PIUN257C6IGUTZr1faxsEa2-nZXdr9U0OI-5Mpo08wQ/edit?usp=sharing" , "_blank")}></i>
                            )
                        </span>
                    </h1>
                    <div>
                        <h1 className="font-roboto w-[40vw] text-justify">Hi, I'm Teerth Kulkarni, a 3rd-year BTech student at Walchand College of Engineering, Sangli. I'm someone who loves creativity—be it in coding, sketching, or editing.Outside studies, you'll find me playing chess, drawing, or scrolling on reddit and pinterest.</h1>
                        <h1 className="font-roboto w-[40vw] text-justify mt-12"><span className="line-through">I don't like to talk much about numbers but still I will mention -</span>
                        I have got 98.97%tile in MHTCET exam. I started solving DSA and CP problems a bit late but so far I have solved 300+ questions across multiple online judges like Leetcode, Codechef, Codeforces. And as I said I have always loved playing chess, so my rapid and blitz elo on Chess.com is 1600+.</h1>
                    </div>

                    <div className="mt-20">
                        {selected=="Discover My Journey"?  (
                            <>
                            <button className="font-roboto font-medium text-2xl my-4" onClick={()=>setSelect("Discover My Journey")}>Discover My Journey</button> <br />
                            <button className="font-roboto font-medium text-xl my-4 opacity-[0.5]"  onClick={()=>setSelect("My Work Showcase")}>My Work Showcase</button>

                            </>
                        ) 
                            : (
                            <>
                            <button className="font-roboto font-medium text-xl my-4 opacity-[0.5]" onClick={()=>setSelect("Discover My Journey")}>Discover My Journey</button> <br />
                            <button className="font-roboto font-medium text-2xl my-4"  onClick={()=>setSelect("My Work Showcase")}>My Work Showcase</button>

                            </>                            
                            )
                        }      
                    </div>
                </div>

                <div className="rightDiv mt-20">
                    <div className="h-[80vh] border-2 border-black w-[40vw] p-8 border-opacity-20 rounded-xl">
                        <h1 className="font-roboto font-medium text-xl">{selected}</h1>

                        
                        {selected==="Discover My Journey" ? 
                            <>  
                                <div className="flex mt-20 ">
                                    <img src="https://imgs.search.brave.com/D_gGEvS5h_BaTCU33fE8BCxr4DIJ8u-wW_PEhNYxJJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQwL0Fk/b2JlX1ByZW1pZXJl/X1Byb19DQ19pY29u/LnN2Zy82NDBweC1B/ZG9iZV9QcmVtaWVy/ZV9Qcm9fQ0NfaWNv/bi5zdmcucG5n" 
                                        alt="PR" 
                                        className="h-10 w-10 mx-2"/> 
                                    <i className="ri-arrow-right-line mt-2"></i>
                                    <img src="https://imgs.search.brave.com/xNvFpZX82fFaYjg_ARXkcotwA4a6bTrS9xI4HIT8tWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/NDI0YTc4NzU2ZGI1/ZmI5MDhkY2E4NmMu/cG5n" 
                                        alt="Davinci" 
                                        className="h-10 w-10 mx-2"/> 
                                    <i className="ri-arrow-right-line mt-2"></i>
                                    <img src="https://imgs.search.brave.com/Ys_1cnTRZAfeBBRcxbJw2Z_R9Oj3zv6FB9QMza6DgR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FmL0Fkb2JlX1Bo/b3Rvc2hvcF9DQ19p/Y29uLnN2Zw" 
                                        alt="PS" 
                                        className="h-10 w-10 mx-2"/> 
                                    <i className="ri-arrow-right-line mt-2"></i>
                                    <img src="https://imgs.search.brave.com/1eVxRXPc_Z0OfT7PKWUnXwyQVS9SGaesrxbw3_f9p4g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzMzL0Zp/Z21hLWxvZ28uc3Zn/LzIyMHB4LUZpZ21h/LWxvZ28uc3ZnLnBu/Zw" 
                                        alt="figma" 
                                        className="h-10 w-6 mx-2"/> 
                                    <i className="ri-arrow-right-line mt-2 mx-2"></i>
                                    <img src="https://imgs.search.brave.com/SmrxfkBVdoZF0iRdL23vLULOJypWM1hM4M_tXLQ5w_U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvOS85YS9WaXN1/YWxfU3R1ZGlvX0Nv/ZGVfMS4zNV9pY29u/LnN2Zy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8yNTA_Y2I9/MjAyMzExMDUwMTAw/NTE.jpeg" 
                                        alt="code" 
                                        className="h-10 w-10 mx-2"/> 
                                </div>
                        
                                <div className="mt-14">
                                    <h1 className="font-roboto w-[35vw] text-justify">Loved drawing and sketching from very early age, then started watching YouTube videos and my video editing journey started, felt burnout and ultimately stopped making videos. During this time I mastered davinci resolve and also got introduced to Photoshop and Canva for making college fest posters. Then developer journey started and here I am!!!</h1>
                                    <h1 className="font-roboto w-[35vw] text-justify mt-12">While I can work as full-stack but I think there's a lot more to explore for me in front-end side and currently learning web-animations with framer-motion and GSAP.</h1>
                                </div>
                                <h1 className="font-roboto w-[35vw] font-medium mt-20 text-right">Broad in scope, deep in expertise</h1>
                            </>
                            : 
                            <>
                                <div className="mt-14">
                                    <Projects/>    
                                </div>
                            </>
                        }

                        
                        
                    </div>
                </div>
                
           </div>
            
        </>
    )
}