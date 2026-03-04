"use client";
import Card from "@/components/Card";

const work = {
  dev: [
    {
      src: "/puneApt.png",
      title: "Landing Page for Builder's Website",
      alt: "Teerth",
      demoLink: "https://apartment-hz7t.vercel.app/",
    },
    {
      src: "/slash.png",
      title: "Slash.com Hero",
      alt: "Teerth",
      demoLink: "https://slashteerth.netlify.app/",
    },
    {
      src: "/paytm.png",
      title: "Paytm Full Stack Project",
      alt: "Teerth",
      demoLink: "https://github.com/teerth123/Paytm-Clone",
    },
    {
      src: "/quiz.png",
      title: "RealTime Quiz/Forms Project",
      alt: "Teerth",
      demoLink: "https://github.com/teerth123/Quiz",
    },
    {
      src: "/amongus.png",
      title: "Among Us Game Clone",
      alt: "Teerth",
      demoLink: "https://github.com/teerth123/Among-Us",
    },
    {
      src: "/chess.png",
      title: "Heatmap for Chess.com",
      alt: "Teerth",
      demoLink: "https://arthteerth.vercel.app/",
    },
    {
      src: "/klavis.png",
      title: "Hero Redesign for Klavis-AI YC-Backed Startup",
      alt: "Teerth",
      demoLink: "https://klavisaihero.netlify.app/",
    },
    {
      src: "/tuf.png",
      title: "Landing Page Redesign TUF+",
      alt: "Teerth",
      demoLink: "https://tufff.netlify.app/",
    },
    {
      src: "/Desktop - 3.png",
      title: "Hero Redesign for TectoAI YC-Backed Startup",
      alt: "Teerth",
      demoLink: "/",
    },
    {
      src: "/bento.png",
      title: "Bento for Striver TUF+",
      alt: "Teerth",
      demoLink: "https://tufff.netlify.app/",
    },
    {
      src: "/bento2.png",
      title: "Bento2 for Striver TUF+",
      alt: "Teerth",
      demoLink: "https://tufff.netlify.app/",
    },
    {
      src: "/dodoPayments.png",
      title: "Feature Section + oss Contribution",
      alt: "Teerth",
      demoLink: "https://github.com/dodopayments/billingsdk/pull/161",
    },
  ],

  designs: [
    {
      src: "/Riff.png",
      title: "Redesign for Riff YC-Backed Startup",
      alt: "Teerth",
      demoLink: "/",
    },
    {
      src: "/Vishy.png",
      title: "Vishy Anand Caricature designed in Figma",
      alt: "Teerth",
      demoLink: "/",
    },
    {
      src: "/krrish.png",
      title: "Krrish Mask designed in Figma",
      alt: "Teerth",
      demoLink: "/",
    },
    {
      src: "/chess.png",
      title: "Heatmap for Chess.com",
      alt: "Teerth",
      demoLink: "https://arthteerth.vercel.app/",
    },
    {
      src: "/Desktop - 3.png",
      title: "Hero Redesign for TectoAI YC-Backed Startup",
      alt: "Teerth",
      demoLink: "/",
    },
    {
      src: "/bento.png",
      title: "Bento for Striver TUF+",
      alt: "Teerth",
      demoLink: "https://tufff.netlify.app/",
    },
    {
      src: "/bento2.png",
      title: "Bento2 for Striver TUF+",
      alt: "Teerth",
      demoLink: "https://tufff.netlify.app/",
    },
    {
      src: "/klavis.png",
      title: "Hero Redesign for Klavis-AI YC-Backed Startup",
      alt: "Teerth",
      demoLink: "https://klavisaihero.netlify.app/",
    },
    {
      src: "/dodoPayments.png",
      title: "Feature Section + oss Contribution",
      alt: "Teerth",
      demoLink: "https://github.com/dodopayments/billingsdk/pull/161",
    },
    {
      src: "/raunoGlyph.png",
      title: "Animated Design Concept inspired by Rauno",
      alt: "rauno",
      demoLink: "https://rauno-mauve.vercel.app/",
    },
    {
      src: "/dodoFeature.png",
      title: "Design Concept for Dodo Payments",
      alt: "Teerth",
      demoLink: "/",
    },
    {
      src: "/klavisTweet.png",
      title: "KlavisAI(YC25) publicly appreciated my work",
      alt: "Teerth",
      demoLink: "https://x.com/Klavis_AI/status/1960771091179413561?s=20",
    }
  ],

  other: [
    {
      src: "/monkeyType.png", //before -> typing.png
      title: "MonkeyType Profile",
      alt: "Teerth",
      demoLink: "https://monkeytype.com/profile/DexT1",
    },
    {
      src: "/skit.png",
      title: "PACE SKIT",
      alt: "Teerth",
      demoLink: "https://youtu.be/_F0jQn4xbU4?si=G7_8XdM40Gc6Zt3k",
    },
    { src: "/sketch.jpg", title: "Few Sketches", alt: "Teerth", demoLink: "/" },
    {
      src: "/sketch.jpeg",
      title: "Light Yagami",
      alt: "Teerth",
      demoLink: "/",
    },
    {
      src: "/freshers.png",
      title: "Freshers Party Dance",
      alt: "Teerth",
      demoLink: "https://www.youtube.com/watch?v=L23WjFyP71I",
    },
    {
      src: "/dd.jpg",
      title: "Daredevil",
      alt: "Teerth",
      demoLink:
        "https://www.instagram.com/reel/Cjszlp3PWr4/?utm_source=ig_web_copy_link",
    },
    {
      src:"/chess_com.png",
      title:"Highest Rating on 1800+ Chess.com ",
      alt:"Teerth",
      demoLink:"https://www.chess.com/member/teerthkulkarni"
    },
    {
      src:"/YT.png",
      title:"I loved his style",
      alt:"Teerth",
      demoLink:"https://www.youtube.com/shorts/lNKA3TPNVLo"
    }
  ],
} as const;

type WorkCategory = "dev" | "designs" | "other";

export default function Work() {
  // All items in one list: dev first, then designs, then other — deduplicated
  const allItems = [...work.dev, ...work.designs, ...work.other];
  const uniqueItems = allItems.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.src === item.src)
  );

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-6 space-y-0 bg-black">
      {uniqueItems.map((item, idx) => (
        <Card
          key={idx}
          src={item.src}
          title={item.title}
          alt={item.alt}
          demoLink={item.demoLink}
        />
      ))}
    </div>
  );
}
