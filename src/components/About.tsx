'use client';

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-20 bg-white/50 dark:bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-black/5 dark:border-white/5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-gray-700 dark:text-gray-300">
        Currently pursuing my BTech at <span className="font-semibold text-blue-600 dark:text-blue-400">IIT Gandhinagar</span> (graduating June 2025), 
        I've developed a strong foundation in <span className="font-semibold text-blue-600 dark:text-blue-400">full-stack development, algorithms, and software architecture</span>. 
        Through my academic and personal projects, I've demonstrated <span className="font-semibold text-blue-600 dark:text-blue-400">quick learning abilities and practical problem-solving skills</span>.
      </p>

      <p className="mb-3 text-gray-700 dark:text-gray-300">
        My technical journey includes <span className="font-semibold text-blue-600 dark:text-blue-400">hands-on experience with modern development practices</span>. 
        From building <span className="font-semibold text-blue-600 dark:text-blue-400">Chrome extensions to full-stack web applications</span>, 
        I've consistently focused on creating solutions that are both <span className="font-semibold text-blue-600 dark:text-blue-400">efficient and maintainable</span>. 
        Each project has strengthened my commitment to writing clean, scalable code.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        As I approach graduation, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">eager to join a collaborative team</span> where I can 
        apply my skills and continue growing. I bring fresh perspectives, strong <span className="font-semibold text-blue-600 dark:text-blue-400">analytical abilities, and a genuine passion for technology</span>. 
        Looking forward to contributing to impactful projects while developing both <span className="font-semibold text-blue-600 dark:text-blue-400">technical and professional capabilities</span>.
      </p>
    </motion.section>
  );
}