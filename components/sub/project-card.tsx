import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string[];
  link: string;
  technologies?: string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="flex-1 basis-0 min-w-0 relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#0f0b1f]/60 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(88,43,214,0.2)] group"
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1f] via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 right-3 p-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaExternalLinkAlt className="h-3 w-3" />
        </div>
      </div>

      <div className="relative p-5 space-y-3">
        <h1 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h1>
        <div className="mt-2 text-gray-300 text-sm space-y-1.5">
          {description.map((text, index) =>
            text.startsWith("-") ? (
              <p key={index} className="pl-4 -mt-0.5 text-gray-400">
                {text.replace("-", "•")}
              </p>
            ) : (
              <p
                key={index}
                className={
                  text.endsWith(":")
                    ? "font-semibold mt-3 text-purple-300 text-xs uppercase tracking-wider"
                    : ""
                }
              >
                {text}
              </p>
            )
          )}
        </div>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};