"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);

  const springX = useSpring(cursorX, { stiffness: 150, damping: 15 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    // Only activate on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed pointer-events-none hidden md:block"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(112,66,248,0.08) 0%, transparent 70%)",
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
};
