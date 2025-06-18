"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { TbArrowNarrowRightDashed } from "react-icons/tb";

export default function Header() {
  return (
    <div className="border-b pb-4 dark:border-gray-700">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Jatin Sharma
      </motion.h1>

      <motion.div
        className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex flex-wrap gap-x-2 gap-y-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <a href="mailto:jatinjamdagni13@gmail.com" className="hover:underline">
          jatinjamdagni13@gmail.com
        </a>
        <span>|</span>
        <span>+(91) 9896434478</span>
      </motion.div>

      <motion.div
        className="mt-4 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className=" flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/jatinjamdagni/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-xl"
          >
            <FaLinkedin size={24} />
          </Link>

          <Link
            href="https://github.com/jatinsharma-tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-xl"
          >
            <FaGithub size={24} />
          </Link>

          <Link
            href="https://twitter.com/jatinjamdagni"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-400 text-xl"
          >
            <FaTwitter size={24} />
          </Link>
        </div>

        <div>
          <Link
            href="https://twitter.com/jatinjamdagni"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-600 flex items-center gap-x-2  dark:text-gray-400 hover:text-blue-400 text-[24px]"
          >
            <span>😏</span>
            <span>
              <TbArrowNarrowRightDashed />
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
