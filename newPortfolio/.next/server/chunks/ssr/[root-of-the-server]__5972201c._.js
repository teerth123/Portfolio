module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/components/Card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ImageCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ImageCard({ src, title, alt, demoLink }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOnClick = (e)=>{
        if (!demoLink || demoLink === "/") {
            e.preventDefault();
            return;
        }
        window.open(demoLink, "_blank");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: (e)=>handleOnClick(e),
        style: {
            cursor: demoLink && demoLink !== "/" ? "pointer" : "default"
        },
        className: "relative w-full overflow-hidden cursor-pointer group ",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: src || "/placeholder.svg",
                        alt: alt || title,
                        width: 400,
                        height: 300,
                        className: `w-full h-auto object-contain transition-transform duration-500 ease-out ${isHovered ? "scale-110" : "scale-100"}`
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/90 backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
}),
"[project]/app/craft/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Work
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-ssr] (ecmascript)");
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
        },
        {
            src: "/dodoPayments.png",
            title: "Feature Section + oss Contribution",
            alt: "Teerth",
            demoLink: "https://github.com/dodopayments/billingsdk/pull/161"
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
        },
        {
            src: "/dodoPayments.png",
            title: "Feature Section + oss Contribution",
            alt: "Teerth",
            demoLink: "https://github.com/dodopayments/billingsdk/pull/161"
        },
        {
            src: "/raunoGlyph.png",
            title: "Animated Design Concept inspired by Rauno",
            alt: "rauno",
            demoLink: "https://rauno-mauve.vercel.app/"
        },
        {
            src: "/dodoFeature.png",
            title: "Design Concept for Dodo Payments",
            alt: "Teerth",
            demoLink: "/"
        },
        {
            src: "/klavisTweet.png",
            title: "KlavisAI(YC25) publicly appreciated my work",
            alt: "Teerth",
            demoLink: "https://x.com/Klavis_AI/status/1960771091179413561?s=20"
        }
    ],
    other: [
        {
            src: "/monkeyType.png",
            title: "MonkeyType Profile",
            alt: "Teerth",
            demoLink: "https://monkeytype.com/profile/DexT1"
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
        },
        {
            src: "/chess_com.png",
            title: "Highest Rating on 1800+ Chess.com ",
            alt: "Teerth",
            demoLink: "https://www.chess.com/member/teerthkulkarni"
        },
        {
            src: "/YT.png",
            title: "I loved his style",
            alt: "Teerth",
            demoLink: "https://www.youtube.com/shorts/lNKA3TPNVLo"
        }
    ]
};
function Work() {
    // All items in one list: dev first, then designs, then other — deduplicated
    const allItems = [
        ...work.dev,
        ...work.designs,
        ...work.other
    ];
    const uniqueItems = allItems.filter((item, index, self)=>index === self.findIndex((t)=>t.src === item.src));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "columns-1 md:columns-2 lg:columns-3 gap-6 p-6 space-y-0 bg-black",
        children: uniqueItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: item.src,
                title: item.title,
                alt: item.alt,
                demoLink: item.demoLink
            }, idx, false, {
                fileName: "[project]/app/craft/page.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/craft/page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5972201c._.js.map