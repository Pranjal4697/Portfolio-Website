'use client';

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

type SkillCategory = {
  [key: string]: readonly string[];
};

const skillsData: SkillCategory = {
  "Programming Languages": [
    "Python",
    "C++",
    "Javascript",
    "SQL"
  ] as const,
  "Web Technologies": [
    "Flask",
    "Next.js",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
   
  ] as const,
  "Databases & Tools": [
    "MySQL",
    "Git",
    "Docker",
  ] as const,
  "Other Skills": [
    "Problem Solving",
    "Quick Learning",
    "Team Work",
  ] as const,
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={category} className="mb-4">
            <h3 className="text-xl font-bold mb-4 text-gradient">{category}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-black/5 dark:border-white/5 px-5 py-2 rounded-full text-gray-900 dark:text-white hover:scale-105 transition-transform"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 