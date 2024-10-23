import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";

export default function Skills({ className }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const frontendSkills = [
    {
      name: "HTML",
      color: "bg-red-500",
      icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      color: "bg-blue-500",
      icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      color: "bg-yellow-500",
      icon: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React",
      color: "bg-teal-500",
      icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
      link: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      color: "bg-gray-900",
      icon: "/images/skills/nextjs.png",
      link: "https://nextjs.org/",
    },
    {
      name: "Astro.js",
      color: "bg-gray-900",
      icon: "https://img.icons8.com/?size=100&id=lckHFUP7nJhG&format=png&color=000000",
      link: "https://astro.build/",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      color: "bg-green-500",
      icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      link: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      color: "bg-green-500",
      icon: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
      link: "https://nodejs.org/",
    },
    {
      name: "MySQL",
      color: "bg-blue-700",
      icon: "https://img.icons8.com/?size=100&id=fzjkJYWsuYGD&format=png&color=018FB4",
      link: "https://www.mysql.com/",
    },
  ];

  const devTools = [
    {
      name: "VSCode",
      color: "bg-blue-600",
      icon: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Git",
      color: "bg-black",
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      link: "https://github.com/",
    },
    {
      name: "GitHub",
      color: "bg-black",
      icon: "https://img.icons8.com/?size=100&id=37VT6ruj1sNX&format=png&color=FFFFFF",
      link: "https://github.com/",
    },
  ];

  useEffect(() => {
    const skillsContainer = containerRef.current;
    if (skillsContainer) {
      skillsContainer.style.animationPlayState = isHovered
        ? "paused"
        : "running";
    }
  }, [isHovered]);

  const SkillItemFrontend = ({ item }) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 border-2 border-white rounded-lg p-2 mr-8 bg-transparent`}
      style={{ minWidth: "180px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.icon} alt={item.name} className="w-8 h-8" />
      <h3 className="font-bold text-lg">{item.name}</h3>
    </a>
  );

  const SkillItem = ({ item }) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 border-2 border-white rounded-md p-2 mr-8 bg-transparent`}
      style={{ minWidth: "180px" }}
    >
      <img src={item.icon} alt={item.name} className="w-8 h-8" />
      <h3 className="font-bold text-lg">{item.name}</h3>
    </a>
  );

  return (
    <div className={`${className} overflow-hidden`}>
      <h2 className="font-bold text-4xl md:text-5xl mt-16 w-full text-center">Skills</h2>

      <h3 className="font-bold text-2xl md:text-3xl mt-12 w-full">Frontend</h3>
      <div className="relative my-8 w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex items-center justify-start text-white skills-container"
          style={{
            animation: "slide 40s linear infinite",
            width: `${frontendSkills.length * 400}px`,
          }}
        >
          {[...frontendSkills, ...frontendSkills].map((item, index) => (
            <SkillItemFrontend key={index} item={item} />
          ))}
        </div>
      </div>

      <h3 className="font-bold text-2xl md:text-3xl mt-12 w-full">Backend</h3>
      <div className="flex my-8">
        {backendSkills.map((item, index) => (
          <SkillItem key={index} item={item} />
        ))}
      </div>

      <h3 className="font-bold text-2xl md:text-3xl mt-12 w-full">Dev Tools</h3>
      <div className="flex my-8">
        {devTools.map((item, index) => (
          <SkillItem key={index} item={item} />
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
