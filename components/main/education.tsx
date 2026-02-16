"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";

import { EDUCATION } from "@/constants";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-6"
      aria-labelledby="education-title"
    >
      <div className="text-center max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          Academic Background
        </p>
        <h2
          id="education-title"
          className="text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"
        >
          Education
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl"
      >
        {EDUCATION.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={item}
            className="group relative rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-6 shadow-[0_0_25px_rgba(88,43,214,0.12)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(88,43,214,0.25)]"
          >
            {edu.current && (
              <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-purple-400/40 text-purple-200 animate-pulse">
                Currently Enrolled
              </span>
            )}

            <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-200 mb-4">
              <FaGraduationCap className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold text-white mb-1">
              {edu.shortDegree}
            </h3>
            <p className="text-sm text-gray-400 mb-1">{edu.degree}</p>
            <p className="text-sm text-purple-300 mb-2">{edu.institution}</p>
            <p className="text-xs text-gray-500 font-mono mb-3">
              {edu.period}
            </p>

            {"gpa" in edu && edu.gpa && (
              <p className="text-sm text-cyan-400 font-medium">{edu.gpa}</p>
            )}

            {"highlight" in edu && edu.highlight && (
              <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <FaTrophy className="text-yellow-400 h-4 w-4 flex-shrink-0" />
                <span className="text-sm text-yellow-300">{edu.highlight}</span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
