"use client"

import { motion } from "framer-motion"

export default function Education() {
  const educationItems = [
    {
      school: "CORNELL UNIVERSITY",
      degree: "MENG IN COMPUTER SCIENCE",
      date: "Dec 2014",
      location: "Ithaca, NY",
    },
    {
      school: "CORNELL UNIVERSITY",
      degree: "BS IN COMPUTER SCIENCE",
      date: "May 2014",
      location: "Ithaca, NY",
      details: ["College of Engineering", "Magna Cum Laude", "Cum. GPA: 3.83 / 4.0", "Major GPA: 3.9 / 4.0"],
    },
    {
      school: "LA MARTINIERE FOR BOYS",
      degree: "",
      date: "May 2011",
      location: "Kolkata, India",
    },
  ]

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
            className="text-sm"
          >
            <div className="font-semibold text-gray-800 dark:text-gray-200">{item.school}</div>
            {item.degree && <div className="text-gray-700 dark:text-gray-300">{item.degree}</div>}
            <div className="text-gray-600 dark:text-gray-400 text-xs">
              {item.date} | {item.location}
            </div>

            {item.details && (
              <ul className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
