import Image from "next/image";
import Link from "next/link";

type CertificateCardProps = {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
};

export const CertificateCard = ({
  title,
  subtitle,
  logo_path,
  certificate_link,
  alt_name,
  color_code,
}: CertificateCardProps) => {
  return (
    <Link
      href={certificate_link}
      target="_blank"
      rel="noreferrer noopener"
      className="flex-1 basis-0 min-w-[250px] max-w-[400px] relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300"
      style={{ backgroundColor: color_code }}
    >
      <div className="relative p-6">
        <div className="relative h-16 w-16 mb-4 mx-auto">
          <Image
            src={`/certificates/${logo_path}`}
            alt={alt_name}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export const CertificatesContainer = () => {
  return (
    <div className="h-full w-full px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certifications.certifications.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            subtitle={cert.subtitle}
            logo_path={cert.logo_path}
            certificate_link={cert.certificate_link}
            alt_name={cert.alt_name}
            color_code={cert.color_code}
          />
        ))}
      </div>
    </div>
  );
};

// You can keep this export if you want to use it elsewhere
export const certifications = {
  certifications: [
    {
      title: "AWS Machine Learning Foundations",
      subtitle: "- Udacity Nanodegree Program Graduate",
      logo_path: "Amazon_Web.png",
      certificate_link: "https://graduation.udacity.com/confirm/XGD4VVRC",
      alt_name: "Amazon Web Services",
      color_code: "#8C151599",
    },
    // ... rest of your certificates array
  ],
};