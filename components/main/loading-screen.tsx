"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPING_TEXT = "Initializing AI Portfolio...";

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(
    // lazy init: client-only (ssr: false), so sessionStorage is always available
    () => !sessionStorage.getItem("portfolio_loaded")
  );
  const [typed, setTyped] = useState("");
  const [barDone, setBarDone] = useState(false);

  useEffect(() => {
    if (!visible) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      i++;
      setTyped(TYPING_TEXT.slice(0, i));
      if (i >= TYPING_TEXT.length) clearInterval(typingInterval);
    }, 55);

    const barTimer = setTimeout(() => setBarDone(true), 2100);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("portfolio_loaded", "1");
    }, 2700);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(barTimer);
      clearTimeout(hideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#030014]"
          aria-hidden="true"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 mb-6 select-none"
          >
            MA
          </motion.div>

          {/* Terminal text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-sm text-purple-300/80 mb-6 h-5"
          >
            {typed}
            <span className="typing-cursor inline-block w-[2px] h-4 bg-purple-400 ml-0.5 align-middle" />
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: barDone ? "100%" : "90%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
