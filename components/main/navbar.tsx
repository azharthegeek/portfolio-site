"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-[65px] flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
            priority
            sizes="70px"
          />
          <div className="font-bold ml-[10px] hidden md:block text-gray-300">
            Muhammad Azhar
          </div>
        </Link>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* source code */}
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
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-2 pb-4">
          <div className="flex flex-col gap-4 border border-[#2A0E61] bg-[#0f0b1f]/80 rounded-2xl p-4 text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              onClick={() => setMenuOpen(false)}
            >
              Github
            </Link>

            <div className="flex flex-row gap-4 pt-2">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                >
                  <Icon className="h-6 w-6 text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
