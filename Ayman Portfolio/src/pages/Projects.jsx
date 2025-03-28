import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "VITISCO",
    description: "Developed a machine learning model for real-time Hand Gesture Detection and Convert it into text and voice for Hearing Aid Individuals And give Customized lessons, ML Based Automized Feedback, and Progress Tracking As For My SDGP Project.",
    technologies: ["Python", "TensorFlow", "React Native", "Node.js"],
    link: "https://vitisco.netlify.app/",
    type: "Web & ML"
  },
  {
    title: "Movie Ticket Booking App",
    description: "Developed high-fidelity prototypes using Figma for a movie ticket booking system. Designed an intuitive and visually appealing interface to streamline the ticket reservation process, including seat selection, showtime filtering, and secure payment integration.",
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/dL553lYGIRHJwQ42U5zV6I/Untitled?page-id=0%3A1&node-id=5-523&p=f&viewport=84%2C185%2C0.15&t=BUlKM8yuGZnfSg8V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A258",
    type: "UI/UX Design"
  },
  {
    title: "Snackcident",
    description: "Built a Ui/Ux design using figma platform for a better eco-friendly system.",
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/TD30QmGxMXg02RZJ8t4f8C/high-fid-HCI?page-id=0%3A1&node-id=28-656&p=f&viewport=302%2C433%2C0.16&t=e66gRrASyHgTHii1-1&scaling=scale-down&content-scaling=fixed",
    type: "UI/UX Design"
  },
  {
    title: "Weather App",
    description: "Built a Ui/Ux design using figma platform for a better eco-friendly system.",
    technologies: ["Figma"],
    link: "#",
    type: "UI/UX Design"
  },
  {
    title: "Blood Donation app",
    description: "Built a Ui/Ux design using figma platform for a better eco-friendly system.",
    technologies: ["Figma"],
    link: "#",
    type: "UI/UX Design"
  },
  {
    title: "VITISCO UI/UX",
    description: "Built a Ui/Ux design using figma platform for language learning for deaf individuals.",
    technologies: ["Figma"],
    link: "#",
    type: "UI/UX Design"
  },
  {
    title: "Breast Cancer Predicting Model",
    description: "Built a multimodel predicting system using R.",
    technologies: ["Python"],
    link: "#",
    type: "Machine Learning"
  },
  {
    title: "Real-time Student Management System",
    description: "Built a student and staff records Management System For managing their records and module details with using OOP concepts and Java core fundamentals with Java and React.",
    technologies: ["Java", "React", "SQL"],
    link: "#",
    type: "Full Stack"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectTypes = ["All", ...new Set(projects.map(p => p.type))];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <div className="min-h-screen pt-20 px-4 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-12 gradient-text text-center">
            My Projects
          </h1>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12 space-x-4">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${filter === type 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                `}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="card group overflow-hidden rounded-2xl border border-gray-800 hover:border-blue-500 transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="text-sm bg-gray-800 px-3 py-1 rounded-full text-blue-300">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <a
                      href={project.link}
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </a>
                    <div className="flex space-x-2">
                      <span className="text-gray-500 hover:text-white transition-colors">
                        {"</>"}
                      </span>
                      <span className="text-gray-500 hover:text-white transition-colors">
                        🌐
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;