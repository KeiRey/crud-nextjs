"use client";

import useHasMounted from "@/hooks/useHasMounted";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { RiMoonFoggyLine, RiSunFoggyLine } from "react-icons/ri";

export default function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isRotated, setIsRotated] = useState<boolean>(false);

  const mounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    setIsRotated(!isRotated);
  };

  if (!mounted) return null;

  return (
    <motion.button
      id="dark-mode-switcher"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className="rounded-xl bg-white p-2 lg:w-full flex justify-center shadow-md dark:bg-neutral-800"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
    >
      {resolvedTheme === "light" ? (
        <motion.div
          animate={{ rotate: isRotated ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <RiSunFoggyLine  />
        </motion.div>
      ) : (
        <motion.div
          animate={{ rotate: isRotated ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <RiMoonFoggyLine />
        </motion.div>
      )}
    </motion.button>
  );
}
