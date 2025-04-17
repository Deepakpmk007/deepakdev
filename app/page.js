import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contect";
export default function Home() {
  return (
    <div className="flex flex-col w-full h-full relative">
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
