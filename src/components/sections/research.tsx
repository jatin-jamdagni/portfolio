"use client"

import { motion } from "framer-motion"

export default function Research() {
  const research = [
    {
      institution: "CORNELL ROBOT LEARNING LAB",
      position: "RESEARCHER",
      period: "Jan 2014 – Jan 2015",
      location: "Ithaca, NY",
      details:
        "Worked with Ashesh Jain and Prof Ashutosh Saxena to create PlanIt, a tool which learns from large scale user preference feedback to plan robot trajectories in human environments.",
    },
    {
      institution: "CORNELL PHONETICS LAB",
      position: "HEAD UNDERGRADUATE RESEARCHER",
      period: "Mar 2012 – May 2013",
      location: "Ithaca, NY",
      details:
        "Led the development of QuickTongue, the first ever breakthrough tongue-controlled game with Prof Sam Tilsen to aid in Linguistics research.",
    },
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b pb-1 dark:border-gray-700">
        RESEARCH
      </h2>

      <div className="space-y-5">
        {research.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {item.institution} | {item.position}
                </h3>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {item.period} | {item.location}
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
