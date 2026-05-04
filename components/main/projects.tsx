"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/sub/project-card";
import { SectionHeader } from "@/components/sub/section-header";
import { PROJECTS } from "@/constants";
import { slideInFromLeft } from "@/lib/motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-6"
    >
      <SectionHeader
        eyebrow="Portfolio"
        title="AI Projects"
        description="Production-grade AI systems deployed across agriculture, healthcare, and NLP domains."
      />

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={[...project.description]}
            link={project.link}
            technologies={[...project.technologies]}
            category={"category" in project ? (project as { category: string }).category : undefined}
          />
        ))}
      </div>

      <motion.a
        variants={slideInFromLeft(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        href="https://github.com/azharthegeek"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2.5 px-8 mt-12 button-primary text-center text-white cursor-pointer rounded-lg font-medium transition-all duration-300 hover:scale-105"
      >
        See All Projects
      </motion.a>
    </section>
  );
};