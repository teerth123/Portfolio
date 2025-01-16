import React, { useState } from "react";

export default function Projects() {
    return (
        <div>
            <div className="w-full h-full gap-8 flex overflow-x-auto scrollbar-hidden"> {/* enable horizontal scrolling */}
                
                <div>
                    <Card 
                        Image="https://imgs.search.brave.com/btiX006dVbTLTRwQ2A6TIcAdS8YDyRdOOeuPDObwceI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ic21l/ZGlhLmJ1c2luZXNz/LXN0YW5kYXJkLmNv/bS9fbWVkaWEvYnMv/aW1nL2FydGljbGUv/MjAyNC0wNS8yMi9m/dWxsLzE3MTYzNjEy/NTYtMjg0Ny5KUEc_/aW09RmVhdHVyZUNy/b3Asc2l6ZT0oODI2/LDQ2NSk" 
                        Title="Paytm Clone" 
                        Desc="This project allows profile creation, user search, secure transactions, and rollback on transaction failure."
                        Link="https://github.com/teerth123/Paytm-Clone"
                        c1="#fdfdd9" c2="#fefd9c"
                        className="rounded-xl"
                    />
                </div>
                
                <div>
                    <Card 
                        Image="https://imgs.search.brave.com/9rhqtOh9t6A6IMe33XWhWD1a_TQAVWhslOYgC6GXAZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y2hlc3MtY29tLWxv/Z28taXMtc2VhbWxl/c3NseS1tZXJnZWQt/d2l0aC10aGUtcGF3/bi12MC1ud3loZ21z/YTkzemQxLnBuZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz03ZWUy/OGM0MDZjYTJhYjNh/NGU5NTdkZjNjMjAx/OTZiZTBhZjViZjhm" 
                        Title="Chess.com Analytics" 
                        Desc="Heatmap for chess.com users to track consistency and other analytical options"
                        Link="https://github.com/teerth123/ChessMac"
                        c1="#d9fdfc" c2="#9cf7fe"
                        className="rounded-xl"
                    />
                </div>
                

                <div>
                    <Card 
                        Image="https://imgs.search.brave.com/CXdVpEk89ua8j_tLQ9Q_BNmoFytdo65oI2e5gG8bUPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RhL1dDRV9TYW5n/bGlfTGlicmFyeS5q/cGc" 
                        Title="YouTube Clone" 
                        Desc="Clean YouTube clone with dark mode and redesigned UI, no Sign-in required."
                        Link="https://github.com/teerth123/YT-Clone"
                        c1="#fdd9e9" c2="#fe9cd0"
                        className="rounded-xl"
                    /> 
                </div>

                <div>
                <Card 
                    Image="https://imgs.search.brave.com/CXdVpEk89ua8j_tLQ9Q_BNmoFytdo65oI2e5gG8bUPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RhL1dDRV9TYW5n/bGlfTGlicmFyeS5q/cGc" 
                    Title="Club website" 
                    Desc="IIE Cell college Club website with GSAP animations"
                    Link="https://github.com/teerth123/IIE-CELL"
                    c1="#fdd9e9" c2="#fe9cd0"
                    className="rounded-xl"
                    /> 
                </div>
            
            </div>
            <h1 className="text-right mt-2 font-roboto text-[#878787]">Scroll<i class="ri-arrow-right-fill"></i></h1>
        </div>
    );
}

function Card({ Image, Title, Desc, Link , c1, c2}) {
    // const gradientStyle = {
    //     background: `linear-gradient(to bottom right, ${c1}, ${c2}, ${c1})`
    // };
    const [enter, setEnter] = useState(0)
    return (
        <div 
            className="w-56 h-80 rounded-2xl text-black border-2  flex justify-center items-center p-3 border-dashed bg-[#f6f6f6] cursor-pointer" 
            onClick={() => window.open(Link, "_blank")}
            onMouseEnter={()=>setEnter(1)}
            onMouseLeave={()=>setEnter(0)}
        >            {(enter===0)? (
                <>
                    <div className="flex justify-center items-center ">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end animate-gradient-x">
                            {Title}
                        </h1>
                    </div>

                </>
            ):(
                <>
                    <div className="w-full ">
                        <div className="flex justify-center items-center ">
                            <h1 className="font-roboto font-medium text-justify text-[#f43e0b] ">
                                {Desc}
                            </h1>
                        </div>
                        <div className="flex font-roboto">
                            <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                            <h1 className="mx-2">Link   </h1>
                        </div>
                    </div>    
                </>
            )}
        </div>
    );
}


    