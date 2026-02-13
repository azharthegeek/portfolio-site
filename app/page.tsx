import { AIServices } from "@/components/main/ai-services";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { CertificatesContainer } from "@/components/main/CertificateCard";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <AIServices />
        <CertificatesContainer />
        <Projects />
      </div>
    </main>
  );
}
