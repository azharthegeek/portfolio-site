"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import { STATS } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const TYPING_TEXTS = [
  "AI Engineer",
  "ML Researcher",
  "GenAI Developer",
  "MS(AI) @ FAST NUCES",
];

function useTypingEffect(texts: string[], typingSpeed = 80, deleteSpeed = 40, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
          if (displayText.length + 1 === currentFullText.length) {
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deleteSpeed, pauseMs]);

  return displayText;
}

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, numericValue, { duration });
    const unsubscribe = rounded.on("change", (v) => setDisplay(String(v)));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, numericValue, rounded, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export const HeroContent = () => {
  const typedText = useTypingEffect(TYPING_TEXTS);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Muhammad Azhar</h1>
        </motion.div>

        {/* Typing text */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="flex items-center gap-2 mt-2"
        >
          <span className="text-xl md:text-2xl font-mono text-purple-300">
            {">"} {typedText}
          </span>
          <span className="typing-cursor inline-block w-[2px] h-6 bg-purple-400" />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 text-4xl md:text-6xl font-bold text-white max-w-[650px] w-auto h-auto"
        >
          <span className="leading-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 animate-gradient-shift">
              intelligent systems
            </span>{" "}
            that drive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              10x
            </span>{" "}
            efficiency.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          AI Engineer specializing in deep learning, generative AI, and production ML systems.
          I build and deploy AI models, RAG pipelines, and intelligent APIs that transform
          how organizations operate — from satellite imagery analysis to medical imaging
          and NLP solutions.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-3"
        >
          <a
            href="https://www.linkedin.com/in/azharthegeek/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Connect
          </a>
          <a
            href="mailto:azharthegeek@gmail.com"
            className="py-2.5 px-6 border border-purple-500/40 text-center text-purple-200 cursor-pointer rounded-lg font-medium transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-wrap gap-6 md:gap-10 mt-8 pt-8 border-t border-white/10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-xs md:text-sm text-gray-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl scale-110" />
          <Image
            src="/hero-bg.svg"
            alt="AI illustration"
            height={650}
            width={650}
            draggable={false}
            className="select-none relative z-10"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
