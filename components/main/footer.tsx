import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0618]/80 border-t border-[#2A0E61]/40 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Muhammad Azhar
            </h3>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              AI Engineer building intelligent systems that drive 10x
              efficiency. MS(AI) at FAST NUCES.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            {FOOTER_DATA.map((column) => (
              <div key={column.title} className="min-w-[140px]">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-purple-300 mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.data.map(({ icon: Icon, name, link }) => (
                    <li key={`${column.title}-${name}`}>
                      <Link
                        href={link}
                        target={
                          link.startsWith("http") || link.startsWith("mailto")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          link.startsWith("http") || link.startsWith("mailto")
                            ? "noreferrer noopener"
                            : undefined
                        }
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Muhammad Azhar. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
