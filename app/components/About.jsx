"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full h-[100vh] bg-[#fed9b7] py-40 md:py-48 px-10 md:px-38 flex flex-col relative">
      <div>
        <h1>
          <span className="relative px-4 font-playwrite font-semibold text-2xl md:text-5xl">
            About Me
            <svg
              viewBox="0 0 296 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-1 bottom-0 translate-y-1 px-4"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 2 }}
                transition={{
                  duration: 1.35,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 8.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#fe6d73"
                strokeWidth="2.4"
              />
            </svg>
          </span>
        </h1>
        <p className="font-martian md:text-xl md:w-[55%] mt-7 ml-4 md:ml-20 tracking-tight font-light leading-7 md:leading-10">
          <span></span>I'm a developer, builder, and constant learner who’s been
          obsessed with the web since I first typed{" "}
          <span className="font-bold ">console.log('Hello World')</span>. I
          specialize in full-stack JavaScript — primarily the MERN stack — and
          I’m passionate about crafting products that are fast, scalable, and
          intuitive to use.
        </p>
      </div>
      <div className="px-10 relative">
        <Link
          href="/about"
          className="absolute top-20 left-5 font-light font-playwrite text-lg md:text-2xl flex gap-3 items-center justify-center cursor-pointer py-2 px-3 backdrop-blur-none hover:backdrop-blur-md transition duration-300 rounded-lg"
        >
          see more...
        </Link>
      </div>
    </section>
  );
}
