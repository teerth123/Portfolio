"use client"
import Card from "@/components/Card";

import { useState } from "react";

const work = {
    dev: [
        { src: "/puneApt.png", title: "Landing Page for Builder's Website", alt: "Teerth", demoLink: "https://apartment-hz7t.vercel.app/" },
        { src: "/slash.png", title: "Slash.com Hero", alt: "Teerth", demoLink: "https://slashteerth.netlify.app/" },
        { src: "/paytm.png", title: "Paytm Full Stack Project", alt: "Teerth", demoLink: "https://github.com/teerth123/Paytm-Clone" },
        { src: "/quiz.png", title: "RealTime Quiz/Forms Project", alt: "Teerth", demoLink: "https://github.com/teerth123/Quiz" },
        { src: "/amongus.png", title: "Among Us Game Clone", alt: "Teerth", demoLink: "https://github.com/teerth123/Among-Us" },
        { src: "/chess.png", title: "Heatmap for Chess.com", alt: "Teerth", demoLink: "https://arthteerth.vercel.app/" },
        { src: "/klavis.png", title: "Hero Redesign for Klavis-AI YC-Backed Startup", alt: "Teerth", demoLink: "https://klavisaihero.netlify.app/" },
        { src: "/tuf.png", title: "Landing Page Redesign TUF+", alt: "Teerth", demoLink: "https://tufff.netlify.app/" },
        { src: "/Desktop - 3.png", title: "Hero Redesign for TectoAI YC-Backed Startup", alt: "Teerth", demoLink: "/" },
        { src: "/bento.png", title: "Bento for Striver TUF+", alt: "Teerth", demoLink: "https://tufff.netlify.app/" },
        { src: "/bento2.png", title: "Bento2 for Striver TUF+", alt: "Teerth", demoLink: "https://tufff.netlify.app/" }
    ],

    designs: [
        { src: "/Riff.png", title: "Redesign for Riff YC-Backed Startup", alt: "Teerth", demoLink: "/" },
        { src: "/Vishy.png", title: "Vishy Anand Caricature designed in Figma", alt: "Teerth", demoLink: "/" },
        { src: "/krrish.png", title: "Krrish Mask designed in Figma", alt: "Teerth", demoLink: "/" },
        { src: "/chess.png", title: "Heatmap for Chess.com", alt: "Teerth", demoLink: "https://arthteerth.vercel.app/" },
        { src: "/Desktop - 3.png", title: "Hero Redesign for TectoAI YC-Backed Startup", alt: "Teerth", demoLink: "/" },
        { src: "/bento.png", title: "Bento for Striver TUF+", alt: "Teerth", demoLink: "https://tufff.netlify.app/" },
        { src: "/bento2.png", title: "Bento2 for Striver TUF+", alt: "Teerth", demoLink: "https://tufff.netlify.app/" },
        { src: "/klavis.png", title: "Hero Redesign for Klavis-AI YC-Backed Startup", alt: "Teerth", demoLink: "https://klavisaihero.netlify.app/" },


    ],

    other: [
        { src: "/typing.png", title: "MonkeyType 30 Sec Challenge", alt: "Teerth", demoLink: "/" },
        { src: "/skit.png", title: "PACE SKIT", alt: "Teerth", demoLink: "https://youtu.be/_F0jQn4xbU4?si=G7_8XdM40Gc6Zt3k" },
        { src: "/sketch.jpg", title: "Few Sketches", alt: "Teerth", demoLink: "/" },
        { src: "/sketch.jpeg", title: "Light Yagami", alt: "Teerth", demoLink: "/" },
        { src: "/freshers.png", title: "Freshers Party Dance", alt: "Teerth", demoLink: "https://www.youtube.com/watch?v=L23WjFyP71I" },
        { src: "/dd.jpg", title: "Daredevil", alt: "Teerth", demoLink: "https://www.instagram.com/reel/Cjszlp3PWr4/?utm_source=ig_web_copy_link" },
    ]
} as const;

type WorkCategory = "dev" | "designs" | "other";

export default function Work() {
    const [option, setOption] = useState<"Chaos" | WorkCategory>("Chaos");

    const renderWork = () => {
        let items;
        if (option === "Chaos") {
            // Combine only dev and designs arrays, remove duplicates based on src
            const allItems = [...work.dev, ...work.designs];
            const uniqueItems = allItems.filter((item, index, self) => 
                index === self.findIndex(t => t.src === item.src)
            );
            items = uniqueItems;
        } else {
            items = work[option];
        }
        
        return items.map((item, idx) => (
            <Card key={idx} src={item.src} title={item.title} alt={item.alt} demoLink={item.demoLink} />
        ));
    };

    return (
        <>
            <div className="relative flex flex-wrap items-center justify-center pb-10 gap-3 sm:gap-[45px] bg-black px-4 z-20">
                {["Chaos", "dev", "designs", "other"].map((cat) => (
                    <div className="cursor-pointer" key={cat} onClick={() => setOption(cat as "Chaos" | WorkCategory)}>
                        {option === cat ? (
                            // Selected button
                            <div className="p-[5px] h-fit w-[120px] sm:w-[150px] rounded-[50px] bg-gradient-to-r from-[#212121] via-[#737373] via-[#212121] via-[#737373] to-[#212121] text-center">
                                <h1 className="font-semibold text-[14px] sm:text-[16px] text-black bg-white px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-[50px]">
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </h1>
                            </div>
                        ) : (
                            // Unselected button
                            <div className="pt-[1px] h-fit bg-white rounded-[50px] w-[120px] sm:w-[150px] text-center">
                                <h1 className="font-semibold text-[14px] sm:text-[16px] px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-[50px] text-white bg-gradient-to-r from-[#313131] via-[#000000] to-[#313131]">
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </h1>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3  gap-6 p-6 space-y-0 bg-black">
                {renderWork()}
            </div>
        </>
    );
}   