"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { TfiAngleDoubleDown } from "react-icons/tfi";

import React, { useRef } from "react";
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  console.log(scrollYProgress.get());

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div
      className="w-full h-[100vh] flex flex-col px-10 md:px-38  justify-center relative"
      ref={ref}
      style={{ scale, opacity }}
    >
      <h1 className="text-5xl leading-13 md:leading-15 md:text-7xl font-righteous">
        Hi, my <br />
        ​name is
        <span className="relative px-8  ">
          Deepak.
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
      <h1 className="text-lg mt-3 md:text-2xl font-light tracking-wider">
        I'm a Full-Stack developer
      </h1>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-fit absolute bottom-10 text-center left-[30%] md:left-[42.5%] rounded-b-lg px-5 py-2 text-sm md:text-lg font-martian font-extralight text-gray-400 flex flex-col items-center gap-3"
      >
        scroll down{" "}
        <span>
          <TfiAngleDoubleDown />
        </span>
      </motion.div>
    </div>
  );
}
