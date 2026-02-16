"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="group relative flex flex-col items-center gap-2"
    >
      <div className="relative p-3 rounded-xl transition-all duration-300 group-hover:bg-purple-500/10 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          loading="lazy"
          sizes={`${width}px`}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-5 whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
};
