import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

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

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setStatus('error');
      });
  };

  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      value: "sajaal2003@gmail.com"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Colombo, Sri Lanka"
    },
    {
      icon: "🌐",
      title: "Social",
      value: "LinkedIn • GitHub • Instagram"
    }
  ];

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
            Get in Touch
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information Section */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="card p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg">
                <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center mb-4 space-x-4">
                    <span className="text-3xl">{method.icon}</span>
                    <div>
                      <p className="text-white font-semibold">{method.title}</p>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <form 
                ref={form} 
                onSubmit={sendEmail} 
                className="card p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg space-y-6"
              >
                {['Name', 'Email', 'Message'].map((field, index) => {
                  const inputProps = {
                    Name: {
                      type: 'text',
                      name: 'user_name',
                      rows: 1
                    },
                    Email: {
                      type: 'email',
                      name: 'user_email',
                      rows: 1
                    },
                    Message: {
                      type: 'textarea',
                      name: 'message',
                      rows: 4
                    }
                  }[field];

                  return (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-2 text-white">
                        {field}
                      </label>
                      {field === 'Message' ? (
                        <textarea
                          {...inputProps}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-white text-white"
                        />
                      ) : (
                        <input
                          {...inputProps}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-white text-white"
                        />
                      )}
                    </div>
                  );
                })}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-all"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500 text-center"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-center"
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;