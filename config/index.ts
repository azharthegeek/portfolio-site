import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Muhammad Azhar | AI Engineer & ML Researcher",
  description:
    "AI Engineer specializing in deep learning, generative AI, RAG pipelines, and production ML systems. MS(AI) at FAST NUCES. Building intelligent systems that drive 10x efficiency.",
  keywords: [
    "ai engineer",
    "machine learning",
    "deep learning",
    "generative ai",
    "llm",
    "rag pipeline",
    "ai api",
    "computer vision",
    "nlp",
    "tensorflow",
    "pytorch",
    "langchain",
    "fastapi",
    "muhammad azhar",
    "azharthegeek",
    "fast nuces",
    "ai researcher",
    "mlops",
    "production ml",
    "ai solutions",
    "nextjs",
    "portfolio",
    "framer-motion",
    "tailwindcss",
  ] as Array<string>,
  authors: {
    name: "Muhammad Azhar",
    url: "https://azharops.tech",
  },
  openGraph: {
    title: "Muhammad Azhar | AI Engineer & ML Researcher",
    description:
      "AI Engineer specializing in deep learning, generative AI, and production ML systems. Building intelligent systems that drive 10x efficiency.",
    type: "website",
    url: "https://azharops.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Azhar | AI Engineer & ML Researcher",
    description:
      "AI Engineer specializing in deep learning, generative AI, and production ML systems. Building intelligent systems that drive 10x efficiency.",
    creator: "@azharthegeek",
  },
} as const;
