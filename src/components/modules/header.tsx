"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

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
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full py-3 md:pt-16 sm:px-6 lg:px-8">
      <nav className=" w-full md:max-w-7xl md:mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-4 md:flex-col relative md:space-x-0 justify-start md:justify-between md:items-start items-center w-full">
            <div className="flex items-center w-fit space-x-3 group">
              <div className="relative h-12 w-12 md:h-20 md:w-20 flex-shrink-0">
                <Image
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="User"
                  fill
                  fetchPriority="high"
                  loading="eager"
                  className="object-contain rounded-full grayscale group-hover:grayscale-0 duration-200"
                />
              </div>
              <div className="flex md:absolute top-3 left-28 flex-col">
                <h2 className="text-[#9f9fa0] group-hover:text-white text-lg font-bold sm:text-xl lg:text-2xl transition-colors duration-200">
                  Jatin Sharma
                </h2>
              </div>
            </div>

            <ul className="md:flex absolute top-14 left-[100px] hidden items-center space-x-2">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-emerald-400 duration-200 transition-all hover:underline-offset-3 hover:underline px-3 ${
                    link.id === navLinks.length
                      ? "border-0"
                      : "border-r-2 border-green-700 border-dotted"
                  }`}
                >
                  <Link
                    href={link.href}
                    className="text-xs capitalize hover:text-emerald-300 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 transition-all duration-200 hover:border-emerald-400"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-300 transition-colors" />
              ) : (
                <Moon className="h-5 w-5 text-blue-400 hover:text-blue-300 transition-colors" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-90 scale-110" : "rotate-0"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-emerald-400" />
                ) : (
                  <Menu className="h-5 w-5 text-emerald-400" />
                )}
              </div>
            </button>
          </div>
        </div>

      <div className="md:hidden  relative">
          <div
            className={`absolute top-4  z-50  w-full transition-all duration-300 ease-in-out origin-top-right ${ // Added origin-top-right
              isMobileMenuOpen ? "scale-100 opacity-100 block" : "scale-0 opacity-0 " // Changed translate-x to scale
            }`}
          >
            <ul className="flex flex-col items-end w-full space-y-2 bg-black/40 backdrop-blur-sm p-4 rounded-lg">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`transition-all duration-300 w-full text-right ease-in-out ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0" // You might still want individual item animations
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-emerald-400 hover:text-emerald-300 hover:bg-black/30 w-full rounded-md transition-all duration-200 capitalize"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
