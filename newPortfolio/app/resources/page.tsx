"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ResourceLink {
  name: string;
  url: string;
}

interface BlockProps {
  title: string;
  links: ResourceLink[];
}

const ResourceBlock = ({ title, links }: BlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a0a0a] border border-[#252525] rounded-lg p-6 hover:border-[#3a3a3a] transition-colors"
    >
      <h2 className="text-xl font-semibold text-[#999898] mb-4">{title}</h2>
      <div className="space-y-3">
        {links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#8b8b8b] hover:text-white transition-colors duration-200 text-lg group"
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                {link.name}
              </span>
              <span className="inline-block ml-2 text-[#525252] group-hover:text-[#999898] transition-colors">
                ↗
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function ResourcesPage() {
  const inspirationLinks: ResourceLink[] = [
    { name: "Rauno", url: "https://rauno.me/" },
    { name: "Chanh Dai", url: "https://chanhdai.com/" },
    { name: "legion", url: "https://legions.dev/" },
    { name: "learn uiux", url: "https://motion.zajno.com/" },
    { name: "keshav", url: "https://kshv.me/" },
    { name: "shawn", url: "https://www.zzzzshawn.cloud/" },
    { name: "OPM", url: "https://www.mihircodes.in/" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#8b8b8b] mb-12"
        >
          Handy links and references I keep close
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResourceBlock title="Inspiration" links={inspirationLinks} />
        </div>
      </div>
    </div>
  );
}
