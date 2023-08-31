import Image from "next/image";
import React from "react";
import { LuTag } from "react-icons/lu";

const AboutDetails = [
  {
    key: 1,
    image: "/frontend_development.jpg",
    skill: "Front-End",
    des: "Along with knowledge on HTML & CSS, I have expertise in React.js, Next.js. I am also proficient in Material UI, Bootstrap, and Tailwind CSS.",
  },
  {
    key: 2,
    image: "/backend_developement.jpg",
    skill: "Back-End",
    des: "I have expertise in MERN stack. Which makes me proficient in back-end developer with excellent skill in both Express & Node.js ",
  },
  {
    key: 3,
    image: "/app_development.jpg",
    skill: "Mobile App",
    des: "I Proficient in Cross platform mobile app development using React Native. I have worked on both Expo and core React Native environment.",
  },
];

const About = () => {
  return (
    <div className="mx-10 flex flex-col justify-center items-center gap-10">
      <p className="text-[44px] font-bold text-center ">
        I Know That <span className=" text-[#313bac]">Good Dev</span>
        <br />
        Means <span className=" text-[#313bac]">Good Business.</span>
      </p>
      <div className=" flex items-center flex-col md:flex-row justify-center md:justify-around w-full pb-5">
        <p className=" pt-4 pb-1  hover:scale-105 duration-300 flex items-center gap-2">
          <LuTag className=" rotate-180 text-blue-800 stroke-[4px]" />
          <span className="border-b-4 rounded-sm border-blue-700 font-semibold">
            <span className=" text-blue-900 ">QUALIFIED: </span>
            GATE CSE 2023
          </span>
        </p>
        <p className=" py-4 flex items-center justify-center gap-2 font-semibold hover:scale-105 duration-300  ">
          <LuTag className=" rotate-180 text-blue-800 stroke-[4px]" />
          <span className="flex items-center justify-center font-semibold  border-b-4 rounded-sm border-blue-700 ">
            B.TECH
            <span className="w-2 h-2 rounded-full bg-blue-700 mx-2"></span>
            DCRUST
            <span className="w-2 h-2 rounded-full bg-blue-700 mx-2"></span>
            CGPA: 7.71
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24 justify-center items-center ">
        {AboutDetails.map((obj) => (
          <div
            className="w-52 h-full flex flex-col justify-center gap-4 hover:scale-110 duration-500"
            key={obj.key}
          >
            <Image
              src={obj.image}
              alt={obj.skill}
              height={2848}
              width={2848}
              className="w-auto h-52 rounded-2xl"
            />
            <p className=" font-bold text-[20px] text-slate-800">{obj.skill}</p>
            <p className=" text-[16px] text-slate-800 text-justify">
              {obj.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
