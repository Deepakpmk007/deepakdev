"use client";
import { motion } from "motion/react";
import {
  SiCss3,
  SiCssmodules,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiAppwrite,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import React from "react";
import { useRouter } from "next/navigation";

const icons = [
  { icon: <SiHtml5 />, name: "HTML," },
  { icon: <SiCss3 />, name: "css," },
  { icon: <SiJavascript />, name: "JavaScript," },
  { icon: <SiGithub />, name: "Github," },
  { icon: <SiSass />, name: "sass," },
  { icon: <SiReact />, name: "React," },
  { icon: <TbBrandNextjs />, name: "Next JS," },
  { icon: <SiTailwindcss />, name: "Tailwindcss," },
  { icon: <SiReactrouter />, name: "React Router," },
  { icon: <SiRedux />, name: "Redux," },
  { icon: <SiCssmodules />, name: "css modules," },
  { icon: <SiAppwrite />, name: "Appwrite," },
  { icon: <SiFirebase />, name: "Firebase," },
  { icon: <SiNodedotjs />, name: "Node Js," },
  { icon: <SiExpress />, name: "Express Js," },
  { icon: <SiMongodb />, name: "Mongo DB," },
  { icon: <SiMongoose />, name: "Mongoose," },
];

const iconsAmination = (i) => ({
  initial: {
    opacity: 0,
    y: -5,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
    },
  },
});

export default function page() {
  const router = useRouter();
  return (
    <div className="py-30 px-5 md:px-10 bg-[#fed9b7]">
      <h1 className="text-2xl md:text-5xl font-playwrite">
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
      <div>
        <p className="font-martian text-sm md:text-xl md:w-[85%] mt-7 ml-4 md:ml-20 tracking-tight font-light leading-7 md:leading-10">
          I didn’t grow up in Silicon Valley — more like surrounded by code
          tutorials, side projects, and dreams of building something meaningful.
          I’ve worked on everything from developer-focused SaaS platforms, to
          AI-powered tools, to e-commerce solutions that don't just look good,
          but work beautifully under the hood.
        </p>
        <p className="font-martian text-sm md:text-xl md:w-[85%] mt-7 ml-4 md:ml-20 tracking-tight font-light leading-7 md:leading-10">
          While I love shipping features and writing clean
          <span className="font-semibold"> APIs</span>, what drives me is the
          challenge of solving real problems with elegant solutions. My ideal
          work sits at the intersection of
          <span className="font-semibold"> tech, creativity, and impact</span>.
        </p>
        <p className="font-martian text-sm md:text-xl md:w-[85%] mt-7 ml-4 md:ml-20 tracking-tight font-light leading-7 md:leading-10">
          These days, I’m focused on building modern web applications using
          <span className="font-semibold"> Next.js, Node.js, MongoDB,</span> and
          whatever else the problem calls for. I thrive in fast-paced
          environments and love collaborating with teams that care about quality
          and user experience.
        </p>
      </div>

      <div className="mt-30 w-[90vw]">
        <h1 className="text-2xl md:text-5xl font-playwrite">Skill</h1>
        <div className="flex flex-row flex-wrap gap-4 mt-5">
          <ul className="flex flex-wrap gap-4 ">
            {icons.map((item, i) => (
              <motion.li
                key={i}
                variants={iconsAmination(i)}
                initial="initial"
                whileInView="animation"
                viewport={{ once: true }}
                custom={i}
                className="flex gap-3 py-2 px-4 rounded-lg items-center justify-center transition duration-300 cursor-pointer text-sm md:text-3xl font-martian font-light"
              >
                {item.icon} {item.name}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="bg-[#fe6d73] py-2 px-6 rounded text-lg mt-10 font-playwrite cursor-pointer"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
}
