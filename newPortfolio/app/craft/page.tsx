"use client";
import Card from "@/components/Card";

// All items in the desired display order — no duplicates
const items = [
  {
    src: "/Desktop - 3.png",
    title: "Hero Redesign for TectoAI YC-Backed Startup",
    alt: "Teerth",
    demoLink: "/",
  },
  {
    src: "/100xlanding.png",
    title: "Landing Page for 100xDevs",
    alt: "Teerth",
    demoLink: "https://100x.dexteerth.me/",
  },
  {
    src: "/tuf.png",
    title: "Landing Page Redesign TUF+",
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
    src: "/slash.png",
    title: "Slash.com Hero",
    alt: "Teerth",
    demoLink: "https://slashteerth.netlify.app/",
  },
  {
    src: "/krrish.png",
    title: "Krrish Mask designed in Figma",
    alt: "Teerth",
    demoLink: "/",
  },
  {
    src: "/raunoGlyph.png",
    title: "Animated Design Concept inspired by Rauno",
    alt: "rauno",
    demoLink: "https://rauno-mauve.vercel.app/",
  },
  {
    src: "/klavisTweet.png",
    title: "KlavisAI(YC25) publicly appreciated my work",
    alt: "Teerth",
    demoLink: "https://x.com/Klavis_AI/status/1960771091179413561?s=20",
  },
  {
    src: "/Vishy.png",
    title: "Vishy Anand Caricature designed in Figma",
    alt: "Teerth",
    demoLink: "/",
  },
  {
    src: "/dodoFeature.png",
    title: "Design Concept for Dodo Payments",
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
    src: "/monkeyType.png",
    title: "MonkeyType Profile",
    alt: "Teerth",
    demoLink: "https://monkeytype.com/profile/DexT1",
  },
  {
    src: "/dodoPayments.png",
    title: "Feature Section + OSS Contribution",
    alt: "Teerth",
    demoLink: "https://github.com/dodopayments/billingsdk/pull/161",
  },
  {
    src: "/puneApt.png",
    title: "Landing Page for Builder's Website",
    alt: "Teerth",
    demoLink: "https://apartment-hz7t.vercel.app/",
  },
  {
    src: "/chess.png",
    title: "Heatmap for Chess.com",
    alt: "Teerth",
    demoLink: "https://arthteerth.vercel.app/",
  },
  // remaining items
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
    src: "/Riff.png",
    title: "Redesign for Riff YC-Backed Startup",
    alt: "Teerth",
    demoLink: "/",
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
    src: "/chess_com.png",
    title: "Highest Rating 1800+ on Chess.com",
    alt: "Teerth",
    demoLink: "https://www.chess.com/member/teerthkulkarni",
  },
  {
    src: "/placed.png",
    title: "Got on campus placements",
    alt: "Teerth",
    demoLink: "https://x.com/DexTee_17/status/1983943382733877580",
  },
  {
    src: "/skit.png",
    title: "PACE SKIT",
    alt: "Teerth",
    demoLink: "https://youtu.be/_F0jQn4xbU4?si=G7_8XdM40Gc6Zt3k",
  },
  {
    src: "/sketch.jpg",
    title: "Few Sketches",
    alt: "Teerth",
    demoLink: "/",
  },
  {
    src: "/sketch.jpeg",
    title: "Light Yagami",
    alt: "Teerth",
    demoLink: "/",
  },
  {
    src: "/dd.jpg",
    title: "Daredevil",
    alt: "Teerth",
    demoLink: "https://www.instagram.com/reel/Cjszlp3PWr4/?utm_source=ig_web_copy_link",
  },
  {
    src: "/YT.png",
    title: "I loved his style",
    alt: "Teerth",
    demoLink: "https://www.youtube.com/shorts/lNKA3TPNVLo",
  },
] as const;

export default function Work() {
  // Distribute items across 3 columns round-robin so the top items
  // land at the top of each column (how CSS columns flow works)
  const numCols = 3;
  const columns: (typeof items[number])[][] = Array.from({ length: numCols }, () => []);
  items.forEach((item, i) => {
    columns[i % numCols].push(item);
  });
  const reordered = columns.flat();

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-6 space-y-0 bg-white dark:bg-black">
      {reordered.map((item, idx) => (
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
