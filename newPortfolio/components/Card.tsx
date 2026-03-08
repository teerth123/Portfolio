"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { span } from "motion/react-client"

interface ImageCardProps {
  src: string
  title: string
  alt?: string
  demoLink:string
}

export default function ImageCard({ src, title, alt, demoLink }: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)
    const handleOnClick = (e:any)=>{
        if(!demoLink || demoLink==="/") {
            e.preventDefault();
            return;
        }
        window.open(demoLink, "_blank")
    }
  return (
    <div
        onClick={(e)=>handleOnClick(e)} style={{cursor:demoLink && demoLink!=="/" ? "pointer" : "default"}}
      className="relative w-full overflow-hidden cursor-pointer group m-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col w-full">
        <div className="relative overflow-hidden rounded-xl mb-1">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt || title}
            width={400}
            height={300}
            className={`w-full h-auto object-contain transition-transform duration-500 ease-out ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>

        <div className="bg-[#f0f0f0] dark:bg-[#181818] backdrop-blur-sm w-full rounded-xl">
          <h3 className="text-[#4a4a4a] dark:text-[#7a7a7a] font-semibold text-md m-2 p-1 leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  )
}
