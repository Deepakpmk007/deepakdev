import React from "react";

export default function Nav() {
  return (
    <div className="w-full h-20 justify-between items-center px-4 bg-gray-800 text-white hidden md:flex">
      <div className="text-2xl ">Logo</div>
      <ul className="flex space-x-4 md:text-xl gap-5">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skill</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
