"use client"

import { motion } from "framer-motion"

export default function Coursework() {
  const coursework = {
    GRADUATE: [
    "Computer Science ane Engineering"
    ]
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-1 dark:border-gray-700">
        COURSEWORK
      </h2>

      <div className="space-y-3">
        {Object.entries(coursework).map(([category, courses], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
          >
            <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200">{category}</h3>
            <ul className="mt-1 text-xs text-gray-600 dark:text-gray-400 space-y-1">
              {courses.map((course, courseIndex) => (
                <motion.li
                  key={courseIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + courseIndex * 0.05, duration: 0.5 }}
                >
                  {course}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
