"use client";
import Link from "next/link";

export default function Comp(){
    return(
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div>
                    <div className="flex flex-col justify-between items-start text-left">
                        <Link href="/card-stack" className="text-white">1. Card-Stack</Link>
                        <Link href="/emil" className="text-white">2. Emil Kowalski Linear</Link>
                        <Link href="/cursorText" className="text-white">3. Cursor Text Generation</Link>
                        <Link href="/macbookNeo" className="text-white">4. Macbook Neo</Link>
                        <Link href="/text1" className="text-white">5. Text1</Link>
                        <Link href="/sonner" className="text-white">6. Sonner</Link>
                        <Link href="/book" className="text-white">7. Book</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

