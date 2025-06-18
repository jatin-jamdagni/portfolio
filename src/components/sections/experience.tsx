"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

type ExperienceDetail =
  | string
  | {
      title: string | null;
      description: string;
    };

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  details: ExperienceDetail[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "AWL INDIA",
    position: "Frontend Developer",
    period: "Jan 2024 - Present",
    location: "Gurgaon, HR",
    skills: [
      "React Native",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "SQLite",
      "PostgreSQL",
      "Express.js",
      "Android SDK",
    ],
    details: [
      {
        title: "RFID App",
        description:
          "Led development of an RFID and Barcode integration project using Android native SDK in React Native, enabling rapid inventory scans. Utilized TypeScript, project panels, SQLite storage, and an Express/PostgreSQL backend.",
      },
      {
        title: "Inventory PWA",
        description:
          "Worked with leadership to build a PWA for inventory management using Vue.js, Tailwind CSS, and TypeScript. Enhanced SKU bin and location tagging, improving client engagement and inventory access.",
      },
      {
        title: null,
        description:
          "Maintained and enhanced React and Node.js projects by troubleshooting, resolving bugs, and ensuring stability.",
      },
    ],
  },
  {
    company: "COURSERA",
    position: "KPCB Fellow & Software Engineering Intern",
    period: "June 2014 – Sep 2014",
    location: "Mountain View, CA",
    skills: [
      "Software Engineering",
      "Fellowship Program",
      "Product Development",
      "Team Collaboration",
    ],
    details: [
      "Participated in the prestigious KPCB Fellowship program, working on cutting-edge technology projects.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    company: "GOOGLE",
    position: "Software Engineering Intern",
    period: "May 2013 – Aug 2013",
    location: "Mountain View, CA",
    skills: [
      "JavaScript",
      "Python",
      "Backbone.js",
      "Full-Stack Development",
      "YouTube Platform",
      "ASR Technology",
    ],
    details: [
      "Contributed to the YouTube Captions team, developing full-stack features for Automatic Speech Recognition captions using JavaScript and Python.",
      "Created a backbone.js-like framework for the Captions editor.",
    ],
  },
  {
    company: "PHABRICATOR",
    position: "Open Source Contributor & Team Leader",
    period: "Jan 2013 – May 2013",
    location: "Palo Alto, CA & Ithaca, NY",
    skills: [
      "PHP",
      "Shell Scripting",
      "Team Leadership",
      "Open Source",
      "Code Review",
      "Project Management",
    ],
    details: [
      "Phabricator is used by Facebook, Dropbox, Quora, Asana, and more.",
      "Developed the Meme generator and additional features in PHP and Shell.",
      "Led a team from MIT, Cornell, IC London, and U Helsinki.",
    ],
  },
];

const skillColors = [
  "bg-blue-600",
  "bg-purple-600",
  "bg-emerald-600",
  "bg-orange-600",
  "bg-indigo-600",
  "bg-teal-600",
  "bg-rose-600",
  "bg-amber-600",
  "bg-gray-700", // Added more colors for variety
  "bg-cyan-600",
];

// Optimized icons as simple SVGs
const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    animate={{ rotate: isOpen ? 90 : 0 }} // Animate rotation
    transition={{ duration: 0.2 }}
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </motion.svg>
);

