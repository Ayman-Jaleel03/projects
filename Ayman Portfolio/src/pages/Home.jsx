import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaMedium
} from 'react-icons/fa';

// Import your photo - replace with your actual import path
import MyPhoto from '../images/my.jpg';  // Adjust the path as needed

const Home = () => {
  const navigate = useNavigate();
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

  const skills = [
    { 
      name: "React", 
      level: 85, 
      description: "Crafting dynamic, responsive web applications with modern React ecosystem." 
    },
    { 
      name: "UI/UX", 
      level: 94, 
      description: "Designing intuitive, user-centered interfaces that solve real-world problems." 
    },
    { 
      name: "JavaScript", 
      level: 82, 
      description: "Building interactive and scalable frontend solutions with advanced JavaScript techniques." 
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants}>
              <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Available for projects</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                <span className="block">Hi, I'm</span>
                <span className="block mt-2 gradient-text">Ayman Jaleel</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Computer Science undergraduate passionate about creating 
                <span className="text-white"> digital experiences</span> that make a meaningful impact.
              </p>

              {/* Skills Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Core Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className={`
                        p-4 rounded-xl transition-all duration-300 
                        ${hoveredSkill === skill.name 
                          ? 'bg-gradient-to-r from-purple-600/50 to-blue-500/50 scale-105' 
                          : 'bg-gray-800/50'}
                      `}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      {hoveredSkill === skill.name && (
                        <p className="text-xs text-gray-300 mt-2">{skill.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.button 
                  onClick={() => handleNavigation('/projects')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
                
                <motion.button 
                  onClick={() => handleNavigation('/contact')}
                  className="px-6 py-3 rounded-full border border-white/20 text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex items-center space-x-4">
                <span className="text-gray-400">Connect:</span>
                {[
                  { icon: FaGithub, href: "https://github.com/Ayman-Jaleel03" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/thaheshan-suresh0911/" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaMedium, href: "https://medium.com/@mthalapathy549" },
                  { icon: FaEnvelope, href: "mailto:thaheshanmanithan@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="relative flex justify-center"
            >
              <div className="max-w-md w-full">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/10">
                  <img
                    src={MyPhoto}
                    alt="Ayman Jaleel"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400?text=Ayman+Jaleel";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;