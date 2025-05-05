"use client"

import { motion } from "framer-motion"

export default function Awards() {
  const awards = [
    "2014 top 52/2500 KPCB Engineering Fellow",
    "2014 1st/50 Microsoft Coding Competition, Cornell",
    "2013 National Jump Trading Challenge Finalist",
    "2013 7th/120 CS3410 Cache Race Bot Tournament",
    "2012 2nd/150 CS3110 Biannual Intra-Class Bot Tournament",
    "2011 National Indian National Mathematics Olympiad (INMO) Finalist",
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-1 dark:border-gray-700">
        AWARDS
      </h2>

      <ul className="space-y-2">
        {awards.map((award, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {award}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
