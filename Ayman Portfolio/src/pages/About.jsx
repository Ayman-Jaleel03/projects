import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeSection, setActiveSection] = useState('Journey');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const sections = {
    Journey: (
      <motion.div 
        className="card p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">My Journey</h2>
        <p className="leading-relaxed text-gray-300">
          As a Computer Science undergraduate at IIT, I've developed a deep passion for creating innovative technological solutions. 
          My journey began with a fascination for problem-solving and has evolved into a comprehensive skill set spanning machine learning, 
          software development, and UI/UX design. I believe in the power of technology to transform ideas into impactful solutions.
        </p>
      </motion.div>
    ),
    Education: (
      <div className="space-y-6">
        <div className="card p-6 rounded-2xl relative overflow-hidden bg-gray-800/50 backdrop-blur-lg">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-white">BSc(Hons) in Computer Science</h3>
            <p className="text-gray-400">Informatics Institute of Technology (IIT)</p>
            <p className="text-gray-400">2024 - Present</p>
          </div>
        </div>

        <div className="card p-6 rounded-2xl relative overflow-hidden bg-gray-800/50 backdrop-blur-lg">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-white">Higher Education</h3>
            <div className="mt-2">
              <p className="text-gray-400">ZAHIRA COLLEGE KALMUNAI</p>
              <li className="text-gray-300 ml-4">Finished G.C.E O/L</li>
              <p className="text-gray-400 mt-2">KM/AL-ASHRAQ NATIONAL SCHOOL</p>
              <li className="text-gray-300 ml-4">Finished G.C.E A/L</li>
            </div>
          </div>
        </div>
      </div>
    ),
    Expertise: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "UI/UX Design",
            description: "User-centered design, wireframing, prototyping, and usability testing. Proficient in Figma and Axure.",
            icon: "🎨"
          },
          {
            title: "Frontend Development",
            description: "Frontend Development Specializing in React.js and React native. Experienced in building responsive, accessible UIs with HTML5, CSS and Java Script. Skilled in UI/UX principles.",
            icon: "🤖"
          },
          {
            title: "Software Development",
            description: "Frontend & Backend development with React, Node.js and Spring Boot. Building scalable web applications with modern architectures.",
            icon: "💻"
          }
        ].map((expertise, index) => (
          <motion.div
            key={index}
            className="card p-6 rounded-2xl transform hover:scale-105 transition-transform bg-gray-800/50 backdrop-blur-lg"
            whileHover={{
              boxShadow: "0 0 20px rgba(255,255,255,0.1)"
            }}
          >
            <div className="text-4xl mb-4">{expertise.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{expertise.title}</h3>
            <p className="text-gray-400">{expertise.description}</p>
          </motion.div>
        ))}
      </div>
    ),
    Philosophy: (
      <motion.div 
        className="card p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">Professional Philosophy</h2>
        <p className="text-gray-300 leading-relaxed">
          I believe that great design is invisible—it effortlessly guides, delights, and empowers users. 
          My approach merges empathy with aesthetics, ensuring that every interaction is intuitive, meaningful, and human-centered.
          I'm passionate about solving real problems through thoughtful research, clean visuals, and seamless experiences. 
          To me, design isn't just about how things look; it's about how they work, how they feel, and the impact they create. 
          I strive to craft interfaces that don't just meet needs but exceed expectations—balancing beauty, functionality, and accessibility at every step.
        </p>
      </motion.div>
    )
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl font-bold mb-12 gradient-text text-center"
            variants={itemVariants}
          >
            About Me
          </motion.h1>
          
          {/* Section Selector */}
          <div className="flex justify-center mb-12 space-x-4">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${activeSection === section 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                `}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {sections[activeSection]}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;