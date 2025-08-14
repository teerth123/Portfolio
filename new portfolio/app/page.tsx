"use client";
import { motion, spring } from "framer-motion";
// import {motion} from "motion/react"
// import Card from "@/components/Card";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Work from "@/components/Work";

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function DexTLogo() {
  return (
    <>
      <div className="h-[50vh] w-screen flex flex-col justify-center items-center bg-black">
        <div
          className="absolute z-0 rounded-full opacity-70 bg-[linear-gradient(180deg,rgba(133,133,133,0)_0%,rgba(0,0,0,0.2)_79.81%)] scale-200">
          <motion.svg
            width="521"
            height="521"
            viewBox="0 0 521 521"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

            initial={{
              opacity: 0.2
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 2,
            }}
          >
            <motion.circle
              cx="260.5"
              cy="260.5"
              r="260"
              fill="url(#paint0_linear_0_1)"
              fillOpacity="0.2"
              stroke="#252525"
            // initial={{
            //   scale:1, 
            // }}
            // animate={{
            //   scale:2, 
            // }}
            // transition={{
            //   duration:6,
            //   // type:spring,
            //   repeat:Infinity,
            //   repeatType:"reverse"
            // }}
            />
            <motion.circle
              cx="258.5"
              cy="262.5"
              r="219"
              fill="url(#paint1_linear_0_1)"
              fillOpacity="0.2"
              stroke="#252525"

            // initial={{
            //   scale:1, 
            // }}
            // animate={{
            //   scale:2, 
            // }}
            // transition={{
            //   duration:6,
            //   // type:spring,
            //   repeat:Infinity,
            //   repeatType:"reverse"
            // }}
            />
            <motion.circle
              cx="260.5"
              cy="262.5"
              r="162"
              fill="url(#paint2_linear_0_1)"
              fillOpacity="0.2"
              stroke="#252525"

            // initial={{
            //   scale:1, 
            // }}
            // animate={{
            //   scale:2, 
            // }}
            // transition={{
            //   duration:6,
            //   // type:spring,
            //   repeat:Infinity,
            //   repeatType:"reverse"
            // }}
            />
            <line
              x1="270.5"
              y1="92"
              x2="270.5"
              y2="107"
              stroke="url(#paint3_linear_0_1)"
            />
            <line
              x1="263"
              y1="99.5"
              x2="278"
              y2="99.5"
              stroke="url(#paint4_linear_0_1)"
            />
            <line
              x1="168.5"
              y1="123"
              x2="168.5"
              y2="138"
              stroke="url(#paint5_linear_0_1)"
            />
            <line
              x1="161"
              y1="130.5"
              x2="176"
              y2="130.5"
              stroke="url(#paint6_linear_0_1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="260.5"
                y1="0"
                x2="260.5"
                y2="521"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#858585" stopOpacity="0" />
                <stop offset="0.798077" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="258.5"
                y1="43"
                x2="258.5"
                y2="482"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#858585" stopOpacity="0" />
                <stop offset="0.798077" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_0_1"
                x1="260.5"
                y1="100"
                x2="260.5"
                y2="425"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#858585" stopOpacity="0" />
                <stop offset="0.798077" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_0_1"
                x1="269.5"
                y1="92"
                x2="269.5"
                y2="107"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.495192" stopColor="#525252" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_0_1"
                x1="263"
                y1="100.5"
                x2="278"
                y2="100.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.495192" stopColor="#525252" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_0_1"
                x1="167.5"
                y1="123"
                x2="167.5"
                y2="138"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.495192" stopColor="#525252" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_0_1"
                x1="161"
                y1="131.5"
                x2="176"
                y2="131.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.495192" stopColor="#525252" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
        <div className="z-10">
          <motion.h1
            className={`text-left my-5 text-[20px] font-semibold text-[#8b8b8b]`}
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2.5,
            }}
          >TEERTH KULKARNI</motion.h1>
          <motion.div 
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2.5,
            }}
          className="h-fit w-fit flex justify-center items-center   ">
            <svg
              width="434"
              height="133"
              viewBox="0 0 434 133"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M432.519 0.681641V24.1562H393.046V130.611H365.102V24.1562H325.63V0.681641H432.519Z"
                fill="url(#paint0_linear)"
                stroke="url(#paint1_linear)"
              />
              <path
                d="M256.475 32.9141L256.615 33.1816L273.931 66.1543L291.679 33.1768L291.82 32.9141H320.498L320.063 33.665L292.194 81.7588L320.816 129.855L321.265 130.611H292.71L292.567 130.358L273.929 97.6973L255.602 130.355L255.458 130.611H226.588L227.036 129.855L255.594 81.7568L228.039 33.6631L227.61 32.9141H256.475Z"
                fill="url(#paint2_linear)"
                stroke="url(#paint3_linear)"
              />
              <path
                d="M172.539 31.6553C178.972 31.6553 184.971 32.6923 190.53 34.7715H190.529C196.133 36.8099 201.02 39.8898 205.184 44.0107L205.577 44.4014C209.601 48.4649 212.74 53.5195 214.998 59.5537H214.997C217.331 65.7496 218.492 72.9879 218.492 81.2588V89.125H152.647C152.699 93.6598 153.565 97.5662 155.23 100.859L155.569 101.488C157.304 104.585 159.665 106.991 162.653 108.715C165.837 110.552 169.63 111.48 174.049 111.48C176.982 111.48 179.655 111.068 182.073 110.248C184.485 109.43 186.541 108.207 188.248 106.582C189.952 104.958 191.255 102.967 192.154 100.598L192.285 100.252L192.654 100.276L217.458 101.913L218.034 101.951L217.914 102.515C216.637 108.556 214.018 113.838 210.057 118.354C206.138 122.826 201.077 126.311 194.886 128.812H194.884C188.728 131.275 181.633 132.5 173.609 132.5C163.594 132.5 154.945 130.471 147.679 126.393L147.676 126.391C140.456 122.271 134.89 116.45 130.986 108.938V108.937C127.081 101.381 125.138 92.4647 125.138 82.2031C125.138 72.1912 127.082 63.3807 130.985 55.7861C134.887 48.1936 140.386 42.2681 147.478 38.0215H147.479C154.619 33.7718 162.978 31.6553 172.539 31.6553ZM172.979 52.6748C168.989 52.6749 165.47 53.5996 162.409 55.4365L162.407 55.4375C159.376 57.2393 157.004 59.6723 155.285 62.7432L155.284 62.7461C153.781 65.3943 152.917 68.3115 152.697 71.5049H192.24C192.17 67.9245 191.352 64.7566 189.793 61.9893C188.16 59.0891 185.896 56.8253 182.996 55.1914L182.988 55.1875C180.137 53.5179 176.806 52.6748 172.979 52.6748Z"
                fill="url(#paint4_linear)"
                stroke="url(#paint5_linear)"
              />
              <path
                d="M47.1501 0.681641C60.1845 0.681641 71.4346 3.27605 80.8816 8.48633L81.7605 8.97754C90.7801 14.1216 97.754 21.3951 102.677 30.7881C107.801 40.4858 110.352 52.0695 110.352 65.5205C110.352 79.0132 107.801 90.6385 102.677 100.378C97.596 110.117 90.2861 117.597 80.7556 122.807L80.7546 122.806C71.2654 128.016 59.9317 130.611 46.7722 130.611H0.568115V0.681641H47.1501ZM28.8269 106.255H45.6394C53.6406 106.255 60.3343 104.838 65.7429 102.03C71.1775 99.1891 75.2574 94.8056 77.9841 88.8564V88.8555C80.7555 82.8578 82.156 75.0881 82.156 65.5205C82.156 56.0373 80.756 48.3304 77.9851 42.375L77.9841 42.373C75.257 36.4229 71.198 32.0604 65.8064 29.2617C60.3978 26.4542 53.7031 25.0371 45.7019 25.0371H28.8269V106.255Z"
                fill="url(#paint6_linear)"
                stroke="url(#paint7_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="8.32893"
                  y1="11.0028"
                  x2="393.354"
                  y2="130.111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3A3A" />
                  <stop offset="1" stopColor="#999898" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="425.67"
                  y1="-1.92375"
                  x2="360.115"
                  y2="59.0155"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#666666" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="8.3289"
                  y1="11.0028"
                  x2="393.354"
                  y2="130.111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3A3A" />
                  <stop offset="1" stopColor="#999898" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="274.246"
                  y1="77.482"
                  x2="225.31"
                  y2="130.111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear"
                  x1="8.32895"
                  y1="11.0027"
                  x2="393.354"
                  y2="130.111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3A3A" />
                  <stop offset="1" stopColor="#999898" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear"
                  x1="172.68"
                  y1="84.8685"
                  x2="134.824"
                  y2="123.648"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear"
                  x1="8.32891"
                  y1="11.0028"
                  x2="393.354"
                  y2="130.111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3A3A3A" />
                  <stop offset="1" stopColor="#999898" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear"
                  x1="105.278"
                  y1="0.846219"
                  x2="56.3417"
                  y2="65.4788"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#666666" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        <motion.h1 
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2.5,
          }}
        className={`text-center mt-10 text-[20px] text-[#888]`}>Coding, designing, failing, and learning constantly <br /> all to push my luck arc and bend the odds.</motion.h1>
      </div>

      <Work />
    </>
  );
}


// some bg in hero
// resume twitter github links
//



