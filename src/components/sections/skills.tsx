"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    PROGRAMMING: {
      "Over 5000 lines:":
        "Java • Shell • Python • Javascript OCaml • Matlab • Rails • LATEX",
      "Over 1000 lines:": "C • C++ • CSS • PHP • Assembly",
      "Familiar:": "AS3 • iOS • Android • MySQL",
    },
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-1 dark:border-gray-700">
        SKILLS
      </h2>

      <div className="space-y-3">
        {Object.entries(skills).map(([category, skillSets], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
          >
            <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200">
              {category}
            </h3>
            <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 space-y-1">
              {Object.entries(skillSets).map(
                ([level, skillList], levelIndex) => (
                  <motion.div
                    key={levelIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3 + levelIndex * 0.05,
                      duration: 0.5,
                    }}
                  >
                    <span className="font-medium">{level}</span> {skillList}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
