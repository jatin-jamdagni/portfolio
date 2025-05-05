// "use client"

// import { motion } from "framer-motion"
 
// export default function Links() {
//   const links = [
//     { name: "Facebook://dd", icon: <Facebook className="h-4 w-4" /> },
//     { name: "Github://deedydas", icon: <Github className="h-4 w-4" /> },
//     { name: "LinkedIn://debarghyadas", icon: <Linkedin className="h-4 w-4" /> },
//     { name: "YouTube://DeedyDash007", icon: <Youtube className="h-4 w-4" /> },
//     { name: "Twitter://@debarghya_das", icon: <Twitter className="h-4 w-4" /> },
//     { name: "Quora://Debarghya-Das", icon: null },
//   ]

//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-1 dark:border-gray-700">
//         LINKS
//       </h2>

//       <div className="space-y-2">
//         {links.map((link, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//             className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
//           >
//             {link.icon}
//             <span>{link.name}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }
