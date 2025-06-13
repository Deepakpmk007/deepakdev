import React from "react";
import Bankist from "@/public/Bankist.png";
import Bankistweb from "@/public/Bankistweb.png";
import fastpizza from "@/public/fastpizza.png";
import map from "@/public/map.png";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";

const data = [
  {
    title: "Mapty",
    tool: ["Html", "css", "JavaScript"],
    url: map,
    content:
      "This is map based website. I use leaflet api to dispaly the map in the website. To mark the runnig km and distance and mark in the map to identify the place. ",
    link: "https://mapty-app-workout.netlify.app/",
    github: "https://github.com/Deepakpmk007/Map-App-using-API.git",
  },
  {
    title: "Bankist",
    tool: ["Html", "css", "JavaScript"],
    url: Bankistweb,
    content:
      "This is the bank website. user interface to show the information and service provide by the bank.so the client know the information. ",
    link: "https://bankist-frontent.netlify.app/",
    github: "https://github.com/Deepakpmk007/Bankist.git",
  },
  {
    title: "Bankist money",
    tool: ["Html", "css", "JavaScript"],
    url: Bankist,
    content:
      "This the full function of the bankist website. this website have userid and password to enter. After tranfer the money form one user to another user and request for the loan. (userId:dk, password:1111)",
    link: "https://bankist-function.netlify.app/",
    github: "https://github.com/Deepakpmk007/Bankist-money.git",
  },
  {
    title: "Fast pizza",
    tool: ["React", "React Router", "Redux", "Tailwind CSS"],
    url: fastpizza,
    content:
      "This is the pizza ordering wesite. using Tailwindcss, react-rouder and Redux state management. the user select the pizza and add to the cart. After place the order.",
    link: "https://fast-pizza-deepak.netlify.app/",
    github: "https://github.com/Deepakpmk007/Fast-React-Pizza.git",
  },
];

export default function ProjectPage() {
  return (
    <>
      {data.map((el, idx) => (
        <div
          key={idx}
          className="flex gap-5 hover:scale-[1.01] transition-all h-fit"
        >
          <div className="hidden md:flex">
            <Image src={el.url} width={350} alt={el.title} />
          </div>
          <div className="w-[800px] flex flex-col gap-2">
            <h3 className="text-2xl flex gap-5 items-center font-bold text-teal-500">
              {el.title}{" "}
              <div className="flex gap-3 text-black">
                <Link href={el.link} target="blank">
                  <FiExternalLink />
                </Link>
                <Link href={el.github} target="blank">
                  <LuGithub />
                </Link>
              </div>
            </h3>
            <h2 className="font-light text-lg">{el.content}</h2>
            <ul className="flex gap-2 flex-wrap">
              {el.tool.map((moveItem, i) => (
                <li key={i} className="bg-teal-100 h-fit px-5 rounded-full">
                  {moveItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
