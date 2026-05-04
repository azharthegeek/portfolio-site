"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.link.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md px-6 md:px-10">
        <div className="w-full h-[65px] flex flex-row items-center justify-between m-auto px-[10px]">
          <Link
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center justify-center"
          >
            <motion.div
              className="font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-size-200 text-lg md:text-xl"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              MA
            </motion.div>
            <div className="font-bold ml-[8px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              Muhammad Azhar
            </div>
          </Link>

          <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              {NAV_LINKS.map((link) => {
                const sectionId = link.link.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={link.title}
                    href={link.link}
                    className={`cursor-pointer transition-all duration-200 relative ${
                      isActive
                        ? "text-purple-400"
                        : "hover:text-[rgb(112,66,248)]"
                    }`}
                  >
                    {link.title}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              <Link
                href={LINKS.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                Github
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-row gap-5">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={`Visit my ${name} profile`}
                className="hover:scale-110 transition-transform duration-200"
              >
                <Icon className="h-6 w-6 text-white hover:text-purple-400 transition-colors" />
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden px-2 pb-4 overflow-hidden"
            >
              <div className="flex flex-col border border-[#2A0E61] bg-[#0f0b1f]/80 rounded-2xl p-4 text-gray-200">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.link.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <Link
                      key={link.title}
                      href={link.link}
                      className={`cursor-pointer transition py-3 min-h-[44px] flex items-center ${
                        isActive
                          ? "text-purple-400 font-medium"
                          : "hover:text-[rgb(112,66,248)]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  );
                })}

                <Link
                  href={LINKS.sourceCode}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition py-3 min-h-[44px] flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Github
                </Link>

                <div className="flex flex-row gap-4 pt-2 border-t border-white/10 mt-2">
                  {SOCIALS.map(({ link, name, icon: Icon }) => (
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      key={name}
                      aria-label={`Visit my ${name} profile`}
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      <Icon className="h-6 w-6 text-white hover:text-purple-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll progress bar */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};
