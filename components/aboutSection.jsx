"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMusic,
  FaFilm,
  FaLaptopCode,
  FaGamepad,
  FaTimes,
} from "react-icons/fa";

const AboutMe = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const gridVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const interests = [
    {
      name: "TECH",
      icon: <FaLaptopCode />,
      description: "Always on the cutting edge of technology and innovation.",
    },
    {
      name: "Music",
      icon: <FaMusic />,
      description: "Description for Music...",
    },
    {
      name: "Games",
      icon: <FaGamepad />,
      description:
        "Gaming offers a fun escape into different worlds and I enjoy the thrill of competition.",
    },
    {
      name: "Movies",
      icon: <FaFilm />,
      description:
        "There's nothing like a good movie to transport you to another place and time.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row text-white bg-black">
      <div className="md:flex-1">
        <img
          src="path_to_your_image.png"
          alt="Profile"
          className="rounded-full md:rounded-lg w-32 h-32 md:w-full md:h-auto mx-auto md:mx-0"
        />
      </div>
      <div className="md:flex-1 p-8">
        <h2 className="text-4xl font-bold mb-4">About Me.</h2>
        <p className="mb-4">
          I am a driven Software Engineer with a strong passion for creating
          captivating applications. My dedication lies in crafting innovative
          and engaging software solutions. Constantly seeking opportunities to
          expand my knowledge and expertise in the ever-evolving field, I am
          fuelled by a deep curiosity for the latest technologies and their
          potential applications.
        </p>
        <h2 className="text-4xl font-bold mb-4">My Interests.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-2 md:p-4 rounded-lg text-center cursor-pointer"
              variants={gridVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedInterest(interest)}
            >
              <motion.div className="text-2xl md:text-3xl mb-2">
                {interest.icon}
              </motion.div>
              <p className="font-semibold text-sm md:text-base">
                {interest.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedInterest && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="fixed top-1/4 right-1/4 md:top-1/2 md:right-1/4 -translate-y-1/2 bg-gray-800 p-6 rounded-lg shadow-lg z-10"
            style={{ width: "20rem", height: "10rem" }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => setSelectedInterest(null)}
              className="absolute top-4 right-4"
            >
              <FaTimes className="text-white text-2xl" />
            </motion.button>
            <h4 className="text-xl font-bold mb-4">{selectedInterest.name}</h4>
            <p>{selectedInterest.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMe;
