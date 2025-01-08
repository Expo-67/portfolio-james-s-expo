"use client";

import React, { useState } from "react";
import Image from "next/image";
import education from "../assets/education.png";
import techskills from "../assets/techskills.png";
import prob from "../assets/problem.png";
import projects from "../assets/projectss.png";
import { ChevronRight, ChevronLeft } from "lucide-react";

const About = () => {
  const [currentColumn, setCurrentColumn] = useState(0);

  const columns = [
    {
      image: education,
      title: "Education",
      content:
        "Computer Science graduate from Africa Nazarene University and a software development bootcamp graduate from GomyCode Kenya. Specialized in full-stack web development with expertise in MongoDB, Express, Reactjs, Next.js and Typescript. Experienced in building scalable, responsive web applications, managing state with React and Redux, and integrating APIs to create dynamic, high-performance solutions.",
    },
    {
      image: prob,
      title: "Problem-Solving",
      content:
        "Skilled in solving complex problems, debugging issues, improving workflows, and optimizing development processes for better efficiency.",
    },
    {
      image: projects,
      title: "Experience",
      content:
        "I have built a diverse portfolio of projects throughout my software development bootcamp, showcasing my ability to tackle a wide range of challenges and apply my skills to real-world applications.",
    },
    {
      image: techskills,
      title: "Technical Skills",
      content:
        "Proficient in full-stack web development with expertise in React.js, Node.js, TypeScript, Next.js, and MongoDB. Skilled in designing and implementing scalable web applications, debugging complex issues, and optimizing code for performance and maintainability. Adept at using version control systems, integrating testing frameworks, and adhering to agile development methodologies to deliver high-quality solutions.",
    },
  ];

  const nextColumn = () => {
    setCurrentColumn((prev) => (prev + 1) % columns.length);
  };

  const prevColumn = () => {
    setCurrentColumn((prev) => (prev - 1 + columns.length) % columns.length);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8" id="about">
      <h1 className="text-white text-4xl md:text-6xl max-w-[320px] mx-auto font-semibold mb-8 text-center">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-opacity duration-300 ${
              index === currentColumn
                ? "opacity-100"
                : "opacity-0 hidden md:block md:opacity-100"
            }`}
          >
            <div className="flex flex-col p-6 h-full">
              <Image
                src={column.image}
                alt={column.title}
                className="w-auto h-[130px] mb-4 mx-auto"
              />
              <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white/80 mb-2">
                  {column.title}
                </h2>
                <p className="text-lg text-white/70 flex-grow">
                  {column.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 md:hidden">
        <button
          onClick={prevColumn}
          className="bg-orange-400 text-white p-2 rounded-full mr-4"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextColumn}
          className="bg-orange-400 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default About;
