"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationItems = [
    {
      school: "DCRUST",
      link: "https://www.dcrustedp.in",
      degree: "B.Tech",
      courseName: "Computer Science and Engineering",
      date: "2019 - 2023",
      location: "Sonipat, HR",
    },
    {
      school: "Indian Modern School",
      degree: "12th",
      courseName: "PCM",
      date: "2018 - 2019",
      location: "Sonipart, HR",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-1 dark:border-gray-700">
        EDUCATION
      </h2>

      <div className="space-y-3">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-sm mb-2"
          >
            <a href={item.link} >
              <div className={`font-semibold mb-1   w-fit ${item.link ? "text-blue-50 border-b border-blue-900 hover:border-blue-500 duration-200" : "dark:text-gray-200"}`}>
                {item.school}
              </div>
            </a>
            {item.degree && (
              <div className="text-gray-700 dark:text-gray-300">
                {item.degree}
              </div>
            )}
            {item.courseName && (
              <div className="text-gray-700 dark:text-gray-300">
                {item.courseName}
              </div>
            )}

            <div className="text-gray-600 dark:text-gray-400 text-xs">
              {item.date} | {item.location}
            </div>

            {/* {item.details && (
              <ul className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )} */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
