import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="relative">
        <h1 className="text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl -z-10" />
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-400 mt-4 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          href="/"
          className="py-2.5 px-6 button-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
        >
          Go Home
        </Link>
        <Link
          href="#contact"
          className="py-2.5 px-6 border border-purple-500/40 text-purple-200 rounded-lg font-medium transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
