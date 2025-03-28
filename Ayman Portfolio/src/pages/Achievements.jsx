import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Achievements = () => {
  const [activeSection, setActiveSection] = useState('Timeline');

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

  const achievements = [
    {
      date: "2024",
      title: "Best Impact Behind The Event",
      organization: "INDUSTPRO 3.0",
      description: "Received recognition for Contribution to the event and the impact created"
    },
    // Add more achievements as needed
  ];

  const sections = {
    Timeline: (
      <VerticalTimeline>
        {achievements.map((achievement, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            date={achievement.date}
            iconStyle={{ 
              background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', 
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            icon={<span>🏆</span>}
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              boxShadow: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
          >
            <h3 className="text-xl font-bold mb-1 text-white">{achievement.title}</h3>
            <h4 className="text-gray-400 mb-2">{achievement.organization}</h4>
            <p className="text-gray-300">{achievement.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    ),
    Certifications: (
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            category: "Technical Certifications",
            items: [
              "Machine Learning Specialization - UDEMY",
              "Springboot Fundamentals - Linkedin Learning",
              "Angular Fundamentals - Linkedin Learning"
            ]
          },
          // {
          //   category: "Event Participation",
          //   items: [
          //     "Idealize 2024 - Certificate of semifinalist",
          //     "IdeaForge 2024 - Certificate of participation",
          //     "International Hackathon 2024 - Certificate of participation",
          //     "Encide 2024 - Certificate of participation",
          //     "Moraxtreme 2024 - Certificate of participation"
          //   ]
          // }
        ].map((section, index) => (
          <motion.div 
            key={index}
            className="card p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <span className="mr-3 text-purple-400 text-2xl">📜</span>
              <h2 className="text-xl font-semibold text-white">{section.category}</h2>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className="text-gray-300 flex items-start"
                >
                  <span className="mr-2 mt-1 text-blue-400 text-sm">✨</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    ),
    Recognition: (
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            category: "Leadership Roles",
            items: [
              "IET Standing Committee Lead 24/25",
              "Hult Prize Committee Co-Lead 25",
              "Backbone of The Event (INDUSTPRO 3.0)"
            ]
          },
          {
            category: "Notable Achievements",
            items: [
              "Best Impact Behind The Event - INDUSTPRO 3.0",
              "Semifinalist in Multiple Hackathons",
              "Active Participant in Tech Events"
            ]
          }
        ].map((section, index) => (
          <motion.div 
            key={index}
            className="card p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <span className="mr-3 text-purple-400 text-2xl">🏅</span>
              <h2 className="text-xl font-semibold text-white">{section.category}</h2>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className="text-gray-300 flex items-start"
                >
                  <span className="mr-2 mt-1 text-blue-400 text-sm">✨</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
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
            Achievements & Recognition
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

export default Achievements;