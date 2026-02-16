"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

import { EXPERIENCE } from "@/constants";

const ROLE_ICONS: Record<string, React.ElementType> = {
  "AI Engineer": FaRocket,
  "Junior Lecturer": FaChalkboardTeacher,
  "Founder & AI Lead": FaBriefcase,
  "Data Analyst": FaChartLine,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-6"
      aria-labelledby="experience-title"
    >
      <div className="text-center max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          Career Journey
        </p>
        <h2
          id="experience-title"
          className="text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"
        >
          Professional Experience
        </h2>
        <p className="text-gray-300 mt-4">
          From data analysis to AI engineering — a path forged through building,
          deploying, and teaching intelligent systems.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mt-16 w-full max-w-4xl"
      >
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 via-cyan-500/40 to-transparent md:-translate-x-px" />

        {EXPERIENCE.map((exp, index) => {
          const Icon = ROLE_ICONS[exp.role] || FaBriefcase;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={item}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purple-400 bg-[#030014] z-10 mt-6 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="group relative rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-6 shadow-[0_0_25px_rgba(88,43,214,0.12)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(88,43,214,0.25)]">
                  {/* Current badge */}
                  {exp.current && (
                    <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-purple-400/40 text-purple-200">
                      Current
                    </span>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-purple-300">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-3 font-mono">
                    {exp.period}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
