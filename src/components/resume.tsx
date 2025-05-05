"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Header from "./sections/header";
import Education from "./sections/education";
// import Links from "./sections/links";
import Coursework from "./sections/course-work";
import Skills from "./sections/skills";
import Experience from "./sections/experience";
import Research from "./sections/research";
// import { Award } from "lucide-react";
import Publications from "./sections/publications";
import Awards from "./sections/awards";
import { BackgroundGradient } from "./bg-radiant";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative">
      <BackgroundGradient
        containerClassName="mx-auto r  max-w-4xl my-12"
        className=" rounded-md bg-white dark:bg-zinc-900"
      >
        <motion.div
          ref={resumeRef}
          className="max-w-4xl mx-auto bg-white dark:bg-black/50  rounded-lg overflow-hidden  p-8 transition-colors duration-200"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Header />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-1">
              <motion.div variants={itemVariants}>
                <Education />
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                {/* <Links /> */}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <Coursework />
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <Skills />
              </motion.div>
            </div>

            <div className="md:col-span-2">
              <motion.div variants={itemVariants}>
                <Experience />
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <Research />
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <Awards />
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <Publications />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <style jsx global>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-mode,
            .print-mode * {
              visibility: visible;
            }
            .print-mode {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .print-mode button {
              display: none;
            }
          }
        `}</style>
      </BackgroundGradient>
    </div>
  );
}
