"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function New() {
  const cols = 8;
  const rows = 5;

  const items = [
    { text: "Hello", row: 0, col: 0, span: 2, black: true },
    { text: "I", row: 1, col: 2, span: 1, black: true },
    { text: "am", row: 2, col: 3, span: 1, black: true },
    { text: "Teerth", row: 3, col: 4, span: 2, black: false },
    { text: "Kulkarni", row: 4, col: 6, span: 2, black: false },
  ];

  // track which cells are taken by a spanning item
  const taken = new Set<string>();
  items.forEach((it) => {
    for (let c = it.col; c < it.col + it.span; c++) {
      taken.add(`${it.row}-${c}`);
    }
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white dark:bg-black p-6">
      <div className="w-full max-w-[800px] ">
        <div className="relative">
          <div className="grid grid-cols-8 w-full z-0">
            {Array.from({ length: rows }).flatMap((_, r) =>
              Array.from({ length: cols }).map((_, c) => {
                // check if a text item starts here
                const item = items.find((it) => it.row === r && it.col === c);

                if (item) {
                  return (
                    <div
                      key={`${r}-${c}`}
                      style={{ gridColumn: `span ${item.span}` }}
                      className="flex items-center justify-center rounded bg-white dark:bg-black border border-[#6E6E6E]/20"
                    >
                      <h1
                        className={`font-medium text-base rounded-full w-full h-full flex items-center justify-center text-[32px] ${item.black ? "text-black dark:text-white bg-[#6E6E6E]/20" : "text-white dark:text-black bg-black dark:bg-white"}`}
                      >
                        {item.text}
                      </h1>
                    </div>
                  );
                }

                // skip cells covered by a span
                if (taken.has(`${r}-${c}`)) return null;

                // empty box — square
                return (
                  <div
                    key={`${r}-${c}`}
                    className="aspect-square flex items-center justify-center rounded bg-white dark:bg-black border border-[#6E6E6E]/20"
                  />
                );
              }),
            )}
          </div>

          <div className="absolute inset-0 flex w-full z-10 pointer-events-auto">
            <motion.div
              className="h-full w-1/4 flex justify-center items-center cursor-pointer"
              initial={{ backgroundColor: "transparent" ,}}
              whileHover={{ backgroundColor: "#DF3222" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                initial={{ color: "transparent" }}
                whileHover={{ color: "white" }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center text-black dark:text-white font-bold text-2xl"
              >
                <Link href={"/Projects"} className="flex w-full h-full items-center justify-center">
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-up-right-icon lucide-move-up-right"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
                </Link>
              </motion.h1>
            </motion.div>
            <motion.div
              className="h-full w-1/4 flex justify-center items-center cursor-pointer"
              initial={{ backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: "#F2BA3C" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                initial={{ color: "transparent" }}
                whileHover={{ color: "white" }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center text-black dark:text-white font-bold text-2xl"
              >
                <Link href={"/craft"} className="flex w-full h-full items-center justify-center">
                Craft
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-up-right-icon lucide-move-up-right"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
                </Link>
              </motion.h1>
            </motion.div>
            <motion.div
              className="h-full w-1/4 flex justify-center items-center cursor-pointer"
              initial={{ backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: "#5551FE" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                initial={{ color: "transparent" }}
                whileHover={{ color: "white" }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center text-black dark:text-white font-bold text-2xl"
              >
                <Link href={"/components"} className="flex w-full h-full items-center justify-center">
                Components
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-up-right-icon lucide-move-up-right"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
                </Link>
              </motion.h1>
            </motion.div>
            <motion.div
              className="h-full w-1/4 flex justify-center items-center cursor-pointer"
              initial={{ backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: "#16A34A" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                initial={{ color: "transparent" }}
                whileHover={{ color: "white" }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center text-black dark:text-white font-bold text-2xl"
              >
                <Link href={"/links"} className="flex w-full h-full items-center justify-center">
                Links
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-up-right-icon lucide-move-up-right"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
                </Link>
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
