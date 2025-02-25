import Link from 'next/link';
import { BsArrowRight, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProfileImage from '@/components/ProfileImage';
import Education from '@/components/Education';
import ProfessionalHighlights from '@/components/ProfessionalHighlights';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="max-w-[50rem] text-center mb-40 scroll-mt-[100rem] pt-28 sm:pt-36" id="home">
        <ProfileImage />

        <h1 className="mb-10 mt-12 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
          <span className="font-bold text-white">Hello, I'm Pranjal.</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
            A final-year BTech student at IIT Gandhinagar
          </span>{" "}
          with a passion for{" "}
          <span className="font-bold text-white">innovative software development</span>. I transform ideas into{" "}
          <span className="italic">efficient, scalable solutions</span> with a focus on{" "}
          <span className="underline decoration-blue-400 decoration-2 text-white">real-world impact</span>.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium mt-8">
          <Link
            href="#contact"
            className="group bg-gradient-to-r from-blue-500 to-blue-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white/80 text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/80"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <div className="flex gap-3">
            <a
              className="bg-white/80 p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-blue-600 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/80"
              href="https://linkedin.com/in/pranjal4697"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white/80 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/80"
              href="https://github.com/pranjal4697"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </section>

      <About />
      <ProfessionalHighlights />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}