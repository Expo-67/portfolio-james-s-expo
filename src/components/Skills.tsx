import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
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
  { icon: <FaDatabase size={140} color="#4479A1" />, label: "SQL" },
  { icon: <SiMongodb size={140} color="#47A248" />, label: "MongoDB" },
];

const Skills = () => {
  return (
    <div
      className="bg-[#1a2a3a]
mx-auto px-4 py-8 pb-10"
    >
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I do</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skillIcons.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-xl">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
