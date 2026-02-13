"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaCogs,
  FaDatabase,
  FaEye,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    title: "AI Model Development",
    description: "Custom ML/DL models, fine-tuning, and evaluation pipelines.",
    Icon: FaBrain,
  },
  {
    title: "Generative AI Solutions",
    description: "RAG pipelines, AI agents, and production-grade chatbots.",
    Icon: FaRobot,
  },
  {
    title: "API Development & Deployment",
    description: "FastAPI services, model serving, and scalable inference APIs.",
    Icon: FaCode,
  },
  {
    title: "AI Workflow Automation",
    description: "Custom tools that boost team productivity by 10x.",
    Icon: FaCogs,
  },
  {
    title: "Computer Vision",
    description: "Detection, classification, and video analytics for real-world use.",
    Icon: FaEye,
  },
  {
    title: "Data & Vector Systems",
    description: "Vector databases, data pipelines, and retrieval optimization.",
    Icon: FaDatabase,
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AIServices = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-6"
      aria-labelledby="ai-services-title"
    >
      <div className="text-center max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          What I Do
        </p>
        <h2
          id="ai-services-title"
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"
        >
          AI Services & Expertise
        </h2>
        <p className="text-gray-300 mt-4">
          I build AI systems that ship to production, turn data into decisions,
          and unlock measurable efficiency gains.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 w-full max-w-6xl"
      >
        {services.map(({ title, description, Icon }) => (
          <motion.div
            key={title}
            variants={item}
            className="group rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-6 shadow-[0_0_25px_rgba(88,43,214,0.15)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-200">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
            <p className="text-gray-300 mt-2">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
