'use client';

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail, HiClock, HiLocationMarker, HiStatusOnline } from "react-icons/hi";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: email,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully!",
      });
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <div className="bg-white/50 dark:bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-black/5 dark:border-white/5">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50/50 dark:bg-blue-900/20 p-4 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <HiStatusOnline className="text-2xl text-green-500" />
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">Status</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Open to Opportunities</p>
          </div>
          
          <div className="bg-blue-50/50 dark:bg-blue-900/20 p-4 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <HiClock className="text-2xl text-blue-500" />
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">Response Time</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Within 24 hours</p>
          </div>

          <div className="bg-blue-50/50 dark:bg-blue-900/20 p-4 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <HiLocationMarker className="text-2xl text-red-500" />
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">IIT Gandhinagar, India</p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
          I'm <span className="text-green-600 dark:text-green-400 font-medium">available</span> for both{" "}
          <span className="font-medium">Full-time</span> and{" "}
          <span className="font-medium">Internship</span> opportunities starting{" "}
          <span className="font-medium">June 2025</span> (post-graduation). Let's connect and discuss potential collaborations!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="mailto:pranjal4697@gmail.com"
            className="flex items-center gap-2 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-100 px-4 py-2 rounded-full hover:scale-105 transition"
          >
            <HiMail className="text-xl" />
            pranjal4697@gmail.com
          </a>
          
          <a 
            href="https://linkedin.com/in/pranjal4697"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-100 px-4 py-2 rounded-full hover:scale-105 transition"
          >
            <BsLinkedin />
            LinkedIn Profile
          </a>
        </div>

        <form
          className="mt-10 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="bg-white/30 dark:bg-gray-800/30 p-6 rounded-xl">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Send Direct Message</h3>
            <input
              className="h-14 px-4 rounded-lg bg-white dark:bg-gray-800/50 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500/80 dark:placeholder:text-gray-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition w-full"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="h-52 rounded-lg bg-white dark:bg-gray-800/50 border border-black/10 dark:border-white/10 p-4 text-gray-900 dark:text-white placeholder:text-gray-500/80 dark:placeholder:text-gray-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition resize-none w-full mt-4"
              name="message"
              placeholder="Your message - Feel free to include your preferred contact method and availability for a response"
              required
              maxLength={5000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {status.message && (
            <div
              className={`${
                status.type === "success"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
              } px-4 py-3 rounded-lg text-sm`}
            >
              {status.message}
            </div>
          )}

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:brightness-110 active:scale-105 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                </>
              ) : (
                <>
                  Send Message{" "}
                  <HiMail className="text-xl opacity-70 transition-all group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
} 