import { div } from "framer-motion/client";
import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 size={140} color="#E34F26" />, label: "HTML" },
  { icon: <FaCss3Alt size={140} color="#1572B6" />, label: "CSS" },
  { icon: <SiJavascript size={140} color="#F7DF1E" />, label: "JavaScript" },
  { icon: <SiTypescript size={140} color="#3178C6" />, label: "TypeScript" },
  { icon: <FaReact size={140} color="#61DAFB" />, label: "React" },
  { icon: <SiNextdotjs size={140} color="#000000" />, label: "Next.js" },
  { icon: <FaNodeJs size={140} color="#339933" />, label: "Node.js" },
  { icon: <SiExpress size={140} color="#000000" />, label: "Express.js" },
  { icon: <FaDatabase size={140} color="#F29111" />, label: "Databases" },
  { icon: <SiMongodb size={140} color="#47A248" />, label: "MongoDB" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[160px] w-[160px] md:h-[220px] w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
