import Image from "next/image";
import { Yatra_One } from "next/font/google";
import Links from "./Links";
import Link from "next/link";

const yatra_one = Yatra_One({ weight: "400", subsets: ["latin"] });

const IntroBox = () => {
  return (
    <div id="" className={`${yatra_one.className} flex flex-col mx-12 gap-6 p-20 landing relative`}>
      <div className='flex gap-5 p-10'>
        <div className="max-w-2xl">
          <p className="text-[40px] ">
            {`I'm `}
            <span className={`text-blue-800`}>Jatin Sharma</span>,
          </p>

          <p className="p-4">
            As a
            <span className="text-blue-800 text-[20px]"> Web Developer</span>,
            I take pride in crafting user interfaces that transform ordinary
            interactions into extraordinary experiences, fueled by my passion
            for coding and creativity.
          </p>
          <Link
            className="text-blue-800 text-[32px] ml-96 shadow-lg duration-200 
            shadow-[#023434] hover:shadow-xl hover:shadow-[#023434] "
            target="_blank"
            href={
              "https://drive.google.com/file/d/1xw4Bol_bhOu54i3-7e8ugOArTqWHHHM0/view?usp=sharing"
            }
          >
            Resume
          </Link>
        </div>

        <Image
          src={"/avatar.png"}
          width={250}
          height={250}
          alt="Avatar"
          className="object-contain absolute right-40 bottom-[165px]"
        />

      </div>

      <div className="">
        <Links />
      </div>

      <Image src={"/java.svg"} alt="java" height={50} width={50} className="absolute top-56 right-32 opacity-50 drop-shadow-6xl hover:opacity-100 duration-100" />
      <Image src={"/node.svg"} alt="java" height={50} width={50} className="absolute bottom-20 right-72 opacity-50 drop-shadow-7xl hover:opacity-100 duration-100" />
      <Image src={"/react.svg"} alt="java" height={50} width={50} className="absolute top-28 left-[42rem] opacity-50 drop-shadow-4xl hover:opacity-100 duration-100" />
      <Image src={"/nextjs.svg"} alt="java" height={100} width={100} className="absolute bottom-40 left-36 opacity-50 drop-shadow-5xl hover:opacity-100 duration-100" />
    </div>
  );
};

export default IntroBox;
