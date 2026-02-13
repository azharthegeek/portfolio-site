import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string[];
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="flex-1 basis-0 min-w-0 relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#0f0b1f]/60 backdrop-blur transition-transform duration-300 hover:scale-[1.02] hover:border-purple-400/60"
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          loading="lazy"
        />
      </div>

      <div className="relative p-4 space-y-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="mt-2 text-gray-300 space-y-2">
          {description.map((text, index) => (
            text.startsWith("-") ? (
              <p key={index} className="pl-4 -mt-1">
                {text.replace("-", "•")}
              </p>
            ) : (
              <p
                key={index}
                className={text.endsWith(":") ? "font-semibold mt-3" : ""}
              >
                {text}
              </p>
            )
          ))}
        </div>
      </div>
    </Link>
  );
};