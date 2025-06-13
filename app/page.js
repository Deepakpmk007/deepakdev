import React from "react";
import Nav from "./components/Nav";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/ContactPage";

export default function page() {
  return (
    <>
      {/* <Nav /> */}
      <section className="w-full h-screen flex flex-col justify-center gap-5 md:pl-40 px-10 ext-slate-900">
        <h4 className="md:text-2xl text-inherit font-light">Hi, My name is</h4>
        <h2 className="md:text-7xl text-4xl font-bold text-teal-500">Deepak</h2>
        <h2 className="md:text-7xl text-4xl font-bold">
          I build things for the web.
        </h2>
        <p className="md:text-4xl font-semibold md:w-[700px] text-slate-500">
          A passionate{" "}
          <strong className="font-extrabold text-teal-500">
            {" "}
            Full Stack Developer
          </strong>{" "}
          who loves building fast, scalable, and user-friendly web applications.
        </p>
      </section>
      <section className="w-full h-fit  text-slate-100 flex flex-col  gap-5 md:pl-40 px-10 py-20">
        <div className="md:text-2xl text-xl font-bold flex gap-2 items-center text-slate-900">
          <span className="md:text-xl text-lg ">01.</span>About Me{" "}
          <span className="md:w-[500px] h-[1px] bg-amber-50"></span>
        </div>
        <div className="flex flex-col gap-7 md:w-[70%] md:text-3xl text-xl tracking-wider text-slate-500">
          <p>
            Hello! I'm Deepak — a full stack developer who loves bringing ideas
            to life on the web. My journey started in 2021 when I began
            exploring how websites work. Tinkering with frontend templates and
            building small Node.js apps led me deep into the world of modern web
            development.
          </p>
          <p>
            Since then, I've built everything from small landing pages to
            full-stack platforms, and I've had the chance to work with startups,
            solo clients, and collaborative developer teams. My focus today is
            building clean, scalable, and accessible web applications using the{" "}
            <strong className="text-teal-500">Full stack</strong> .
          </p>
          <p>
            I'm passionate about writing clean code, learning new tech, and
            sharing what I build. Most recently, I’ve been working on a SaaS
            platform that helps developers discover curated resources all in one
            place.
          </p>
          <p>
            When I’m not coding, I enjoy exploring new frameworks, contributing
            to personal projects, and staying up to date with the latest in full
            stack development.
          </p>
        </div>
      </section>
      <section className="w-full h-fit text-slate-100 flex flex-col gap-5 md:pl-40 px-10 py-20">
        <div className="md:text-2xl text-xl font-bold flex gap-2 items-center text-slate-900">
          <span className="md:text-xl text-lg ">02.</span>Some Things I’ve Built{" "}
          <span className="md:w-[500px] h-[1px] bg-amber-50"></span>
        </div>
        <div className="flex flex-col gap-10 md:w-full md:text-xl tracking-wider text-slate-500">
          <ProjectPage />
        </div>
      </section>
      <section className="w-full h-screen text-slate-100 flex flex-col gap-5 md:pl-40 px-10 py-20">
        <div className="md:text-2xl text-xl font-bold flex gap-2 items-center text-slate-900">
          <span className="md:text-xl text-lg ">03.</span>Contact{" "}
          <span className="md:w-[500px] h-[1px] bg-amber-50"></span>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:w-full md:text-xl tracking-wider text-slate-500 pt-20">
          <Contact />
        </div>
      </section>
    </>
  );
}
