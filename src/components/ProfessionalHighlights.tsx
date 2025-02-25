'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBug, FaUserGraduate } from "react-icons/fa";

export default function ProfessionalHighlights() {
  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      metric: "8.59 GPA",
      label: "Academic Performance",
      detail: "Consistently maintaining strong academic record"
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      metric: "4+ Projects",
      label: "Full-Stack Projects",
      detail: "Including Employment portal and Chrome extension"
    },
    {
      icon: <FaBug className="text-2xl" />,
      metric: "Security Focus",
      label: "Bug Hunting Experience",
      detail: "Participated in security testing competitions"
    },
    {
      icon: <FaUserGraduate className="text-2xl" />,
      metric: "IIT Gandhinagar",
      label: "Premier Institute",
      detail: "Top-tier technical education"
    }
  ];

  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/50 dark:bg-gray-900/50 p-4 rounded-xl backdrop-blur-sm border border-black/5 dark:border-white/5 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="bg-blue-600/10 dark:bg-blue-400/10 p-3 rounded-full mb-3">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-1">
              {item.metric}
            </h3>
            <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
              {item.label}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-xs">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 