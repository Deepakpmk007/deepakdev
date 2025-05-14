"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
gsap.registerPlugin(SplitText, useGSAP);

export default function page() {
  const router = useRouter();
  const container = React.useRef();
  useGSAP(
    () => {
      const title = document.querySelectorAll(".title");
      const lines = document.querySelectorAll(".line");
      const text = document.querySelectorAll(".text");
      const tl = gsap.timeline();
      tl.from(lines, {
        width: 0,
        ease: "power1.inOut",
        duration: 0.6,
        stagger: 0.1,
      });
      tl.from(
        title,
        {
          y: -200,
          opacity: 0,
          stagger: 0.3,
          duration: 0.3,
          ease: "power4.inOut",
        },
        "+=0.2"
      );

      gsap.set(text, { opacity: 1 });
      let split;
      SplitText.create(text, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          split = gsap.from(
            self.lines,
            {
              duration: 0.6,
              yPercent: 100,
              opacity: 0,
              stagger: 0.1,
              ease: "expo.out",
            },
            "=+0.1"
          );
          return split;
        },
      });
    },
    { scope: container }
  );
  return (
    <div className="w-screen" ref={container}>
      <div className="p-4">
        <h1 className="md:text-7xl text-2xl title">About me</h1>
      </div>
      <div className="w-full bg-black h-[2px] line"></div>

      <div className="md:px-7 px-2 md:text-2xl text-lg tracking-wider pt-10 flex flex-col gap-5 font-mono">
        <p className="text">
          I'm a developer, builder, and constant learner who’s been obsessed
          with the web since I first typed{" "}
          <span className="font-semibold">console.log('Hello World').</span> I
          specialize in{" "}
          <span className="font-semibold">
            full-stack JavaScript — primarily the MERN stack
          </span>{" "}
          — and I’m passionate about crafting products that are fast, scalable,
          and intuitive to use.
        </p>
        <p className="text">
          I didn’t grow up in Silicon Valley — more like surrounded by code
          tutorials, side projects, and dreams of building something meaningful.
          I’ve worked on everything from developer-focused SaaS platforms, to
          AI-powered tools, to e-commerce solutions that don't just look good,
          but work beautifully under the hood.
        </p>
        <p className="text">
          While I love shipping features and writing clean APIs, what drives me
          is the challenge of solving real problems with elegant solutions. My
          ideal work sits at the intersection of tech, creativity, and impact.
        </p>
        <p className="text">
          These days, I’m focused on building modern web applications using
          <span className="font-semibold"> Next.js, Node.js, MongoDB, </span>and
          whatever else the problem calls for. I thrive in fast-paced
          environments and love collaborating with teams that care about quality
          and user experience.
        </p>
      </div>
      <div className="w-full flex items-center justify-end text">
        <button
          className="bg-amber-300 py-3 px-10 rounded-xl md:text-2xl font-serif mr-10 cursor-pointer"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
