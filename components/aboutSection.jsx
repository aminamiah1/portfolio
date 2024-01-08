"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaLaptopCode,
  FaGamepad,
  FaMusic,
  FaFilm,
  FaTimes,
} from "react-icons/fa";

const AboutMe = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const interests = [
    {
      name: "Tech",
      icon: <FaLaptopCode />,
      description:
        "I love tech from the hardware to the software. I'm always wanting to own the latest and coolest tech gadgets. I am learning Python right now because I want to work on Rasberry Pi to make a speaker where you can swipe an album card and it'll play the album",
    },
    {
      name: "Music",
      icon: <FaMusic />,
      description:
        "Music is a universal language and I love discovering new genres and artists.",
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

  const closeDetailCard = () => {
    setSelectedInterest(null);
  };

  return (
    <section className="text-white bg-black p-8">
      <div className="max-w-7xl mx-auto flex flex-row items-start">
    
        <div className="flex-none w-64 h-64 rounded-lg overflow-hidden mr-8">
          <Image
            src="/aboutAvatar.jpg"
            alt="Avatar"
            width={256}
            height={256}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="flex-grow">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I am a driven Software Engineer with a strong passion for creating
            captivating applications...
          </p>
          <h3 className="text-3xl font-bold mb-4">My Interests</h3>
          <div
            className="grid grid-cols-2 gap-8 mb-6"
            style={{ maxWidth: "500px" }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="bg-[#4f5689] p-4 rounded-lg text-center cursor-pointer flex flex-col items-center justify-center"
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedInterest(interest)}
                style={{ height: "120px" }}
              >
                <motion.div className="text-3xl mb-2">
                  {interest.icon}
                </motion.div>
                <div className="font-semibold">{interest.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedInterest && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-[#4f5689] rounded-lg shadow-lg p-6 flex-none"
              style={{ width: "400px" }}
            >
              <motion.button
                onClick={closeDetailCard}
                className="absolute top-4 right-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-white text-2xl" />
              </motion.button>
              <h4 className="text-lg font-bold mb-4">
                {selectedInterest.name}
              </h4>
              <p>{selectedInterest.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutMe;
