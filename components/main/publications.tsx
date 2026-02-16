"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaMicrophoneAlt } from "react-icons/fa";

import { PUBLICATIONS } from "@/constants";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Publications = () => {
  return (
    <section
      id="publications"
      className="flex flex-col items-center justify-center py-20 px-6"
      aria-labelledby="publications-title"
    >
      <div className="text-center max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          Research Work
        </p>
        <h2
          id="publications-title"
          className="text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"
        >
          Publications & Research
        </h2>
        <p className="text-gray-300 mt-4">
          Peer-reviewed research contributions in AI, deep learning, and
          reinforcement learning.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6 mt-12 w-full max-w-4xl"
      >
        {PUBLICATIONS.map((pub) => (
          <motion.div
            key={pub.title}
            variants={item}
            className="group relative rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-6 md:p-8 shadow-[0_0_25px_rgba(88,43,214,0.12)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(88,43,214,0.25)]"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-200 flex-shrink-0 mt-1">
                {pub.type === "journal" ? (
                  <FaBookOpen className="h-5 w-5" />
                ) : (
                  <FaMicrophoneAlt className="h-5 w-5" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      pub.type === "journal"
                        ? "bg-green-500/10 border-green-500/30 text-green-300"
                        : "bg-blue-500/10 border-blue-500/30 text-blue-300"
                    }`}
                  >
                    {pub.type === "journal"
                      ? "Journal Paper"
                      : "Conference Paper"}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      pub.status === "Published"
                        ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                        : "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                    }`}
                  >
                    {pub.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white leading-snug">
                  {pub.title}
                </h3>

                <p className="text-sm text-purple-300 mt-2">{pub.venue}</p>

                <p className="text-sm text-gray-400 mt-2">
                  <span className="text-gray-500">Authors: </span>
                  {pub.authors}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
