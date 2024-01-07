'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItemVariants = {
    open: {
      scale: 1.05,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
    closed: {
      scale: 0.95,
      opacity: 0,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <nav className="flex items-center justify-between w-full px-8 py-4">
      {/* Logo or Branding */}
      <div className="flex items-center">
        <img src="../logo.png" alt="Logo" className="h-8 md:h-10" />
      </div>

      {/* Hamburger Icon */}
      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            className={isOpen ? 'hidden' : 'w-6 h-6 text-white'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex w-full justify-center">
        <motion.ul className="flex justify-center items-center space-x-8 text-white">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <motion.li
              key={item}
              variants={navItemVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <Link href={`#${item}`} className="block px-4 py-2 text-center">
                {item.toUpperCase()}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-20 flex items-center justify-center bg-black md:hidden"
        >
          {/* Close Icon */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <motion.ul className="flex flex-col items-center justify-center space-y-4">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <motion.li
                key={item}
                variants={navItemVariants}
                whileHover="hover"
                className="text-white"
              >
                <Link href={`#${item}`} className="block px-4 py-2 text-center">
                  {item.toUpperCase()}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
