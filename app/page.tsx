import { AIServices } from "@/components/main/ai-services";
import { CertificatesContainer } from "@/components/main/CertificateCard";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Publications } from "@/components/main/publications";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />

        {/* Gradient divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <Skills />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <AIServices />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <Experience />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <Education />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <CertificatesContainer />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <Projects />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <Publications />
      </div>
    </main>
  );
}
