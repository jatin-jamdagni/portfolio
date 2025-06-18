// "use client"

// import { motion } from "framer-motion"

// export default function Publications() {
//   const publications = [
//     "A. Jain, D. Das, and A. Saxena. Planit: A crowdsourcing approach for learning to plan paths from large scale preference feedback. Tech Report, ICRA, in press.",
//     "S. Tilsen, D. Das, and B. McKee. Real-time articulatory biofeedback with electromagnetic articulography. Linguistics Vanguard, in press.",
//   ]

//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-1 dark:border-gray-700">
//         PUBLICATIONS
//       </h2>

//       <ol className="list-decimal pl-5 space-y-2">
//         {publications.map((publication, index) => (
//           <motion.li
//             key={index}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//             className="text-sm text-gray-600 dark:text-gray-400"
//           >
//             {publication}
//           </motion.li>
//         ))}
//       </ol>
//     </div>
//   )
// }
