"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMedium, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

import { SectionHeader } from "@/components/sub/section-header";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/medium")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section
        id="blog"
        className="flex flex-col items-center justify-center py-20 px-6"
      >
        <SectionHeader eyebrow="Blog" title="Latest Articles" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-0 overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-[#1a1333]" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-[#1a1333] rounded w-3/4" />
                <div className="h-4 bg-[#1a1333] rounded w-full" />
                <div className="h-3 bg-[#1a1333] rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null; // Don't render if no posts
  }

  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center py-20 px-6"
      aria-labelledby="blog-title"
    >
      <SectionHeader
        eyebrow="Blog"
        title="Latest Articles"
        titleId="blog-title"
        description="Thoughts on AI, machine learning, and software engineering from my Medium blog."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {posts.map((post) => (
          <motion.div key={post.link} variants={item}>
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 overflow-hidden backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(88,43,214,0.2)]"
            >
              {post.thumbnail ? (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized // Medium images are external
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1f] via-transparent to-transparent opacity-60" />
                </div>
              ) : (
                <div className="relative w-full h-48 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center">
                  <FaMedium className="h-12 w-12 text-purple-400/40" />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <FaCalendarAlt className="h-3 w-3" />
                  <time dateTime={post.pubDate}>
                    {formatDate(post.pubDate)}
                  </time>
                </div>

                <h3 className="text-base font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-200 transition-colors">
                  {post.title}
                </h3>

                {post.description && (
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                    {post.description}
                  </p>
                )}

                {post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-1 mt-4 text-sm text-purple-300 group-hover:text-purple-200 transition-colors">
                  Read on Medium
                  <FaExternalLinkAlt className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="https://azharthegeek.medium.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 py-2.5 px-6 border border-purple-500/40 text-purple-200 rounded-lg font-medium transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105 inline-flex items-center gap-2"
      >
        <FaMedium className="h-4 w-4" />
        View All Articles on Medium
      </Link>
    </section>
  );
};
