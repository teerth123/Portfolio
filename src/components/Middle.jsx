import React, { useState } from "react";
import Projects from "./Projects";

export default function Middle() {
  const [selected, setSelect] = useState("Discover My Journey");

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-full px-4 sm:px-6 xl:px-10 2xl:px-10 gap-6 lg:gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-[50%] mt-4 lg:mt-[10vh] space-y-4 sm:space-y-6">
        {/* Profile Image */}
        <img
          src="/pic.jpeg"
          className="object-cover object-top w-24 sm:w-32 md:w-36 lg:w-1/4 xl:w-1/6 2xl:w-1/6 h-auto rounded-xl"
          alt="PFP"
        />

        {/* Name and Social Links */}
        <h1 className="font-medium font-roboto text-lg sm:text-xl">
          Teerth Kulkarni
          <span className="mx-2 cursor-pointer">
            (
            <i className="ri-linkedin-fill text-[#4692DD] hover:opacity-80 transition-opacity" 
               onClick={() => window.open("https://www.linkedin.com/in/teerth-kulkarni-152334290", "_blank")}></i>
            <i className="ri-twitter-x-fill hover:opacity-80 transition-opacity" 
               onClick={() => window.open("https://x.com/DexTee_17", "_blank")}></i>
            <i className="ri-youtube-fill text-[#FE1414] hover:opacity-80 transition-opacity" 
               onClick={() => window.open("https://www.youtube.com/@WCEWaveCreativeEcho", "_blank")}></i>
            <i className="ri-github-fill hover:opacity-80 transition-opacity" 
               onClick={() => window.open("https://github.com/teerth123", "_blank")}></i>
            <i className="ri-file-line hover:opacity-80 transition-opacity" 
               onClick={() => window.open("https://docs.google.com/document/d/1PIUN257C6IGUTZr1faxsEa2-nZXdr9U0OI-5Mpo08wQ/edit", "_blank")}></i>
            )
          </span>
        </h1>

        {/* Bio Section */}
        <div className="space-y-4">
          <h1 className="font-roboto text-sm sm:text-base text-justify">
            Hi, I'm Teerth Kulkarni, a 3rd-year BTech student at Walchand College of Engineering,
            Sangli. I'm someone who loves creativity—be it in coding, sketching, or editing. Outside
            studies, you'll find me playing chess, drawing, or scrolling on reddit and pinterest.
          </h1>
          <h1 className="font-roboto text-sm sm:text-base text-justify">
            <span className="line-through">I don't like to talk much about numbers but still I will mention -</span>
            I have got 98.97%tile in MHTCET exam. I started solving DSA and CP problems a bit late but so far I
            have solved 300+ questions across multiple online judges like Leetcode, Codechef, Codeforces. And as
            I said I have always loved playing chess, so my rapid and blitz elo on Chess.com is 1600+.
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 sm:mt-8 lg:mt-[10vh] space-y-2 xl:mt-52">
          <button
            className={`font-roboto font-medium text-lg sm:text-xl md:text-2xl transition-opacity ${
              selected === "Discover My Journey" ? "opacity-100" : "opacity-50 hover:opacity-70"
            }`}
            onClick={() => setSelect("Discover My Journey")}
          >
            Discover My Journey
          </button>
          <br />
          <button
            className={`font-roboto font-medium text-lg sm:text-xl md:text-2xl transition-opacity ${
              selected === "My Work Showcase" ? "opacity-100" : "opacity-50 hover:opacity-70"
            }`}
            onClick={() => setSelect("My Work Showcase")}
          >
            My Work Showcase
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%] mt-6 lg:mt-[10vh]">
        <div className="border-2 border-black border-opacity-20 rounded-xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[80vh] lg:w-[43vw] xl:w-[40vw] 2xl:w-[40vw]">
          <h1 className="font-roboto font-medium text-lg sm:text-xl">{selected}</h1>

          {selected === "Discover My Journey" ? (
            <>
              {/* Skills Icons */}
              <div className="mt-6 sm:mt-8 lg:mt-20">
                <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-2">
                  <img
                    src="https://imgs.search.brave.com/D_gGEvS5h_BaTCU33fE8BCxr4DIJ8u-wW_PEhNYxJJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQwL0Fk/b2JlX1ByZW1pZXJl/X1Byb19DQ19pY29u/LnN2Zy82NDBweC1B/ZG9iZV9QcmVtaWVy/ZV9Qcm9fQ0NfaWNv/bi5zdmcucG5n"
                    alt="PR"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                  <i className="ri-arrow-right-line"></i>
                  <img
                    src="https://imgs.search.brave.com/xNvFpZX82fFaYjg_ARXkcotwA4a6bTrS9xI4HIT8tWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/NDI0YTc4NzU2ZGI1/ZmI5MDhkY2E4NmMu/cG5n"
                    alt="Davinci"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                  <i className="ri-arrow-right-line"></i>
                  <img
                    src="https://imgs.search.brave.com/Ys_1cnTRZAfeBBRcxbJw2Z_R9Oj3zv6FB9QMza6DgR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FmL0Fkb2JlX1Bo/b3Rvc2hvcF9DQ19p/Y29uLnN2Zw"
                    alt="PS"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                  <i className="ri-arrow-right-line"></i>
                  <img
                    src="https://imgs.search.brave.com/1eVxRXPc_Z0OfT7PKWUnXwyQVS9SGaesrxbw3_f9p4g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzMzL0Zp/Z21hLWxvZ28uc3Zn/LzIyMHB4LUZpZ21h/LWxvZ28uc3ZnLnBu/Zw"
                    alt="figma"
                    className="h-8 w-6 sm:h-10 sm:w-6"
                  />
                  <i className="ri-arrow-right-line"></i>
                  <img
                    src="https://imgs.search.brave.com/SmrxfkBVdoZF0iRdL23vLULOJypWM1hM4M_tXLQ5w_U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvOS85YS9WaXN1/YWxfU3R1ZGlvX0Nv/ZGVfMS4zNV9pY29u/LnN2Zy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8yNTA_Y2I9/MjAyMzExMDUwMTAw/NTE.jpeg"
                    alt="code"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                </div>
              </div>

              {/* Journey Description */}
              <div className="mt-6 lg:mt-14 space-y-4">
                <h1 className="font-roboto text-sm sm:text-base text-justify">
                  Loved drawing and sketching from a very early age, then started watching YouTube videos and my video
                  editing journey started, felt burnout and ultimately stopped making videos. During this time I mastered
                  davinci resolve and also got introduced to Photoshop and Canva for making college fest posters. Then
                  developer journey started and here I am!!!
                </h1>
                <h1 className="font-roboto text-sm sm:text-base text-justify">
                  While I can work as full-stack but I think there's a lot more to explore for me on the front-end side
                  and currently learning web-animations with framer-motion and GSAP.
                </h1>
              </div>

              {/* Tagline */}
              <h1 className="font-roboto text-sm sm:text-base font-medium mt-6 lg:mt-[10vh] text-right">
                Broad in scope, deep in expertise
              </h1>
            </>
          ) : (
            <div className="mt-6 lg:mt-14">
              <Projects />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}