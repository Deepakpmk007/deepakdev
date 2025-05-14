"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function page() {
  const continer = useRef();
  useGSAP(
    () => {
      const title = document.querySelectorAll(".title");
      const lines = document.querySelectorAll(".line");
      const navs = document.querySelectorAll(".nav");
      const intros = document.querySelectorAll(".intro");
      const links = document.querySelectorAll(".link");

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

      tl.from(
        navs,
        {
          x: -50,
          opacity: 0,
          ease: "power3.inOut",
          stagger: 0.4,
          duration: 0.2,
        },
        "+=0.1"
      );

      tl.from(
        intros,
        {
          y: 20,
          opacity: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "+=0.1"
      );

      tl.from(links, {
        y: 20,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power4.inOut",
      });
    },
    { scope: continer }
  );
  return (
    <div
      className="flex flex-col w-screen md:h-[98vh] h-[100svh]"
      ref={continer}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center  px-15 font-semibold py-5">
          <p className="text-3xl md:text-8xl font-heading font-serif title">
            Deepak
          </p>
          <p className="text-3xl md:text-8xl font-serif title">K</p>
        </div>
        <div className="w-full bg-black h-[2px] line"></div>
      </div>
      {/* ////---------------------------------------------------------- */}
      <nav className="flex justify-between md:items-start items-center md:flex-row flex-col px-10 py-2 text-lg font-light font-mono">
        <p className="nav cursor-pointer">Full-Stack Developer</p>
        <p className="nav cursor-pointer">Avalabe for freelance</p>
        <p className="nav cursor-pointer">deepakdev9600@gmail.com</p>
      </nav>

      {/* ////----------------------------------------------------------- */}
      <div className="flex mt-18 flex-col justify-between h-full uppercase">
        <div className="flex w-full flex-col">
          <div className="flex justify-between md:w-full gap-3 items-end pb-2 md:px-15 px-2">
            <Link
              href="/about"
              className="md:pl-5 md:pr-20 md:pb-3 gap-3 px-2 pb-5 w-fit md:w-[300px] md:h-[120px] h-[80px] flex items-end justify-between bg-red-400 rounded-br-[2rem] md:rounded-br-[5rem] rounded cursor-pointer link hover:bg-red-500"
            >
              <span>About</span>
              <span>01</span>
            </Link>
            <h2 className="md:text-5xl text-2xl md:font-bold intro">Indian</h2>
            <Link
              href="/projects"
              className="md:pl-5 md:pr-20 md:pb-3 gap-3 px-2 pb-5 w-fit md:w-[300px] md:h-[120px] h-[80px] flex items-end justify-between bg-green-300 rounded-br-[2rem] md:rounded-br-[5rem] rounded cursor-pointer link hover:bg-green-400"
            >
              <span>Project</span>
              <span>02</span>
            </Link>
          </div>
          <div className="w-full bg-black h-[2px] line"></div>
        </div>
        <div className="flex w-full flex-col md:mt-10">
          <div className="flex justify-between md:w-full gap-3 items-end pb-2 md:px-15 px-2">
            <h2 className="md:text-5xl text-2xl md:font-bold intro">
              Full-stack
            </h2>
            <h2 className="md:text-5xl text-2xl md:font-bold intro">
              Developer
            </h2>
          </div>
          <div className="w-full bg-black h-[2px] line"></div>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex justify-between md:w-full gap-3 items-end pb-2 md:px-15 px-2">
            <h2 className="md:text-5xl text-2xl md:font-bold intro">based</h2>
            <Link
              href="/contact"
              className="md:pl-5 md:pr-20 md:pb-3 gap-3 px-2 pb-5 w-fit md:w-[300px] md:h-[120px] h-[80px] flex items-end justify-between bg-yellow-300 rounded-br-[2rem] md:rounded-br-[5rem] rounded cursor-pointer link hover:bg-yellow-400 "
            >
              <span>contact</span>
              <span>03</span>
            </Link>
            <h2 className="md:text-5xl text-2xl md:font-bold intro">
              tamil nadu
            </h2>
          </div>
          <div className="w-full bg-black h-[2px] line"></div>
        </div>
      </div>
    </div>
  );
}
