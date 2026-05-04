"use client";

import { motion } from "framer-motion";

import { fadeInUp, scaleInX } from "@/lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
  align?: "left" | "center";
};

const CircuitLine = ({ flip = false }: { flip?: boolean }) => (
  <svg
    width="40"
    height="14"
    viewBox="0 0 40 14"
    fill="none"
    className={`flex-shrink-0 ${flip ? "scale-x-[-1]" : ""}`}
    aria-hidden="true"
  >
    <path
      d="M0 7 H28 V2 H36"
      stroke="rgba(112,66,248,0.45)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="36" cy="2" r="1.5" fill="rgba(0,212,255,0.6)" />
    <circle cx="40" cy="7" r="1.5" fill="rgba(112,66,248,0.5)" />
  </svg>
);

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  titleId,
  align = "center",
}: SectionHeaderProps) => {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {/* Eyebrow row */}
      <motion.div
        variants={fadeInUp(0)}
        className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""} mb-4`}
      >
        <CircuitLine />
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300 font-medium">
          {eyebrow}
        </p>
        <CircuitLine flip />
      </motion.div>

      {/* Title */}
      <motion.h2
        id={titleId}
        variants={fadeInUp(0.05)}
        className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        {title}
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        variants={scaleInX}
        className={`mt-3 h-[2px] w-16 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 rounded-full origin-center ${isCenter ? "mx-auto" : ""}`}
      />

      {/* Description */}
      {description && (
        <motion.p
          variants={fadeInUp(0.1)}
          className="text-gray-300 mt-5 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
