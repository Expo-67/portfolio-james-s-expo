"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About
        <span className="text-orange-400"> Me</span>
      </h1>

      <div className="grid grid-cols-8 gap-6 place-items-center">
        <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className="text-lg text-white/70 mt-2">
                Degree in Computer Science from Africa Nazarene University.
                Currently advancing full-stack development skills at GomyCode
                Kenya, focusing on React, Next.js, TypeScript, and MongoDB.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6">
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Problem-Solving
              </h2>
              <p className="text-lg text-white/70 mt-2">
                Skilled in solving complex challenges, debugging, optimizing
                workflows, and streamlining processes in software development.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6">
            <Image src={card} alt="card" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experience</h2>
              <p className="text-lg text-white/70 mt-2">
                I have a diverce portfolio of projects
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="flex flex-row p-6">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skills
              </h2>
              <p className="text-lg text-white/70 mt-2">
                Proficient in full-stack development with expertise in React,
                Node.js, TypeScript, Next.js, and MongoDB. Experienced in
                building scalable web applications, debugging, and optimizing
                code for performance. Familiar with version control, testing
                frameworks, and agile development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
