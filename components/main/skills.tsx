import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import dynamic from "next/dynamic";

import {
  AI_FRAMEWORKS,
  AI_TOOLS,
  DEVOPS_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

type SkillGroupProps = {
  title: string;
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
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  )),
  { ssr: false }
);

const SkillGroup = ({ title, skills }: SkillGroupProps) => (
  <div className="w-full">
    <h3 className="text-sm uppercase tracking-[0.2em] text-purple-300/70 mb-4 text-center font-medium">
      {title}
    </h3>
    <div className="flex flex-row justify-center flex-wrap gap-6 items-center px-4">
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
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-col gap-10 mt-6 w-full max-w-5xl">
        <SkillGroup title="Core ML & Data Science" skills={[...SKILL_DATA]} />
        <SkillGroup title="AI Platforms & LLMs" skills={[...AI_TOOLS]} />
        <SkillGroup title="AI Frameworks & Orchestration" skills={[...AI_FRAMEWORKS]} />
        <SkillGroup title="DevOps & Infrastructure" skills={[...DEVOPS_SKILL]} />
        <SkillGroup title="Cloud & Services" skills={[...OTHER_SKILL]} />
      </div>

      <SkillsVideo />
    </section>
  );
};
