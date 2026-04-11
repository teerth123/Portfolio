"use client";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import { useState, useEffect } from "react";
import { easeInOut, hover, motion } from "motion/react";
import { useTheme } from "../../components/ThemeProvider";

const urbanist = Urbanist({ weight: ["400", "600", "700"], subsets: ["latin"] });
export default function Comp() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`h-auto mx-auto w-screen flex justify-center items-center tracking-tighter ${urbanist.className}`}>
        <div>
          <div className="flex flex-col justify-center items-start text-center">
            <Mixer text="Card Stack" link="/card-stack"></Mixer>
            <Mixer text="Emil Kowalski Linear" link="/emil"></Mixer>
            <Mixer text="Cursor Text Generation" link="/cursorText"></Mixer>
            <Mixer text="Macbook Neo" link="/macbookNeo"></Mixer>
            <Mixer text="Text Animation 1" link="/text1"></Mixer>
            <Mixer text="Sonner" link="/sonner"></Mixer>
            <Mixer text="Book" link="/book"></Mixer>
            <Mixer text="Magnetic Button" link="/magneticButton"></Mixer>
            <Mixer text="Slider" link="/slider"></Mixer>
            <Mixer text="Rauno Staggered Text" link="/staggeredText" />
            <Mixer text="Vanish Input" link="/vanishInput" />
            {theme === "dark" && (
              <Mixer text="Rauno(Vercel) Tabs" link="/InvertedColorTabs" />
            )}
            {/* <Mixer text="Context Aware Hover" link="/contextAwareHover" /> */}
            {/* spotify - https://codepen.io/jh3y/pen/WbwZaNa */}
          </div>
        </div>
      </div>
    </>
  );
}

function Mixer({ text, link }: { text?: string; link?: string }) {
  const [isHovered, setHovered] = useState(false);
  const getHover = ({ index }: { index: number }) => {
    if (text) {
      const center = text?.length / 2;
      return 0.05 * Math.abs(center - index - 1);
    }
  };
  return (
    <motion.div
      className="flex justify-center items-center h-fit dark:bg-black bg-white border border-white dark:text-white text-black"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href={link || "#"}>
        <div className="h-20 overflow-hidden dark:text-white text-black text-xl sm:text-6xl font-semibold flex">
          {text?.split("").map((char, index) => {
            return (
              <motion.div
                className="w-full"
                animate={{ y: isHovered ? "-120%" : "0%" }}
                transition={{
                  delay: getHover({ index }),
                  duration: 0.2,
                  ease: "easeIn",
                }}
                key={index}
              >
                <h1 className="h-24 flex items-center justify-center leading-0 tracking-0 my-0 py-0">
                  {char === " " ? "\u00A0" : char}
                </h1>
                <h1 className="h-24 flex items-center justify-center leading-0 tracking-0 my-0 py-0">
                  {char === " " ? "\u00A0" : char}
                </h1>
                <h1 className="h-24 flex items-center justify-center leading-0 tracking-0 my-0 py-0">
                  {char === " " ? "\u00A0" : char}
                </h1>
              </motion.div>
            );
          })}
        </div>
      </Link>
    </motion.div>
  );
}
