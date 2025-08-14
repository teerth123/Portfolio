"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

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
      className="relative w-full overflow-hidden cursor-pointer group "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt || title}
            width={400}
            height={300}
            className={`w-full h-auto object-contain transition-transform duration-500 ease-out ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>

        <div className="bg-black/90 backdrop-blur-sm">
          <h3 className="text-white font-medium text-sm px-4 py-3 leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  )
}
