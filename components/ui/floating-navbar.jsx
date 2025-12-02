// "use client";
// import React from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { cn } from "@/lib/utils";
// import ReadCvModal from '../ReadCvModal';


// export const FloatingNav = ({ navItems, className }) => {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className={cn(
//           "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
//           className
//         )}
//       >
//         {navItems?.map((navItem, idx) => (
//           <motion.a
//            onClick={navItem.onClick} // Added onClick support
//             key={`link-${idx}`}
//             href={navItem.link}
//             className="relative dark:text-neutral-50 items-center flex space-x-1 cursor-pointer text-neutral-600"
//             whileHover={{
//               y: -2,
//               color: "#22c55e", // green-500
//               transition: { duration: 0.2 },
//             }}
//           >
//             {/* ICON (mobile) */}
//             <span className="block sm:hidden">{navItem.icon}</span>

//             {/* TEXT (desktop) */}
//             <span className="hidden sm:block text-sm relative group">
//               {navItem.name}

//               {/* Underline Animation */}
//               <span
//                 className="
//                   absolute left-0 -bottom-0.5 h-[2px] w-0 
//                   bg-gradient-to-r from-green-400 to-green-600 
//                   rounded-full transition-all duration-300 group-hover:w-full
//                 "
//               ></span>
//             </span>
//           </motion.a>
//         ))}

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
//         >
//         <ReadCvModal buttonBgColor="transparent" buttonTextColor="inherit" />
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };



"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import ReadCvModal from "../ReadCvModal";

export const FloatingNav = ({ navItems, className }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          `flex max-w-fit fixed inset-x-0 
          top-4 sm:top-10 
          mx-auto 
          border border-neutral-300/40 dark:border-white/30 
          rounded-full 
          dark:bg-black/70 bg-white/80 
          backdrop-blur-xl 
          shadow-lg 
          z-[999999] 
          px-6 py-3 items-center justify-center space-x-5`,
          className
        )}
      >
        {/* Navigation Items */}
        {navItems?.map((navItem, idx) => (
          <motion.a
            key={idx}
            href={navItem.link}
            onClick={navItem.onClick}
            className="
              relative 
              flex items-center 
              cursor-pointer
              text-sm font-medium 
              text-neutral-700 dark:text-neutral-100
            "
            whileHover={{
              y: -2,
              color: "#22c55e",
              transition: { duration: 0.2 },
            }}
          >
            {/* Mobile Icon */}
            <span className="block sm:hidden text-lg">{navItem.icon}</span>

            {/* Desktop Text */}
            <span className="hidden sm:block relative group">
              {navItem.name}

              <span
                className="
                  absolute left-0 -bottom-0.5 h-[2px] w-0
                  bg-gradient-to-r from-green-400 to-green-600
                  transition-all duration-300 group-hover:w-full
                "
              ></span>
            </span>
          </motion.a>
        ))}

        {/* Read CV Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            border border-neutral-300 dark:border-white/30 
            text-sm text-black dark:text-white 
            px-4 py-1.5 
            rounded-full font-medium
          "
        >
          <ReadCvModal buttonBgColor="transparent" buttonTextColor="inherit" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
