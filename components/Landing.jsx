"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Landing = () => {
  const sentence = ["Hi, I'm ", "Amina Miah"];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex justify-center items-start pt-16 lg:pt-24 w-full min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between px-6 lg:px-8">
        <div className="lg:flex-shrink-0 w-48 h-48 lg:w-64 lg:h-64 relative mt-8 lg:mt-0">
          <Image
            src="/avatar.jpeg" // Replace with your image path
            alt="Amina Miah"
            layout="fill"
            className="rounded-full"
            priority
          />
        </div>
        <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0">
          <motion.h1
            className="text-5xl lg:text-7xl leading-none font-semibold"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sentence.map((word, index) => (
              <React.Fragment key={index}>
                {word.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </React.Fragment>
            ))}
          </motion.h1>
          <p className="text-xl text-center lg:text-right text-white mt-4">
            I am an enthusiastic Software Engineer.
          </p>
          <a
            href="https://github.com/yourusername"
            className="mt-6 inline-block bg-transparent text-white font-bold py-2 px-4 border border-white rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
