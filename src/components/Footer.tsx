import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 
  pt-4 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold">James Ndungu</h1>

      <div className="flex space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/james-ndungu-b406ab248/"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/Expo-67" className="hover:text-gray-300">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
