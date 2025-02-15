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
      className="flex-1 basis-0 min-w-0 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative p-4 space-y-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="mt-2 text-gray-300 space-y-2">
          {description.map((text, index) => (
            text.startsWith('-') ? (
              <p key={index} className="pl-4 -mt-1">
                {text.replace('-', '•')}
              </p>
            ) : (
              <p key={index} className={text.endsWith(':') ? 'font-semibold mt-3' : ''}>
                {text}
              </p>
            )
          ))}
        </div>
      </div>
    </Link>
  );
};

export const ProjectsContainer = () => {
  return (
    <div className="h-full w-full px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};