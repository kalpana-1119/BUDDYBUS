
import React from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 bg-opacity-95 bg-[url('/bus-background.jpg')] bg-cover bg-center bg-fixed">
      <NavbarWrapper />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-buddybus-dark mb-6">About BuddyBus</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              BuddyBus is an innovative bus tracking system developed by the Computer Science and Engineering 
              department. Our mission is to provide real-time bus tracking capabilities to enhance the 
              transportation experience for our college community.
            </p>
            
            <div>
              <h2 className="text-xl font-semibold text-buddybus-dark mb-3">Our Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time bus tracking with live location updates</li>
                <li>Comprehensive route information and schedules</li>
                <li>Driver and passenger interfaces</li>
                <li>Fleet management for administrators</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-buddybus-dark mb-3">CSE Department Scope</h2>
              <p>
                This project showcases the practical application of various computer science concepts, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Full-stack web development</li>
                <li>Real-time data processing</li>
                <li>Location-based services</li>
                <li>User interface design</li>
                <li>System architecture</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
