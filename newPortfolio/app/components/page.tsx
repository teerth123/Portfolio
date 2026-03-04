"use client";
import Link from "next/link";

export default function Comp(){
    return(
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div>
                    <div className="flex flex-col justify-between items-start text-left">
                        <Link href="/card-stack" className="text-white">1. Card-Stack</Link>
                        <Link href="/emil" className="text-white">2. Emil</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

