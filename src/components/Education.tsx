'use client';

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

const education = {
  degree: "Bachelor of Technology in Electrical Engineering",
  minor: "Minor in Computer Science",
  institution: "Indian Institute of Technology Gandhinagar",
  duration: "Nov 2021 - June 2025 (Expected)",
  gpa: "8.59/10",
  relevantCourses: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Machine Learning",
    "Computer and Network Security",
  ]
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="mb-28 max-w-[45rem] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Education</SectionHeading>
      
      <div className="bg-white/50 dark:bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-black/5 dark:border-white/5">
        <div className="flex items-start gap-4">
          <div className="bg-blue-600/10 dark:bg-blue-400/10 p-3 rounded-full">
            <HiAcademicCap className="text-3xl text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {education.degree}
            </h3>
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
              {education.minor}
            </p>
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
              {education.institution}
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-300">
              <span>{education.duration}</span>
              <span className="text-gray-400">•</span>
              <span>GPA: {education.gpa}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.relevantCourses.map((course, index) => (
              <span
                key={index}
                className="bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-100 text-sm font-medium px-3 py-1.5 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
} 