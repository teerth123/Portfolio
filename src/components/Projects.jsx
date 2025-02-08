import React, { useState } from "react";
import one from "../assets/gradii-1080x1080.png";
import two from "../assets/gradii-1080x1080 (1).png";
import three from "../assets/gradii-1080x1080 (2).png";
import four from "../assets/gradii-1080x1080 (3).png";

export default function Projects() {
  return (
    <div className="space-y-4 border-2 border-black border-opacity-20 rounded-xl p-6 h-full flex justify-center ">
      <div className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
        <ProjectCard 
          title="Paytm Clone"
          img={one}
          desc="This project allows profile creation, user search, secure transactions, and rollback on transaction failure."
          link="https://github.com/teerth123/Paytm-Clone"
          bgColor="from-[#fdfdd9] to-[#fefd9c]"
        />
        <ProjectCard 
          title="Chess.com Analytics"
          img={two}
          desc="Heatmap for chess.com users to track consistency and other analytical options"
          link="https://arthteerth.vercel.app"
          bgColor="from-[#d9fdfc] to-[#9cf7fe]"
        />
        <ProjectCard 
          title="YouTube Clone"
          img={three}
          desc="Clean YouTube clone with dark mode and redesigned UI, no Sign-in required."
          link="https://github.com/teerth123/YT-Clone"
          bgColor="from-[#fdd9e9] to-[#fe9cd0]"
        />
        <ProjectCard 
          title="Freelancing"
          img={four}
          desc="IIE Cell college Club website with GSAP animations"
          link="https://apartment-hz7t.vercel.app/"
          bgColor="from-[#fdd9e9] to-[#fe9cd0]"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, img, desc, link, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-lg overflow-hidden min-w-[250px] snap-center cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={img} 
        alt={title} 
        className="rounded-lg w-full h-full object-cover" 
      />
      <div 
        className={`absolute inset-0 rounded-lg flex items-center justify-center transition-opacity duration-300`} 
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        onClick={() => window.open(link, "_blank")}
      >
        {isHovered ? (
          <div className="p-4 text-white flex flex-col justify-between font-roboto font-medium">
            <p className="text-sm text-justify">{desc}</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <span className="text-sm">View Project</span>
            </div>
          </div>
        ) : (
          <h1 className="text-xl font-bold text-center text-white font-Onest ">{title}</h1>
        )}
      </div>
    </div>
  );
}
