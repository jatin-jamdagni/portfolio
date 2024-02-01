"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const skillsData = [
  { key: 1, image: "/react.png", name: "React" },
  { key: 2, image: "/next.png", name: "Next.js" },
  { key: 3, image: "/node.png", name: "Node.js" },
  { key: 4, image: "/express.png", name: "Express.js" },
  { key: 5, image: "/mongodb.png", name: "MongoDB" },
  { key: 6, image: "/java.png", name: "Java" },
  { key: 7, image: "/c++.png", name: "C++" },
  { key: 8, image: "/vercel.png", name: "Vercel" },
  { key: 9, image: "/javascript.png", name: "JavaScript" },
  { key: 10, image: "/typescript.png", name: "TypeScript" },
  { key: 11, image: "/css.png", name: "CSS" },
  { key: 12, image: "/tailwind.png", name: "TailwindCSS" },
  { key: 13, image: "/redux.png", name: "Redux" },
  { key: 14, image: "/bootstrap.png", name: "Bootstrap" },
  { key: 15, image: "/jwt.png", name: "JWT" },
  { key: 16, image: "/mysql.png", name: "MySQL" },
  { key: 17, image: "/expo.png", name: "Expo" },
  { key: 18, image: "/mui.jpg", name: "Material UI" },
];

const experienceData = [
  {
    key: 1,
    date: "Jan, 2024 - Present",
    post: "Frontend Developer",
    company: "AWL India",
  },
  {
    key: 2,
    date: "Oct, 2023 - Jan, 2024",
    post: "Tech Trainee",
    company: "FuelBuddy",
  },
  {
    key: 3,
    date: "Feb, 2023 - May, 2023",
    post: "React Developer Intern",
    company: "Mercados Energy Market India Pvt. Ltd.",
  },
];

const jobData = [
  { key: 1, job: "React Developer" },
  { key: 2, job: "Frontend Developer" },
  { key: 3, job: "MERN Stack Developer" },
];

const Skills = () => {
  return (
    <div className="mx-10 flex flex-col gap-10">
      <p className=" text-center text-[44px] font-bold">
        <span className=" text-[#313bac]">Skills</span> and{" "}
        <span className=" text-[#313bac]">Experince</span>
      </p>
      <div className="flex flex-col md:flex-row justify-around items-centers gap-10">
        <div className="flex flex-col gap-6 w-full items-center py-6 md:p-12  ">
          {experienceData.map((obj) => (
            <div
              key={obj.key}
              className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 border-rose-50 border p-4 rounded-xl shadow-lg hover:shadow-md duration-200 shadow-blue-300 hover:shadow-blue-300"
            >
              <p className="text-[16px] font-bold text-[#313aaa]">{obj.date}</p>
              <div className="flex flex-col gap-2 justify-center items-center">
                <p className=" text-[24px] font-medium text-center text-black hover:scale-105 duration-200">
                  {obj.post}
                </p>
                <p className=" text-blue-900 font-bold">{obj.company}</p>
              </div>
            </div>
          ))}
          <br />
          <div className="flex flex-col w-full justify-around gap-6 items-center">
            <span className="text-[#313bac] text-[24px] font-bold border-b-4 uppercase">
              Open To Work
            </span>
            <div className="w-full flex flex-col md:flex-row justify-around gap-10 items-center">
              <ol type="1" className="list-decimal md:text-[16px] font-medium">
                {jobData.map((obj) => (
                  <li key={obj.key} className="">
                    <span className="text-slate-900 font-bold">{obj.job}</span>
                  </li>
                ))}
              </ol>

              <Link
                href="mailto:jatinjamdagni13@gmail.com"
                className=" p-2 px-8 bg-blue-100  rounded-xl text-[22px] font-medium outline outline-4 outline-blue-300  outline-offset-8 hover:outline-offset-4 actie:outline-offset-1 active:outline-blue-600 hover:outline-blue-800 duration-150 active:bg-blue-600 active:text-white "
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 w-full">
          {skillsData.map((obj) => (
            <div
              key={obj.key}
              className=" flex flex-col justify-center items-center"
            >
              <div className="rounded-full bg-slate-100 p-4 shadow-xl hover:shadow-sm ">
                <Image
                  src={obj.image}
                  alt={obj.name}
                  width={50}
                  height={50}
                  className=" object-contain "
                />
              </div>
              <br />
              <p className="text-center text-slate-800 font-medium">
                {obj.name}
              </p>
            </div>
          ))}
          <p className="hidden md:block p-4 text-[24px] font-bold text-slate-700">
            Learning More...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
