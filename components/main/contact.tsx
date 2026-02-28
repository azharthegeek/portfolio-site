"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgvkn"; // Replace with your Formspree form ID

type FormStatus = "idle" | "submitting" | "success" | "error";

export const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json();
        setErrorMessage(
          data?.errors?.[0]?.message || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6"
      aria-labelledby="contact-title"
    >
      <div className="text-center max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          Get In Touch
        </p>
        <h2
          id="contact-title"
          className="text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"
        >
          Contact Me
        </h2>
        <p className="text-gray-300 mt-4">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Reach out and let&apos;s build something amazing together.
        </p>
      </div>

      <div className="mt-12 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInFromLeft(0.3)}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-6 md:p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white mb-6">
              Let&apos;s Connect
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:azharthegeek@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                  <FaEnvelope className="h-4 w-4 text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm">azharthegeek@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/azharthegeek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                  <FaLinkedin className="h-4 w-4 text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-sm">in/azharthegeek</p>
                </div>
              </a>

              <a
                href="https://github.com/azharthegeek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                  <FaGithub className="h-4 w-4 text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-sm">azharthegeek</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInFromRight(0.3)}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl border border-[#2A0E61] bg-[#0f0b1f]/70 p-6 md:p-8 backdrop-blur">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FaCheckCircle className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="py-2 px-6 button-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1333]/80 border border-[#2A0E61] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1333]/80 border border-[#2A0E61] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1333]/80 border border-[#2A0E61] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1333]/80 border border-[#2A0E61] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <FaExclamationCircle className="h-4 w-4 flex-shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3 px-6 button-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
