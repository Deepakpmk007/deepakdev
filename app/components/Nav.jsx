// components/Nav.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: -30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Nav() {
  const [nav, setNav] = useState(false);

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setNav(false);
  };

  return (
    <nav className="bg-transparent flex w-screen h-[8vh] md:h-[12vh] justify-between items-center px-10 font-playwrite text-lg md:text-xl fixed z-10 backdrop-blur-3xl">
      <button className="cursor-pointer" onClick={() => setNav(!nav)}>
        Menu
      </button>
      <button
        onClick={handleScrollToContact}
        className="flex gap-3 items-center justify-center cursor-pointer"
      >
        Contact Me
      </button>

      <AnimatePresence>
        {nav && (
          <motion.div
            key="nav-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-screen p-10 h-screen bg-[#f1faee]"
          >
            <button
              className="font-playwrite text-lg md:text-3xl cursor-pointer"
              onClick={() => setNav(false)}
            >
              Close
            </button>

            <motion.nav
              className="font-righteous mt-11 h-full"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <motion.ul className="text-4xl md:text-[7rem] flex flex-col gap-5">
                <motion.li
                  variants={itemVariants}
                  onClick={() => setNav(false)}
                >
                  <Link href="/">Home</Link>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  onClick={() => setNav(false)}
                >
                  <Link href="/about">About</Link>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  onClick={() => setNav(false)}
                >
                  <Link href="/work">Work</Link>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  onClick={handleScrollToContact}
                >
                  Contact
                </motion.li>
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
