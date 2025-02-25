import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranjal's Portfolio | Software Engineer",
  description: "Final year engineering student passionate about building scalable software solutions and problem-solving.",
  keywords: ["software engineer", "full-stack developer", "React", "Node.js", "TypeScript", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-slate-50 to-slate-100 text-gray-950 relative pt-28 sm:pt-36 dark:from-gray-900 dark:to-gray-800 dark:text-gray-50 transition-colors`}>
        <div className="bg-[#fbe2e3]/50 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]/30"></div>
        <div className="bg-[#dbd7fb]/50 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]/30"></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <Header />
        <main className="px-4 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
} 