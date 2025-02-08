import React from "react";

export default function Second(){
    return(
        <>
          <div className="border-2 border-black border-opacity-20 rounded-xl p-6 h-full">
            <h2 className="text-xl sm:text-2xl font-medium mb-6"></h2>

            
              <div className="space-y-6">
                {/* Skills Icons */}
                <div className="flex items-center gap-4 overflow-x-auto pb-4">
                  <img src="https://imgs.search.brave.com/D_gGEvS5h_BaTCU33fE8BCxr4DIJ8u-wW_PEhNYxJJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQwL0Fk/b2JlX1ByZW1pZXJl/X1Byb19DQ19pY29u/LnN2Zy82NDBweC1B/ZG9iZV9QcmVtaWVy/ZV9Qcm9fQ0NfaWNv/bi5zdmcucG5n" alt="PR" className="h-8 w-8" />
                  <i className="ri-arrow-right-line"></i>
                  <img src="https://imgs.search.brave.com/xNvFpZX82fFaYjg_ARXkcotwA4a6bTrS9xI4HIT8tWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/NDI0YTc4NzU2ZGI1/ZmI5MDhkY2E4NmMu/cG5n" alt="Davinci" className="h-8 w-8" />
                  <i className="ri-arrow-right-line"></i>
                  <img src="https://imgs.search.brave.com/Ys_1cnTRZAfeBBRcxbJw2Z_R9Oj3zv6FB9QMza6DgR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FmL0Fkb2JlX1Bo/b3Rvc2hvcF9DQ19p/Y29uLnN2Zw" alt="PS" className="h-8 w-8" />
                  <i className="ri-arrow-right-line"></i>
                  <img src="https://imgs.search.brave.com/1eVxRXPc_Z0OfT7PKWUnXwyQVS9SGaesrxbw3_f9p4g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzMzL0Zp/Z21hLWxvZ28uc3Zn/LzIyMHB4LUZpZ21h/LWxvZ28uc3ZnLnBu/Zw" alt="figma" className="h-8 w-8" />
                  <i className="ri-arrow-right-line"></i>
                  <img src="https://imgs.search.brave.com/SmrxfkBVdoZF0iRdL23vLULOJypWM1hM4M_tXLQ5w_U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvOS85YS9WaXN1/YWxfU3R1ZGlvX0Nv/ZGVfMS4zNV9pY29u/LnN2Zy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8yNTA_Y2I9/MjAyMzExMDUwMTAw/NTE.jpeg" alt="code" className="h-8 w-8" />
                </div>

                {/* Journey Description */}
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-justify leading-relaxed">
                    Loved drawing and sketching from a very early age, then started watching YouTube videos and my video
                    editing journey started, felt burnout and ultimately stopped making videos. During this time I mastered
                    davinci resolve and also got introduced to Photoshop and Canva for making college fest posters. Then
                    developer journey started and here I am!!!
                  </p>
                  <p className="text-sm sm:text-base text-justify leading-relaxed">
                    While I can work as full-stack but I think there's a lot more to explore for me on the front-end side
                    and currently learning web-animations with framer-motion and GSAP.
                  </p>
                </div>

                <p className="text-sm sm:text-base font-medium text-right mt-6">
                  Broad in scope, deep in expertise
                </p>
              </div>
              
          </div>
        </>
    )
}