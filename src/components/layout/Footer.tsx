"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../shared/ContactForm";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/ajaparicio36", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ajaparicio36/",
      icon: "linkedin",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ajaparicio6/",
      icon: "facebook",
    },
    { name: "X (Twitter)", url: "https://x.com/ajaparicio36", icon: "twitter" },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        );
      case "twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 9-5.8 1.6 1 3 2.4 4 4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full mx-auto mb-6" />
          <p className="font-calsans text-xl md:text-2xl text-center text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's collaborate and
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glowing background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl" />

            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-orbitron mb-6 text-center lg:text-left">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-orbitron mb-6 text-center lg:text-left">
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-3 p-4 bg-black/30 hover:bg-black/50 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                    >
                      {/* Glowing background on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                        {renderIcon(link.icon)}
                      </div>
                      <span className="font-calsans text-gray-200 group-hover:text-white transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h4 className="font-orbitron text-lg mb-4 text-purple-200">
                Quick Info
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-300">
                    Available for freelance projects
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-300">
                    Response time: 24-48 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-300">Based in Philippines</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-roboto text-muted-foreground">
              © {new Date().getFullYear()} Anthony John Aparicio. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Built with Next.js & Framer Motion</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>Designed with ❤️</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
