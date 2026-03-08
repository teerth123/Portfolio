"use client";

import { easeInOut, motion, scale } from "motion/react";
import {CircleCheck, CircleAlert, TriangleAlert } from 'lucide-react';
import { useState } from "react";
import { span } from "motion/react-client";

export default function Sonner() {
  const [toasts, setToasts] = useState<{ id: number; type: string }[]>([]);

  const variants = {
    zeroth: {
      y: 20,
      opacity: 0,
      zIndex: 0,
    },
    first: {
      y: 0,
      opacity: 1,
      zIndex: 30,
    },
    sec: {
      y: -15,
      opacity: 0.8,
      zIndex: 20,
      scale: 0.9,
    },
    third: {
      y: -25,
      opacity: 0.6,
      zIndex: 10,
      scale: 0.8,
    },
    fourth: {
      y: -35,
      opacity: 0,
      zIndex: 1,
      scale: 0.7,
    },
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center dark:bg-black bg-white gap-2">
        <div className="w-full text-center gap-2 m-10">
        <div className="gap-2">
        <motion.button
          className="cursor-pointer border border-[#bebbbb]/40 rounded-xl p-3"
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setToasts((prev) =>
              [{ id: Date.now(), type: "normal" }, ...prev].slice(0, 4),
            )
          }
        >
          Normal Toast
        </motion.button>
        <motion.button
          className="cursor-pointer border border-[#bebbbb]/40 rounded-xl p-3"
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setToasts((prev) =>
              [{ id: Date.now(), type: "success" }, ...prev].slice(0, 4),
            )
          }
        >
          Success Toast
        </motion.button>
        <motion.button
          className="cursor-pointer border border-[#bebbbb]/40 rounded-xl p-3"
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setToasts((prev) =>
              [{ id: Date.now(), type: "error" }, ...prev].slice(0, 4),
            )
          }
        >
          Error Toast
        </motion.button>
        </div>
        <div>
        <motion.button
          className="cursor-pointer border border-[#bebbbb]/40 rounded-xl p-3"
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setToasts((prev) =>
              [{ id: Date.now(), type: "warning" }, ...prev].slice(0, 4),
            )
          }
        >
          Warning Toast
        </motion.button>
        <motion.button
          className="cursor-pointer border border-[#bebbbb]/40 rounded-xl p-3"
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setToasts((prev) =>
              [{ id: Date.now(), type: "info" }, ...prev].slice(0, 4),
            )
          }
        >
          Info Toast
        </motion.button>
        </div>
        </div>
      </div>

      <motion.div className="fixed  bottom-10 right-10">
        {Array.from({ length: toasts.length }).map((_, i) => {
          return (
            <motion.div
              key={toasts[i].id}
              className={`w-80 h-16 border border-[#bebbbb]/40 p-3 rounded-lg m-3 shadow-lg dark:bg-black ${toasts[i].type === "normal" ? "bg-[#f1efef] text-black" : ""} ${toasts[i].type === "success" ? "bg-green-100 text-green-500" : ""} ${toasts[i].type === "error" ? "bg-red-100 text-red-500" : ""} ${toasts[i].type === "warning" ? "bg-yellow-100 text-yellow-500" : ""} ${toasts[i].type === "info" ? "bg-blue-100 text-blue-500" : ""} dark:text-white flex flex-col justify-center fixed bottom-0 right-0`}
              initial={
                i === 0
                  ? "zeroth"
                  : i === 1
                    ? "first"
                    : i === 2
                      ? "sec"
                      : "third"
              }
              transition={{ ease: "easeInOut" }}
              variants={variants}
              animate={
                i === 0
                  ? "first"
                  : i === 1
                    ? "sec"
                    : i === 2
                      ? "third"
                      : "fourth"
              }
            >
              {toasts[i].type === "normal" && (
                <>
                  <h1 className=" text-md font-semibold ">Normal Toast</h1>
                  <h1 className="">newly Rendered Toast</h1>
                </>
              )}

              {
                toasts[i].type === "success" && (
                    <span className="flex justify-start gap-2"><CircleCheck className="text-green-500"/><h1 className="text-green-500"> Event has been created</h1></span>
                    
                )
              }

              {
                toasts[i].type === "error" && (
                    <span className="flex justify-start gap-2"><CircleAlert className="text-red-500"/><h1 className="text-red-500"> Event has failed</h1></span>
                    
                )
              }

              {
                toasts[i].type === "warning" && (
                    <span className="flex justify-start gap-2"><TriangleAlert className="text-yellow-500"/><h1 className="text-yellow-500"> Event has a warning</h1></span>
                    
                )
              }

              {
                toasts[i].type === "info" && (
                    <span className="flex justify-start gap-2"><CircleCheck className="text-blue-500"/><h1 className="text-blue-500"> Event has an info</h1></span>
                    
                )
              }
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