export default function Experience() {
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(
    new Set([0]) // Open the first accordion by default as per the image
  );
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    const newOpenAccordions = new Set(openAccordions);
    if (newOpenAccordions.has(index)) {
      newOpenAccordions.delete(index);
    } else {
      newOpenAccordions.add(index);
    }
    setOpenAccordions(newOpenAccordions);
  };

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    // Auto-scroll for skill pills in collapsed state
    experiences.forEach((_, index) => {
      if (!openAccordions.has(index) && scrollRefs.current[index]) {
        const element = scrollRefs.current[index];
        // Only start scrolling if content overflows
        if (element && element.scrollWidth > element.clientWidth) {
          const interval = setInterval(() => {
            if (element) {
              const maxScroll = element.scrollWidth - element.clientWidth;
              if (element.scrollLeft >= maxScroll) {
                element.scrollLeft = 0;
              } else {
                element.scrollLeft += 1; // Adjust scroll speed here
              }
            }
          }, 40); // Adjust interval for smoother or faster scroll
          intervals.push(interval);
        }
      }
    });

    return () => intervals.forEach(clearInterval);
  }, [openAccordions]);

  // Animation variants for card entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-screen p-4 sm:p-6 lg:p-8">
      
      <div className="mb-12 ">
         
      <h2 className="text-lg font-semibold w-fit text-gray-900 border-grad dark:text-white mb-3 border-b pb-1 dark:border-gray-700">
        
       
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>{" "}
        {/* Blue underline */}
      </div>
      {/* Experience Timeline */}
      <div className="relative pl-10">
        {" "}
        {/* Adjusted padding for timeline */}
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>{" "}
        {/* Softer line color */}
        <div className="space-y-10">
          {" "}
          {/* Increased space between items */}
          {experiences.map((exp, index) => {
            const isOpen = openAccordions.has(index);

            return (
              <motion.div
                key={index}
                className="relative"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: index * 0.1 }} // Staggered animation
              >
                {/* Timeline dot */}
                <div className="absolute left-1 top-4 -ml-2 w-4 h-4 bg-blue-600 rounded-full z-10 border-2 border-white dark:border-gray-800"></div>{" "}
                {/* Blue dot */}
                {/* Experience card */}
                <div className="ml-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  {" "}
                  {/* Darker background for card, more prominent shadow */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex items-start justify-between bg-gray-900 dark:bg-gray-700 text-white rounded-t-xl" // Darker header for collapsed state
                  >
                    <div className="flex-1 min-w-0">
                      {/* Company and Position */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div className="mb-2 md:mb-0">
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {" "}
                            {/* Slightly larger company name */}
                            {exp.company}
                          </h3>
                          <p className="text-lg font-medium text-blue-400">
                            {" "}
                            {/* Lighter blue for position */}
                            {exp.position}
                          </p>
                        </div>

                        {/* Period and Location */}
                        <div className="flex flex-col md:text-right space-y-1 text-sm text-gray-300 dark:text-gray-400">
                          {" "}
                          {/* Lighter gray for dates */}
                          <div className="flex items-center md:justify-end">
                            <CalendarIcon />
                            <span className="ml-2">{exp.period}</span>
                          </div>
                          <div className="flex items-center md:justify-end">
                            <LocationIcon />
                            <span className="ml-2">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Skills preview when closed */}
                      {!isOpen && (
                        <div className="mt-4 overflow-hidden">
                          <div
                            ref={(el) => {
                              scrollRefs.current[index] = el;
                            }}
                            className="flex gap-2 py-1" // Added padding to skill pills row
                            style={{ scrollBehavior: "smooth" }}
                          >
                            {[...exp.skills, ...exp.skills].map(
                              // Duplicated for continuous scroll effect
                              (skill, skillIndex) => (
                                <span
                                  key={`${skill}-${skillIndex}`}
                                  className={`
                                    inline-flex items-center px-4 py-1.5 text-xs font-semibold text-white rounded-full
                                    ${
                                      skillColors[
                                        skillIndex % skillColors.length
                                      ]
                                    } flex-shrink-0 whitespace-nowrap
                                  `} // Added whitespace-nowrap
                                >
                                  {skill}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chevron */}
                    <div className="ml-4 flex-shrink-0 text-white">
                      {" "}
                      {/* White chevron */}
                      <ChevronIcon isOpen={isOpen} />
                    </div>
                  </button>
                  {/* Expanded content */}
                  <AnimatePresence>
                    {" "}
                    {/* Use AnimatePresence for exit animations */}
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-6 pb-6 bg-white dark:bg-gray-900 border-t border-slate-100 dark:border-gray-700 rounded-b-xl" // Lighter background for expanded, rounded bottom
                      >
                        <div className="pt-6">
                          {/* Skills grid */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                              Technologies & Skills
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {" "}
                              {/* Increased gap */}
                              {exp.skills.map((skill, skillIndex) => (
                                <motion.span
                                  key={skillIndex}
                                  className={`
                                    inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white rounded-lg
                                    ${
                                      skillColors[
                                        skillIndex % skillColors.length
                                      ]
                                    }
                                    transform hover:scale-105 transition-transform duration-150 cursor-default
                                  `}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: 0.1 + skillIndex * 0.05,
                                    duration: 0.3,
                                  }} // Staggered skill entrance
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Details */}
                          {exp.details.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-4 uppercase tracking-wide">
                                Key Achievements & Responsibilities
                              </h4>
                              <div className="space-y-4">
                                {exp.details.map((detail, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: 0.2 + idx * 0.1,
                                      duration: 0.3,
                                    }} // Staggered detail entrance
                                  >
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                                      {typeof detail === "string" ? (
                                        detail
                                      ) : (
                                        <>
                                          {detail.title && (
                                            <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                                              {detail.title}
                                            </span>
                                          )}
                                          <span>{detail.description}</span>
                                        </>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
