"use client";

import React from "react";
import { motion } from "motion/react";
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
import gces from "@/public/gces.png";
import { useRouter } from "next/navigation";

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

export default function Work() {
  const router = useRouter();
  return (
    <div className="w-full h-full py-40 md:py-48 px-10 md:px-38 flex flex-col relative bg-[#669bbc]">
      <h1>
        <span className="relative px-4 font-playwrite font-semibold text-2xl md:text-5xl">
          Work
        </span>
      </h1>
      <div className="mt-10">
        <p className="font-martian md:text-xl md:w-[55%] tracking-tight font-light leading-7 md:leading-10">
          Here are some of the projects I've worked on:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * i,
            }}
            className="bg-white rounded-lg shadow-lg p-5"
          >
            <img
              src={item.url.src}
              alt={item.title}
              className="w-full h-56 object-cover backgr rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <div className="flex gap-2 mb-4">
              {item.tool.map((icon, index) => (
                <span key={index} className="text-gray-500">
                  {icon}
                </span>
              ))}
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500  mr-4"
            >
              Live Demo
            </a>
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              GitHub Repo
            </a>
          </motion.div>
        ))}
      </div>
      <button
        className="bg-[#fe6d73] w-fit py-2 px-6 rounded text-lg mt-10 font-playwrite cursor-pointer"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
}
