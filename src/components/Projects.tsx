'use client';

import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectsData = [
  {
    title: "On-Campus Employment Portal",
    description:
      "A comprehensive employment management system for IIT Gandhinagar that automates the entire hiring process. Features include secure role-based access for students and faculty, automated job posting system, and real-time application tracking. Built with Flask and SQL, serving the institute's employment program.",
    tags: ["Flask", "SQL", "Authentication", "Python", "Team Lead"],
    imageUrl: "/project-employment.png",
    projectLink: "https://oceo-management.koyeb.app/",
    githubLink: "https://github.com/AnimeshTumne/oCEO_management_DataWeavers"
  },
  {
    title: "YouTube Feed Detoxifier",
    description:
      "A Chrome extension that personalizes YouTube feeds through keyword-based content filtering. Features include NLP-powered real-time content analysis, smart caching for optimal performance, and customizable filtering preferences. Enhances viewing experience by delivering more relevant content while maintaining seamless browsing.",
    tags: ["Node.js", "Chrome API", "NLP", "API Integration", "Caching"],
    imageUrl: "/chrome-ext.png",
    githubLink: "https://github.com/Pranjal4697/Detoxify-youtube"
  },
  {
    title: "Secure Logging System",
    description:
      "A robust command-line application for secure log management using advanced cryptographic algorithms. Features include encrypted log storage, authenticated append operations, and a token-based security model preventing unauthorized access. Rigorously tested through a competitive bug-hunting phase, ensuring high security standards.",
    tags: ["C++", "Cryptography", "Security", "CLI", "Authentication"]
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and built a modern portfolio showcasing my work. Features include responsive design, dark mode support, smooth animations, and optimized performance using Next.js and React.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/portfolio.png",
    githubLink: "https://github.com/Pranjal4697/Portfolio-Website"
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: string;
  projectLink?: string;
  githubLink?: string;
};

function ProjectCard({ title, description, tags, imageUrl, projectLink, githubLink }: Project) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="section-bg rounded-xl overflow-hidden card-shadow group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {imageUrl ? (
        <div className="h-52 overflow-hidden relative">
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
      ) : (
        <div className="h-52 bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
          <div className="text-4xl font-bold text-gradient opacity-50">{title.charAt(0)}</div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gradient group-hover:opacity-90 transition-opacity">
            {title}
          </h3>
          <div className="flex gap-2">
            {projectLink && (
              <a 
                href={projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:opacity-80 transition p-1"
                title="Live Demo"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                  />
                </svg>
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:opacity-80 transition p-1"
                title="View Code"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-100 text-sm font-medium px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 