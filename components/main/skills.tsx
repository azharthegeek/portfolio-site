"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import type { ElementType } from "react";
import { FaBrain, FaCloud, FaCogs, FaRobot, FaServer } from "react-icons/fa";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import {
  AI_FRAMEWORKS,
  AI_TOOLS,
  DEVOPS_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";
import { scaleInX } from "@/lib/motion";

type SkillGroupProps = {
  title: string;
  Icon: ElementType;
  skills: ReadonlyArray<{
    skill_name: string;
    image: string;
    width: number;
    height: number;
  }>;
};

const SkillsVideo = dynamic(
  () => Promise.resolve(() => (
    <div className="w-full h-full absolute">
      <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
        <video
          className="w-full h-auto"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
          aria-hidden="true"
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  )),
  { ssr: false }
);

const SkillGroup = ({ title, Icon, skills }: SkillGroupProps) => (
  <div className="w-full">
    <div className="flex items-center gap-3 mb-2 px-4">
      <div className="h-7 w-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 flex-shrink-0">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <h3 className="text-sm uppercase tracking-[0.2em] text-purple-300/80 font-medium">
        {title}
      </h3>
      <motion.div
        variants={scaleInX}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent"
      />
    </div>
    <div className="flex flex-row justify-center flex-wrap gap-6 items-center px-4 pt-3 pb-2 border-b border-purple-500/10">
      {skills.map((skill, i) => (
        <SkillDataProvider
          key={skill.skill_name}
          src={skill.image}
          name={skill.skill_name}
          width={skill.width}
          height={skill.height}
          index={i}
        />
      ))}
    </div>
  </div>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden overflow-x-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-col gap-10 mt-6 w-full max-w-5xl">
        <SkillGroup title="Core ML & Data Science" Icon={FaBrain} skills={[...SKILL_DATA]} />
        <SkillGroup title="AI Platforms & LLMs" Icon={FaRobot} skills={[...AI_TOOLS]} />
        <SkillGroup title="AI Frameworks & Orchestration" Icon={FaCogs} skills={[...AI_FRAMEWORKS]} />
        <SkillGroup title="DevOps & Infrastructure" Icon={FaServer} skills={[...DEVOPS_SKILL]} />
        <SkillGroup title="Cloud & Services" Icon={FaCloud} skills={[...OTHER_SKILL]} />
      </div>

      <SkillsVideo />
    </section>
  );
};
