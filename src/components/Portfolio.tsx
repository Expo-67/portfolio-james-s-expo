"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import stram from "../assets/stram.png";
import Wel from "../assets/WEL.jpg";
import dep2 from "../assets/dep2.jpeg";

const projects = [
  {
    title: "Depwith",
    desc: "A full-stack app for seamless money deposits, withdrawals, and transaction tracking.",
    devStack: "MongoDB, Express, Reactjs, Node.js",
    link: "https://github.com/Expo-67/depwith",
    git: "https://github.com/Expo-67/depwith",
    src: dep2,
  },
  {
    title: "Stramco solutions",
    desc: "A streamlined HR consultancy, audit, and job placement app connecting people with opportunities and helping them secure jobs.",
    devStack: "HTML,CSS, Javascript, PHP, SQL",
    link: "https://stramcosolutions.com/",
    git: "https://github.com/Expo-67/Stramco-ltd.git",
    src: stram,
  },
  {
    title: "Service-Moti",
    desc: "A full-stack app for tracking car maintenance and service history, powered by AI for personalized car care tips.",
    devStack: "MongoDB, Express, React-ts, Node.js and Next.js",
    link: "https://github.com/Expo-67/Service-moti",
    git: "https://github.com/Expo-67/Service-moti",
    src: Wel,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected
        <span className="text-orange-400"> Projects</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-40">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1
                ? " md:flex-row-reverse gap-12"
                : "flex-col md:flex-row"
            }`}
          >
            <div className=" space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border 
                rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
