import Image from "next/image";
import Link from "next/link";
import React from "react";
import Links from "./Links";

const IntroBox = () => {
  return (
    <div className="">
      <div className=" mx-10 flex flex-col md:flex-row justify-around items-center gap-10">
        {/* Left side Items */}
        <div className="flex flex-col gap-7 justify-start items-start md:h-[30em] ">
          <div className="shadow-lg hover:shadow-2xl mr-10 bg-gray-100 p-2 rounded-lg flex items-center justify-center pr-10 ">
            <Image
              src={"/logo_image.png"}
              alt="logo"
              height={100}
              width={100}
              className=" hover:scale-125 duration-300 object-contain"
            />
            <p className=' font-["Dm_sans"] text-[16px] text-gray-600'>
              Hello, I am
              <br />
              <span className="text-[44px] text-black">Jatin</span>
            </p>
          </div>
          <div className='shadow-lg hover:shadow-2xl ml-6 bg-gray-50 px-8 py-6 rounded-lg font-["Dm_sans"] flex gap-4 items-center w-full'>
            <div className="rounded-full duration-200 p-6 py-8 flex justify-center shadow-blue-200 items-center shadow-2xl hover:shadow-sm active:shadow-sm text-black hover:text-[#313bac] ">
              <Link
                className=" md:text-[32px] "
                target="_blank"
                href={
                  "https://drive.google.com/file/d/1mISIRZyhbSKYkg54Okp0kr66iKUDaL3I/view?usp=sharing"
                }
              >
                Resume
              </Link>
            </div>
            <p className="text-[16px] uppercase text-right text-gray-800 hover:text-black">
              MERN Stack Dev
              <br />
              Mobile App Dev
            </p>
          </div>
        </div>

        {/* Avatar */}
        <div className="border-b-4 border-black rounded-sm py-6">
          <Image
            src={"/avatar.svg"}
            alt="avatar"
            width={400}
            height={400}
            className="md:h-[30em] md:w-[30em] p-2 md:p-0 scale-125 hover:scale-100 duration-300 drop-shadow-2xl overflow-hidden"
          />
        </div>

        {/* Right side Items */}
        <div className="hidden md:flex justify-start items-center gap-10 h-[30em] w-[23em]  relative">
          <div className="flex flex-col  h-full items-center justify-between">
            <Image
              src={"/java.svg"}
              alt="java"
              height={100}
              width={100}
              className="drop-shadow-3xl"
            />
            <Image
              src={"/node.svg"}
              alt="node"
              height={100}
              width={100}
              className="drop-shadow-4xl"
            />
          </div>
          <Image
            src={"/react.svg"}
            alt="react"
            height={100}
            width={100}
            className="animate-spin drop-shadow-5xl"
          />
        </div>
      </div>
      <br />
      <Links />
    </div>
  );
};

export default IntroBox;

// #023434]

// <div className='mx-10 mt-4 text-center text-[24px] font-["Josefin_Sans"] text-[#6a6363]'>
//   As a
//   <span className='text-[#A555EC]	 font-bold'> Web Developer</span>,
//   <br />
//   I take pride in crafting user interfaces that transform ordinary
//   interactions into extraordinary experiences, fueled by my passion
//   for coding and creativity.
// </div>

{
  /* <p>I Know That <span className='text-blue-600'>Good Dev</span></p>
<p>Means <span className='text-blue-600'>Good Business</span>.</p> */
}
