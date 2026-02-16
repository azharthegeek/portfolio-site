import { HeroContent } from "@/components/sub/hero-content";
import dynamic from "next/dynamic";

const HeroVideo = dynamic(
  () => Promise.resolve(() => (
    <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
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
      <HeroContent />
    </section>
  );
};
