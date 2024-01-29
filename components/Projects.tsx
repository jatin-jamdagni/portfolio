import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectsData = [
  {
    key: 1,
    projectName: "Project Shop",
    image: "/projectshop.png",
    description:
      "The Project is a cutting-edge web application developed using Reactjs, Next.js 13, Tailwind CSS, TypeScript, and GraphQL. It provides users with a seamless experience for managing and showcasing their projects, while maintaining a user-friendly interface and robust functionality.",
    liveURL: "https://project-shop-theta.vercel.app/",
    githubURL: "https://github.com/jatin-jamdagni/Project_shop",
  },
  {
    key: 2,
    projectName: "Car Hub",
    image: "/carhub.png",
    description:
      "The 'Car Hub' is an immersive web app project built on Reactjs, Next.js 13 and combined with Tailwind CSS and TypeScript. This project aims to provide users with an exceptional online platform to explore diverse cars, diving into captivating automotive design and features via seamless dynamic search.",
    liveURL: "https://car-hub-qgmg.vercel.app/",
    githubURL: "https://github.com/jatin-jamdagni/car-hub",
  },
  {
    key: 3,
    projectName: "Migrater: Tourism Website",
    image: "/migrater.png",
    description:
      "'Migrater' is a captivating frontend tourism website meticulously crafted with JavaScript, HTML, and CSS, inviting users on a virtual journey through  enchanting landscapes and rich cultural tapestry of India. It offers an immersive exploration of the country's diverse tourist destinations.",
    liveURL: "https://pallavidwivedi1605.github.io/MIGRATERS/",
    githubURL: "https://github.com/jatin-jamdagni/MIGRATERS",
  },
  {
    key: 4,
    projectName: "E-Shop: E-commerce Website",
    image: "/e-shop.png",
    description:
      "'E-shop' is a E-commerce website designed using Vue3.js Composition api, firebase emailpassword Authentication, TypeScript and Pinia Store to manage state. Basically E-shop have Cart functionality, Buying item and with filtered search functionality not only this your can get your Order Details in your account info section after success login.",
    liveURL: "https://e-commerce-jatin.vercel.app/",
    githubURL: "https://github.com/jatin-jamdagni/E-Commerce",
  },
];

// const Projects = () => {
//   return (
//     <div className='mx-10 flex flex-col justify-center items-center gap-10'>
//       <p className=' text-center text-[44px] font-bold'>My Creative <span className='text-[#313bac]'>Portfolio</span> Section</p>
//       <div className='flex flex-col md:flex-row justify-center items-center gap-16 w-72 md:w-[60em]  '>
//         {projectsData.map(obj => (
//           <div key={obj.key} className='flex flex-col justify-center gap-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-300 duration-300 shadow-blue-200 w-[300px] h-[500px]'>

//             <Image src={obj.image} alt={obj.projectName} width={1902} height={1080} className='w-full h-full rounded-2xl border shadow-xl sticky' />

//             <p className='px-6 text-[18px] font-medium text-slate-700 '>{obj.projectName}</p>
//             <p className='px-6 pb-6 text-slate-800 text-justify'>{obj.description}</p>

//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

const Projects = () => {
  return (
    <div className="mx-10 flex flex-col justify-center items-center gap-10">
      <p className="text-center text-[44px] font-bold">
        My Creative <span className="text-[#313bac]">Portfolio</span> Section
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 w-full  flex-wrap">
        {projectsData.map((obj) => (
          <div
            key={obj.key}
            className="relative flex flex-col md:justify-start  gap-4 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-300 duration-300 shadow-blue-200 w-[300px] md:w-[400px] h-[560px] hover:scale-105 "
          >
            <Image
              src={obj.image}
              alt={obj.projectName}
              width={1902}
              height={1080}
              className="w-full h-auto rounded-2xl border shadow-xl shadow-blue-100"
            />

            <p className="px-6 text-[18px] font-medium text-slate-700">
              {obj.projectName}
            </p>
            <p className="px-6 text-slate-800 text-justify">
              {obj.description}
            </p>
            <div className="flex justify-center items-center gap-10 pt-2">
              <Link
                href={obj.liveURL}
                className="px-4 py-2 font-bold active:text-white rounded-lg outline outline-offset-4 hover:outline-offset-0 outline-blue-500 bg-blue-500 active:outline-rose-600 active:bg-rose-600 duration-200"
              >
                Live
              </Link>
              <Link
                href={obj.githubURL}
                className="px-4 py-2 font-bold active:text-white rounded-lg outline outline-offset-4 hover:outline-offset-0 outline-green-500 bg-green-500 active:outline-rose-600 active:bg-rose-600 duration-200"
              >
                Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
