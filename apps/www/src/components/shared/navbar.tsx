"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "./logo";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-8 inset-x-0 bg-[#fff]/10 rounded-full h-14 z-50 w-[90%] 2xl:w-[1400px] mx-auto px-6 flex items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
    >
      <Logo />
    </motion.nav>
  );
};

export default Navbar;