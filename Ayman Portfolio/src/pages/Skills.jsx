import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 }
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 92 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 85 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 88 },
      { name: "Figma", level: 90 }
    ]
  }
];

const SkillCard = ({ skill }) => {
  return (
    <motion.div 
      className="bg-gray-800 p-4 rounded-xl"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: 'rgba(55, 65, 81, 0.8)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-blue-400 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ 
            duration: 1, 
            delay: 0.2,
            type: "tween"
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <div className="min-h-screen pt-20 px-4 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-12 gradient-text text-center">
            My Skills
          </h1>

          {/* Category Selector */}
          <div className="flex justify-center mb-12 space-x-4">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${activeCategory === category.name 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                `}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories
              .find(category => category.name === activeCategory)
              .skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))
            }
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;