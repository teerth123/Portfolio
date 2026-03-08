"use client";

import { Urbanist } from "next/font/google";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeftToLine } from "lucide-react";

const urbanist = Urbanist({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
export default function Links() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-[#d6d6d6] dark:bg-black text-[#171717] dark:text-white scrollbar-hide gap-10">
        <div className="h-[500px] w-full max-w-[800px] mx-4 border border-[#6E6E6E]/20 bg-white dark:bg-[#111111]">
          <div className="h-full w-full flex flex-col items-center justify-between">
            <div className="w-full h-fit flex justify-between items-center p-5">
              <a
                href="https://www.linkedin.com/in/teerth-kulkarni-152334290/"
                target="_blank"
                className={`${urbanist.className} text-2xl font-semibold`}
              >
                Linkedin
              </a>
              <a
                href="mailto:arthteerth12345@gmail.com"
                className={`${urbanist.className} text-2xl font-semibold`}
              >
                Email
              </a>
            </div>

            <div>
              <h1
                className={`${urbanist.className} text-2xl font-semibold cursor-pointer`}
                onClick={() => setOpen(!open)}
              >
                Useful Links
              </h1>
            </div>

            <div className="w-full h-fit flex justify-between items-center p-5">
              <a
                href="https://github.com/teerth123"
                target="_blank"
                className={`${urbanist.className} text-2xl font-semibold`}
              >
                Github
              </a>
              <a
                href="https://x.com/DexTee_17"
                target="_blank"
                className={`${urbanist.className} text-2xl font-semibold`}
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
            <div className="fixed z-20 w-[20vw] top-0 left-0 h-20 blur-2xl bg-white/5"/>
            <div className="fixed z-20 w-[20vw] bottom-0 left-0 h-20 blur-2xl bg-white/5"/>
          <motion.div
            className={`fixed z-10 h-screen w-[20vw] bg-[#d6d6d6] dark:bg-black top-0 left-0 ${open ? "block" : "hidden"} `}
            initial={{ x: "-100%" }}
            animate={{ x: open ? "0%" : "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div
              className={` text-3xl font-semibold ${urbanist.className} p-3`}
            >
              <ArrowLeftToLine className="mt-3" />
              <br />
              <h1>Some useful links I use</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

//linkedin, email, github, twitter


// https://arc.net/
// rauno.me
// https://arsenkolyba.com/
// motion.dev
// skiper-ui.com
// https://nextjs.org/learn
// https://www.kshv.me/
// nextjs.org
// vercel.com
// designengineers.net
// https://www.fonttrio.xyz/
// https://www.jhey.dev/
// https://developer.apple.com/design/human-interface-guidelines/
// https://www.raphaelsalaja.com/library/12-principles-of-animation
// Userinterface.wiki
// Interfacecraft.dev
// https://www.youtube.com/@codegrid
// https://www.youtube.com/watch?v=jlEZlFX3jEM&list=PLlNdnoKwDZdwwEWvKXdR9qwDSlnkGtOjq
// https://www.youtube.com/@joindiveclub
// https://www.youtube.com/@syntaxfm



