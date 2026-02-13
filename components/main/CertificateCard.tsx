import Image from "next/image";
import Link from "next/link";

import { CERTIFICATIONS } from "@/constants";

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
      className="flex-1 basis-0 min-w-[240px] max-w-[360px] relative overflow-hidden rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 shadow-[0_0_25px_rgba(88,43,214,0.15)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: color_code }}
    >
      <div className="relative p-6">
        <div className="relative h-16 w-16 mb-4 mx-auto">
          <Image
            src={`/certificates/${logo_path}`}
            alt={alt_name}
            fill
            className="object-contain"
            sizes="64px"
            loading="lazy"
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
    <section
      id="certifications"
      className="h-full w-full px-6 py-20 flex flex-col items-center"
    >
      <div className="text-center max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          Certifications
        </p>
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-4">
          Proof of Expertise
        </h2>
        <p className="text-gray-300 mt-4">
          Verified credentials that back my AI engineering work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {CERTIFICATIONS.map((cert) => (
          <CertificateCard
            key={cert.title}
            title={cert.title}
            subtitle={cert.subtitle}
            logo_path={cert.logo_path}
            certificate_link={cert.certificate_link}
            alt_name={cert.alt_name}
            color_code={cert.color_code}
          />
        ))}
      </div>
    </section>
  );
};
