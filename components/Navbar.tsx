import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className=" fixed top-0 z-10 w-full py-4 px-6 flex justify-around backdrop-blur-sm shadow-lg shadow-[#023434]	">
      <Link href={"#home"} className='font-["Alex_Brush"] text-[24px]'>Jatin Sharma</Link>
      <ul className="flex justify-center gap-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
