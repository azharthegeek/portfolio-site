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

import { SectionHeader } from "@/components/sub/section-header";

const services = [
  {
    title: "AI Model Development",
    description:
      "Custom ML/DL models for classification, detection, and prediction - from training to evaluation pipelines.",
    Icon: FaBrain,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Generative AI Solutions",
    description:
      "RAG pipelines, AI agents, and production-grade chatbots powered by LLMs like GPT, Claude, and DeepSeek.",
    Icon: FaRobot,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "API Development & Deployment",
    description:
      "FastAPI services, model serving with TensorFlow Serving, and scalable inference APIs on cloud.",
    Icon: FaCode,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Custom automation tools using LangChain, LangGraph, and FlowiseAI that boost team productivity by 10x.",
    Icon: FaCogs,
    gradient: "from-green-500/20 to-cyan-500/20",
  },
  {
    title: "Computer Vision",
    description:
      "Medical imaging, satellite imagery analysis, and real-time detection systems for production environments.",
    Icon: FaEye,
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Data & Vector Systems",
    description:
      "Vector databases (Pinecone, ChromaDB, Milvus), ETL pipelines, and semantic retrieval optimization.",
    Icon: FaDatabase,
    gradient: "from-pink-500/20 to-purple-500/20",
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const AIServices = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-6"
      aria-labelledby="ai-services-title"
    >
      <SectionHeader
        eyebrow="What I Do"
        title="AI Services & Expertise"
        titleId="ai-services-title"
        description="End-to-end AI systems - from research to production deployment - that turn data into decisions and unlock measurable efficiency gains."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 w-full max-w-6xl"
      >
        {services.map(({ title, description, Icon, gradient }) => (
          <motion.div
            key={title}
            variants={item}
            className="group relative rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-6 shadow-[0_0_25px_rgba(88,43,214,0.12)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(112,66,248,0.2),inset_0_0_30px_rgba(112,66,248,0.05)] overflow-hidden"
          >
            {/* Pulsing gradient overlay */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} pointer-events-none`}
            />

            {/* Status badge */}
            <div className="relative flex items-center justify-between mb-1">
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} text-purple-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-green-400/80">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Active
              </div>
            </div>

            <h3 className="relative text-xl font-semibold text-white mt-4">{title}</h3>
            <p className="relative text-gray-400 mt-2 text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
