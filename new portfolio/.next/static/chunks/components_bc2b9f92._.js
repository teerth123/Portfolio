(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/Card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ImageCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ImageCard(param) {
    let { src, title, alt, demoLink } = param;
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOnClick = (e)=>{
        if (!demoLink || demoLink === "/") {
            e.preventDefault();
            return;
        }
        window.open(demoLink, "_blank");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: (e)=>handleOnClick(e),
        style: {
            cursor: demoLink && demoLink !== "/" ? "pointer" : "default"
        },
        className: "relative w-full overflow-hidden cursor-pointer group ",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src || "/placeholder.svg",
                        alt: alt || title,
                        width: 400,
                        height: 300,
                        className: "w-full h-auto object-contain transition-transform duration-500 ease-out ".concat(isHovered ? "scale-110" : "scale-100")
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/90 backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-medium text-sm px-4 py-3 leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Card.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Card.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ImageCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = ImageCard;
var _c;
__turbopack_context__.k.register(_c, "ImageCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Work.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Work
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const work = {
    dev: [
        {
            src: "/puneApt.png",
            title: "Landing Page for Builder's Website",
            alt: "Teerth",
            demoLink: "https://apartment-hz7t.vercel.app/"
        },
        {
            src: "/slash.png",
            title: "Slash.com Hero",
            alt: "Teerth",
            demoLink: "https://slashteerth.netlify.app/"
        },
        {
            src: "/paytm.png",
            title: "Paytm Full Stack Project",
            alt: "Teerth",
            demoLink: "https://github.com/teerth123/Paytm-Clone"
        },
        {
            src: "/quiz.png",
            title: "RealTime Quiz/Forms Project",
            alt: "Teerth",
            demoLink: "https://github.com/teerth123/Quiz"
        },
        {
            src: "/amongus.png",
            title: "Among Us Game Clone",
            alt: "Teerth",
            demoLink: "https://github.com/teerth123/Among-Us"
        },
        {
            src: "/chess.png",
            title: "Heatmap for Chess.com",
            alt: "Teerth",
            demoLink: "https://arthteerth.vercel.app/"
        },
        {
            src: "/klavis.png",
            title: "Hero Redesign for Klavis-AI YC-Backed Startup",
            alt: "Teerth",
            demoLink: "https://klavisaihero.netlify.app/"
        },
        {
            src: "/tuf.png",
            title: "Landing Page Redesign TUF+",
            alt: "Teerth",
            demoLink: "https://tufff.netlify.app/"
        },
        {
            src: "/Desktop - 3.png",
            title: "Hero Redesign for TectoAI YC-Backed Startup",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/bento.png",
            title: "Bento for Striver TUF+",
            alt: "Teerth",
            demoLink: "https://tufff.netlify.app/"
        },
        {
            src: "/bento2.png",
            title: "Bento2 for Striver TUF+",
            alt: "Teerth",
            demoLink: "https://tufff.netlify.app/"
        }
    ],
    designs: [
        {
            src: "/Riff.png",
            title: "Redesign for Riff YC-Backed Startup",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/Vishy.png",
            title: "Vishy Anand Caricature designed in Figma",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/krrish.png",
            title: "Krrish Mask designed in Figma",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/chess.png",
            title: "Heatmap for Chess.com",
            alt: "Teerth",
            demoLink: "https://arthteerth.vercel.app/"
        },
        {
            src: "/Desktop - 3.png",
            title: "Hero Redesign for TectoAI YC-Backed Startup",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/bento.png",
            title: "Bento for Striver TUF+",
            alt: "Teerth",
            demoLink: "https://tufff.netlify.app/"
        },
        {
            src: "/bento2.png",
            title: "Bento2 for Striver TUF+",
            alt: "Teerth",
            demoLink: "https://tufff.netlify.app/"
        },
        {
            src: "/klavis.png",
            title: "Hero Redesign for Klavis-AI YC-Backed Startup",
            alt: "Teerth",
            demoLink: "https://klavisaihero.netlify.app/"
        }
    ],
    other: [
        {
            src: "/typing.png",
            title: "MonkeyType 30 Sec Challenge",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/skit.png",
            title: "PACE SKIT",
            alt: "Teerth",
            demoLink: "https://youtu.be/_F0jQn4xbU4?si=G7_8XdM40Gc6Zt3k"
        },
        {
            src: "/sketch.jpg",
            title: "Few Sketches",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/sketch.jpeg",
            title: "Light Yagami",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/freshers.png",
            title: "Freshers Party Dance",
            alt: "Teerth",
            demoLink: "https://www.youtube.com/watch?v=L23WjFyP71I"
        },
        {
            src: "/dd.jpg",
            title: "Daredevil",
            alt: "Teerth",
            demoLink: "https://www.instagram.com/reel/Cjszlp3PWr4/?utm_source=ig_web_copy_link"
        }
    ]
};
function Work() {
    _s();
    const [option, setOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Chaos");
    const renderWork = ()=>{
        let items;
        if (option === "Chaos") {
            // Combine only dev and designs arrays, remove duplicates based on src
            const allItems = [
                ...work.dev,
                ...work.designs
            ];
            const uniqueItems = allItems.filter((item, index, self)=>index === self.findIndex((t)=>t.src === item.src));
            items = uniqueItems;
        } else {
            items = work[option];
        }
        return items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: item.src,
                title: item.title,
                alt: item.alt,
                demoLink: item.demoLink
            }, idx, false, {
                fileName: "[project]/components/Work.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-wrap items-center justify-center pb-10 gap-3 sm:gap-[45px] bg-black px-4 z-20",
                children: [
                    "Chaos",
                    "dev",
                    "designs",
                    "other"
                ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-pointer",
                        onClick: ()=>setOption(cat),
                        children: option === cat ? // Selected button
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-[5px] h-fit w-[120px] sm:w-[150px] rounded-[50px] bg-gradient-to-r from-[#212121] via-[#737373] via-[#212121] via-[#737373] to-[#212121] text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-semibold text-[14px] sm:text-[16px] text-black bg-white px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-[50px]",
                                children: cat.charAt(0).toUpperCase() + cat.slice(1)
                            }, void 0, false, {
                                fileName: "[project]/components/Work.tsx",
                                lineNumber: 75,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Work.tsx",
                            lineNumber: 74,
                            columnNumber: 29
                        }, this) : // Unselected button
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-[1px] h-fit bg-white rounded-[50px] w-[120px] sm:w-[150px] text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-semibold text-[14px] sm:text-[16px] px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-[50px] text-white bg-gradient-to-r from-[#313131] via-[#000000] to-[#313131]",
                                children: cat.charAt(0).toUpperCase() + cat.slice(1)
                            }, void 0, false, {
                                fileName: "[project]/components/Work.tsx",
                                lineNumber: 82,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Work.tsx",
                            lineNumber: 81,
                            columnNumber: 29
                        }, this)
                    }, cat, false, {
                        fileName: "[project]/components/Work.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Work.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "columns-1 md:columns-2 lg:columns-3  gap-6 p-6 space-y-0 bg-black",
                children: renderWork()
            }, void 0, false, {
                fileName: "[project]/components/Work.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Work, "xOwy/UYSGBJ+F8JjS4gdiElcZ/E=");
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_bc2b9f92._.js.map