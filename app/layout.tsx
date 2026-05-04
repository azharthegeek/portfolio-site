import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Cedarville_Cursive } from "next/font/google";
import type { PropsWithChildren } from "react";

import dynamic from "next/dynamic";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { ScrollToTop } from "@/components/sub/scroll-to-top";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});
const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
});

const StarsCanvas = dynamic(() => import("@/components/main/star-background"), {
  ssr: false,
  loading: () => <div className="w-full h-full fixed inset-0 -z-10" />,
});

const LoadingScreen = dynamic(
  () => import("@/components/main/loading-screen").then((m) => ({ default: m.LoadingScreen })),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/sub/cursor-glow").then((m) => ({ default: m.CursorGlow })),
  { ssr: false }
);

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className,
          jetbrainsMono.variable,
          cedarville.variable
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:py-2 focus:px-4 focus:bg-purple-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <LoadingScreen />
        <CursorGlow />
        <StarsCanvas />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
