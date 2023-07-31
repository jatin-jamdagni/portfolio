"use client"
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from 'react-icons/rx';


const NavLinkData = [
  { key: 1, id: "Home", link: "#home", },
  { key: 2, id: "About", link: "#about" },
  { key: 3, id: "Projects", link: "#projects" },
  { key: 4, id: "Contact", link: "#contact" }]


const NavLinks = () => {
  return (
    <ul className="hidden md:flex md:w-1/2 md:justify-evenly">
      {NavLinkData.map((obj) => (
        <li key={obj.key} className="shrink lg:shrink-0 uppercase font-mono font-extralight "><a href={obj.link}>{obj.id}</a></li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (

    <nav className=" fixed top-0 z-10 w-full p-4 px-16 flex flex-col md:flex-row md:justify-around md:px-0 backdrop-blur-sm shadow-lg shadow-[#023434]">
      <div className="flex justify-between md:inline" >
        <Link href={"#home"} className='font-["Alex_Brush"]'>Jatin Sharma</Link>
        <button type="button" onClick={() => setOpen(!open)} className="md:hidden"><RxHamburgerMenu /> </button>
      </div>
      <NavLinks />
      <div className=" md:hidden">
        {open ? <ul>
          {NavLinkData.map((obj) => (
            <li key={obj.key} className=" hover:bg-[#023434] bg-transparent"><a href={obj.link} onClick={() => setOpen(!open)} className="block">{obj.id}</a></li>
          ))}
        </ul> : ""}
      </div>

    </nav>
  );
};

export default Navbar;
