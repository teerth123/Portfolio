import React from "react";

export default function First(){
    return (
        <>
            <div className="w-full space-y-6 border-2 border-black border-opacity-20 rounded-xl p-6 h-full">
          {/* Profile Image */}
          <div className="relative ">
            <img
              src="/pic.jpeg"
              className="w-8/12 h-auto rounded-xl object-cover object-top "
              alt="PFP"
            />
          </div>

          {/* Name and Social Links */}
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-medium font-roboto">
              Teerth Kulkarni
              <span className="mx-2 space-x-2">
                (
                <i className="ri-linkedin-fill text-[#4692DD] hover:opacity-80 transition-opacity cursor-pointer" 
                   onClick={() => window.open("https://www.linkedin.com/in/teerth-kulkarni-152334290", "_blank")}></i>
                <i className="ri-twitter-x-fill hover:opacity-80 transition-opacity cursor-pointer" 
                   onClick={() => window.open("https://x.com/DexTee_17", "_blank")}></i>
                <i className="ri-youtube-fill text-[#FE1414] hover:opacity-80 transition-opacity cursor-pointer" 
                   onClick={() => window.open("https://www.youtube.com/@WCEWaveCreativeEcho", "_blank")}></i>
                <i className="ri-github-fill hover:opacity-80 transition-opacity cursor-pointer" 
                   onClick={() => window.open("https://github.com/teerth123", "_blank")}></i>
                <i className="ri-file-line hover:opacity-80 transition-opacity cursor-pointer" 
                   onClick={() => window.open("https://docs.google.com/document/d/1PIUN257C6IGUTZr1faxsEa2-nZXdr9U0OI-5Mpo08wQ/edit", "_blank")}></i>
                )
              </span>
            </h1>
          </div>

          {/* Bio Section */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base text-justify leading-relaxed">
              Hi, I'm <span className="font-medium">Teerth Kulkarni</span>, a 3rd-year BTech student at Walchand College of Engineering,
              Sangli. I'm someone who loves creativity—be it in coding, sketching, or editing. Outside
              studies, you'll find me playing chess, drawing, or scrolling on reddit and pinterest.
            </p>
            <p className="text-sm sm:text-base text-justify leading-relaxed">
              <span className="line-through">I don't like to talk much about numbers but still I will mention -</span>
              I have got 98.97%tile in MHTCET exam. I started solving DSA and CP problems a bit late but so far I
              have solved 300+ questions across multiple online judges like Leetcode, Codechef, Codeforces. And as
              I said I have always loved playing chess, so my rapid and blitz elo on Chess.com is 1600+.
            </p>
          </div>

          {/* Navigation Buttons */}
         
        </div>
        </>
    )
}