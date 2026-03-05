"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
                        <Link href="/magneticButton" className="text-white">8. Magnetic Button</Link>
                        <Link href="/book" className="text-white">7. Book</Link>
                    </div>

                    {/* <div className="mt-10">
                        <GlitchText text="Hello I am Teerth" />
                    </div> */}
                </div>
            </div>
        </>
    )
}   


function GlitchText({ text, delayPerChar = 0.1, intervalMs = 50 }: { text: string; delayPerChar?: number; intervalMs?: number }) {
    // Initialize with the actual text so server & client match (no hydration mismatch)
    const [displayed, setDisplayed] = useState<string[]>(text.split(""));

    useEffect(() => {
        const startTime = Date.now();

        const id = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000; 

            setDisplayed(
                text.split("").map((char, i) => {
                    if (char === " ") return " ";
                    if (elapsed >= i * delayPerChar) return char;
                    return randomChar();
                })
            );

            if (elapsed >= text.length * delayPerChar) {
                clearInterval(id);
            }
        }, intervalMs);

        return () => clearInterval(id);
    }, [text, delayPerChar, intervalMs]);

    return (
        <div className="w-fit text-white font-semibold flex">
            {displayed.map((char, i) => (
                <span key={i} className="w-[0.6em] text-center text-2xl">
                    {char}
                </span>
            ))}
        </div>
    );
}

function randomChar(): string {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26)); // a-z
}
