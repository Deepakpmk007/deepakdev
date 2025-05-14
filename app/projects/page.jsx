"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import Bankist from "@/public/Bankist.png";
import Bankistweb from "@/public/Bankistweb.png";
import fastpizza from "@/public/fastpizza.png";
import map from "@/public/map.png";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const data = [
  {
    title: "Mapty",
    tool: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    url: map,
    content:
      "This is map based website. I use leaflet api to dispaly the map in the website. To mark the runnig km and distance and mark in the map to identify the place. ",
    link: "https://mapty-app-workout.netlify.app/",
    github: "https://github.com/Deepakpmk007/Map-App-using-API.git",
  },
  {
    title: "Bankist",
    tool: [<SiHtml5 />, <SiSass />, <SiJavascript />],
    url: Bankistweb,
    content:
      "This is the bank website. user interface to show the information and service provide by the bank.so the client know the information. ",
    link: "https://bankist-frontent.netlify.app/",
    github: "https://github.com/Deepakpmk007/Bankist.git",
  },
  {
    title: "Bankist money",
    tool: [<SiHtml5 />, <SiSass />, <SiJavascript />],
    url: Bankist,
    content:
      "This the full function of the bankist website. this website have userid and password to enter. After tranfer the money form one user to another user and request for the loan.",
    link: "https://bankist-function.netlify.app/",
    github: "https://github.com/Deepakpmk007/Bankist-money.git",
  },
  {
    title: "Fast pizza",
    tool: [<SiReact />, <SiReactrouter />, <SiRedux />, <SiTailwindcss />],
    url: fastpizza,
    content:
      "This is the pizza ordering wesite. using Tailwindcss, react-rouder and Redux state management. the user select the pizza and add to the cart. After place the order.",
    link: "https://fast-pizza-deepak.netlify.app/",
    github: "https://github.com/Deepakpmk007/Fast-React-Pizza.git",
  },
];

export default function page() {
  const router = useRouter();
  const container = useRef();

  return (
    <div className="p-5" ref={container}>
      <h1 className="text-2xl md:text-6xl font-bold font-mono">My Works</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 auto-rows-auto gap-3 md:gap-10 mt-10">
        {data.map((item, index) => {
          return (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={item.url.src}
                alt={item.title}
                className="w-full h-56 md:h-[400px] object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <div className="flex gap-2 mb-2">
                {item.tool.map((icon, index) => (
                  <span key={index} className="text-2xl">
                    {icon}
                  </span>
                ))}
              </div>
              <p className="mb-4">{item.content}</p>
              <div className="flex gap-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-end text">
        <button
          className="bg-amber-300 py-3 px-10 md:text-2xl font-serif mr-10 cursor-pointer"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
