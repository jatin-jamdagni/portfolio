"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      company: "FACEBOOK",
      position: "SOFTWARE ENGINEER",
      period: "Jan 2015 - Present",
      location: "New York, NY",
      details: [],
    },
    {
      company: "COURSERA",
      position: "KPCB FELLOW + SOFTWARE ENGINEERING INTERN",
      period: "June 2014 – Sep 2014",
      location: "Mountain View, CA",
      details: [
        "52 out of 2500 applicants chosen to be a KPCB Fellow 2014.",
        "Led and shipped Yoda - the admin interface for the new Phoenix platform.",
        "Full-stack developer - Wrote and reviewed code for JS using Backbone, Jade, Stylus and Require and Scala using Play",
      ],
    },
    {
      company: "GOOGLE",
      position: "SOFTWARE ENGINEERING INTERN",
      period: "May 2013 – Aug 2013",
      location: "Mountain View, CA",
      details: [
        "Worked on the YouTube Captions team, in Javascript and Python to plan, to design and develop the full stack to add and edit Automatic Speech Recognition captions. In production.",
        "Created a backbone.js-like framework for the Captions editor.",
      ],
    },
    {
      company: "PHABRICATOR",
      position: "OPEN SOURCE CONTRIBUTOR & TEAM LEADER",
      period: "Jan 2013 – May 2013",
      location: "Palo Alto, CA & Ithaca, NY",
      details: [
        "Phabricator is used daily by Facebook, Dropbox, Quora, Asana and more.",
        "I created the Meme generator and more in PHP and Shell.",
        "Led a team from MIT, Cornell, IC London and U Helsinki for the project.",
      ],
    },
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b pb-1 dark:border-gray-700">
        EXPERIENCE
      </h2>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {exp.company} | {exp.position}
                </h3>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {exp.period} | {exp.location}
              </div>
            </div>

            {exp.details.length > 0 && (
              <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
                {exp.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.05, duration: 0.5 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
