import { HeroContent } from "@/components/sub/hero-content";
import dynamic from "next/dynamic";

const HeroVideo = dynamic(
  () => Promise.resolve(() => (
    <video
      autoPlay
      muted
      loop
      aria-hidden="true"
      className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 opacity-50 md:opacity-100"
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>
  )),
  { ssr: false }
);

export const Hero = () => {
  return (
    <section id="about-me" className="relative flex flex-col h-full w-full">
      <HeroVideo />
      {/* Dark overlay to improve text readability on mobile */}
      <div className="absolute inset-0 bg-[#030014]/60 md:bg-transparent -z-10 pointer-events-none" />
      <HeroContent />
    </section>
  );
};
