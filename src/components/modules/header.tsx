import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavLinksProps {
  id: number;
  title: string;
  href: string;
}

const navLinks: NavLinksProps[] = [
  { id: 1, title: "about", href: "/" },
  { id: 2, title: "projects", href: "/projects" },
  { id: 3, title: "blogs", href: "/blogs" },
  { id: 4, title: "resume", href: "/#" },
];

const Header = () => {
  return (
    <nav>
      <div className=" flex justify-between items-center w-full">
        <div className=" flex items-center justify-center space-x-2">
          <Image
            src={"https://randomuser.me/api/portraits/men/12.jpg"}
            alt="User"
            width={100}
            height={100}
            fetchPriority="high"
            loading="eager"
            className=" object-center rounded-full grayscale hover:grayscale-0 duration-200"
          />

          <div className=" flex flex-col justify-center space-y-2  ">
            <span className=" text-[#9f9fa0] hover:text-white text-xl font-bold sm:text-2xl inline-flex items-start  hover:filter-none sm:relative sm:inline-block px-5">Jatin Sharma</span>

            <ul className=" flex w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={` text-emerald-400  duration-200 transition-all hover:underline-offset-3 hover:underline px-5 ${
                    link.id === navLinks.length
                      ? "border-0"
                      : "border-r-2 border-green-700 border-dotted borderd"
                  }`}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div>Theme</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
